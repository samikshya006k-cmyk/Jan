import json
import logging
import re
import httpx
from typing import Dict, Any, List, Tuple, Optional

from app.core.config import settings

logger = logging.getLogger("jansetu.triage")


class AITriageService:
    """
    AI-powered civic grievance triage engine.
    Performs Gemini LLM semantic analysis, multilingual translation, 
    emergency hazard assessment, and department routing, with automated 
    rule-based NLP fallback.
    """

    # Multilingual keywords dictionary for categories
    CATEGORY_KEYWORDS = {
        "Road & Infrastructure": [
            "road", "pothole", "potholes", "street", "tar", "asphalt", "flyover", "bridge", 
            "footpath", "sidewalk", "divider", "cracks", "sinkhole", "accident", "damage",
            # Hindi / Marathi
            "सड़क", "गड्ढा", "गड्ढे", "खड्डा", "रस्ता", "पूल", "पादचारी", "दुर्घटना",
            # Odia
            "ରାସ୍ତା", "ଗାତ", "ପୋଲ",
            # Bengali
            "রাস্তা", "গর্ত", "পুল",
            # Telugu / Tamil
            "రోడ్డు", "గుంతలు", "சாலை", "பள்ளம்"
        ],
        "Water Supply": [
            "water", "pipe", "pipeline", "leak", "leakage", "burst", "pressure", "drinking",
            "tap", "supply", "dirty water", "contaminated", "tanker", "sewage mix",
            # Hindi / Marathi
            "पानी", "नल", "पाइप", "लीक", "जल", "दूषित पानी", "टैंकर",
            # Odia
            "ପାଣି", "ନଳ",
            # Bengali
            "জল", "নল", "পাইপ",
            # Telugu / Tamil
            "నీరు", "పైపు", "தண்ணீர்", "குழாய்"
        ],
        "Waste Management": [
            "garbage", "waste", "trash", "dump", "dustbin", "litter", "smell", "rotting",
            "overflowing", "plastic", "cleanliness", "sweeping", "animal carcass",
            # Hindi / Marathi
            "कचरा", "कूड़ा", "गंदगी", "कूड़ेदान", "सफाई", "बदबू", "दुर्गांधी",
            # Odia
            "ଆବର୍ଜନା", "ଅଳିଆ",
            # Bengali
            "বর্জ্য", "আবর্জনা", "ময়লা",
            # Telugu / Tamil
            "చెత్త", "குப்பை"
        ],
        "Street Lighting": [
            "light", "streetlight", "street light", "lamp", "pole", "dark", "wiring",
            "not working", "flickering", "bulb", "darkness", "safety at night",
            # Hindi / Marathi
            "लाइट", "स्ट्रीट लाइट", "बल्ब", "अंधेरा", "दीपक", "खांभा",
            # Odia
            "ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍", "ଆଲୋକ",
            # Bengali
            "স্ট্রিট লাইট", "আলো", "অন্ধকার",
            # Telugu / Tamil
            "వీధి దీపం", "தெரு விளக்கு"
        ],
        "Drainage": [
            "drain", "drainage", "sewage", "gutter", "overflow", "choked", "clogged",
            "manhole", "open drain", "flooding", "waterlogging", "rainwater",
            # Hindi / Marathi
            "नाली", "गटर", "सीवर", "जलभराव", "मेनहोल", "नाला",
            # Odia
            "ଡ୍ରେନେଜ୍", "ନାଳ",
            # Bengali
            "ড্রেনেজ", "নর্দমা", "ম্যানহোল",
            # Telugu / Tamil
            "కాలువ", "வடிகால்"
        ],
        "Health": [
            "health", "mosquito", "dengue", "malaria", "epidemic", "hospital", "clinic",
            "stagnant water", "hygiene", "sanitation", "infection", "hazard",
            # Hindi / Marathi
            "स्वास्थ्य", "मच्छर", "डेंगू", "मलेरिया", "अस्पताल", "बीमारी",
            # Odia
            "ସ୍ୱାସ୍ଥ୍ୟ", "ମଶା",
            # Bengali
            "স্বাস্থ্য", "মশা",
            # Telugu / Tamil
            "ఆరోగ్యం", "சுகாதாரம்"
        ]
    }

    # Department Mapping
    DEPARTMENT_MAPPING = {
        "Road & Infrastructure": "Road & Infrastructure Division",
        "Water Supply": "Public Water Works & Supply Division",
        "Waste Management": "Solid Waste & Sanitation Department",
        "Street Lighting": "Electrical & Lighting Department",
        "Drainage": "Sewerage & Drainage Division",
        "Health": "Public Health & Vector Control Dept",
        "Other": "General Municipal Services"
    }

    # High Hazard / Urgency Trigger Keywords
    CRITICAL_TRIGGERS = [
        "danger", "dangerous", "emergency", "accident", "child", "school", "hospital",
        "open manhole", "live wire", "fire", "flooding", "severe", "collapse", "burst pipe",
        "खतरा", "दुर्घटना", "आपातकाल", "खोला मैनहोल", "বিপদ", "ప్రమాదం"
    ]

    HIGH_TRIGGERS = [
        "huge", "massive", "blocked", "overflowing", "injury", "broken", "major", "urgently",
        "कई दिन", "बड़ा गड्ढा", "अत्यधिक", "ବଡ଼ ଗାତ"
    ]

    @classmethod
    def _gemini_classify(cls, text: str, user_category: Optional[str] = None, language: str = "en") -> Optional[Dict[str, Any]]:
        """
        Uses Google Gemini API for semantic multilingual classification,
        hazard assessment, and municipal routing.
        """
        if not settings.GEMINI_API_KEY:
            return None

        prompt = f"""
You are the AI Civic Intelligence and Grievance Triage Engine for JanSetu, a municipal governance platform in India.
Analyze the following citizen grievance complaint (which may be written in English, Hindi, Bengali, Odia, Marathi, Tamil, Telugu, Kannada, Gujarati, Malayalam, Punjabi, or Hinglish):

Complaint Text: \"\"\"{text}\"\"\"
User Selected Category (if any): \"{user_category or 'None'}\"

Your task:
1. Identify the most accurate Category strictly from: ["Road & Infrastructure", "Water Supply", "Waste Management", "Street Lighting", "Drainage", "Health", "Other"]
2. Identify the Suggested Municipal Department from: ["Road & Infrastructure Division", "Public Water Works & Supply Division", "Solid Waste & Sanitation Department", "Electrical & Lighting Department", "Sewerage & Drainage Division", "Public Health & Vector Control Dept", "General Municipal Services"]
3. Assess Priority strictly from: ["Critical", "High", "Medium", "Low"]
4. Assess Severity strictly from: ["High", "Medium", "Low"]
5. Provide Confidence Score (float between 0.0 and 1.0)
6. Write a 1-sentence concise Executive Summary for the responding municipal officer.
7. Extract up to 4 key entities / location / issue keywords.
8. Explain the urgency reason in 1 brief phrase.
9. Suggest estimated SLA resolution hours (integer: e.g. 12 for Critical, 24 for High, 48 for Medium, 72 for Low).

Respond strictly in valid raw JSON with no markdown backticks, matching this exact structure:
{{
  "category": "Road & Infrastructure",
  "suggested_department": "Road & Infrastructure Division",
  "priority": "Critical",
  "severity": "High",
  "confidence": 0.95,
  "summary": "...",
  "key_entities": ["pothole", "Unit 4 Market"],
  "urgency_reason": "Severe road accident risk during monsoon",
  "estimated_sla_hours": 24
}}
"""
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{settings.GEMINI_MODEL}:generateContent?key={settings.GEMINI_API_KEY}"
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{
                "parts": [{"text": prompt}]
            }],
            "generationConfig": {
                "temperature": 0.2,
                "maxOutputTokens": 500
            }
        }

        try:
            with httpx.Client(timeout=6.0) as client:
                response = client.post(url, json=payload, headers=headers)
                if response.status_code == 200:
                    data = response.json()
                    content = data["candidates"][0]["content"]["parts"][0]["text"]
                    cleaned_json = content.strip()
                    if cleaned_json.startswith("```json"):
                        cleaned_json = cleaned_json[7:]
                    if cleaned_json.startswith("```"):
                        cleaned_json = cleaned_json[3:]
                    if cleaned_json.endswith("```"):
                        cleaned_json = cleaned_json[:-3]
                    parsed = json.loads(cleaned_json.strip())
                    if "category" in parsed and "suggested_department" in parsed:
                        parsed["ai_engine"] = f"Google Gemini LLM ({settings.GEMINI_MODEL})"
                        return parsed
                else:
                    logger.warning(f"Gemini API returned status {response.status_code}: {response.text}")
        except Exception as e:
            logger.warning(f"Gemini LLM triage failed or timed out, falling back to local NLP engine: {e}")

        return None

    @classmethod
    def _rule_based_classify(cls, text: str, user_category: str = None) -> Dict[str, Any]:
        """
        Local multilingual NLP keyword and intent classifier.
        """
        if not text or not text.strip():
            return {
                "category": user_category or "Other",
                "suggested_department": cls.DEPARTMENT_MAPPING.get(user_category, "General Municipal Services"),
                "priority": "Medium",
                "severity": "Medium",
                "confidence": 0.5,
                "summary": "General civic grievance awaiting detailed description.",
                "key_entities": [],
                "urgency_reason": None,
                "estimated_sla_hours": 48,
                "ai_engine": "JanSetu Multilingual NLP Engine"
            }

        cleaned_text = text.lower()
        
        # Calculate category scores
        category_scores: Dict[str, int] = {}
        for category, keywords in cls.CATEGORY_KEYWORDS.items():
            score = 0
            for kw in keywords:
                if kw in cleaned_text:
                    score += 2 if len(kw) > 3 else 1
            category_scores[category] = score

        # Determine best match
        best_category = max(category_scores, key=category_scores.get)
        max_score = category_scores[best_category]

        # If user explicitly chose a valid category and our text score is low or matches
        if user_category and user_category in cls.DEPARTMENT_MAPPING:
            if max_score == 0:
                best_category = user_category
                confidence = 0.70
            elif category_scores.get(user_category, 0) >= max_score - 1:
                best_category = user_category
                confidence = 0.88
            else:
                confidence = min(0.95, 0.65 + (max_score * 0.08))
        else:
            if max_score == 0:
                best_category = "Other"
                confidence = 0.55
            else:
                confidence = min(0.96, 0.60 + (max_score * 0.10))

        suggested_dept = cls.DEPARTMENT_MAPPING.get(best_category, "General Municipal Services")

        # Determine Severity & Urgency
        is_critical = any(trigger in cleaned_text for trigger in cls.CRITICAL_TRIGGERS)
        is_high = any(trigger in cleaned_text for trigger in cls.HIGH_TRIGGERS)

        if is_critical:
            priority = "Critical"
            severity = "High"
            urgency_reason = "Safety hazard or high-risk emergency terms detected in complaint."
            sla_hours = 12
        elif is_high or best_category in ["Drainage", "Water Supply"]:
            priority = "High"
            severity = "High" if is_high else "Medium"
            urgency_reason = "High disruption potential or critical utility issue."
            sla_hours = 24
        else:
            priority = "Medium"
            severity = "Medium"
            urgency_reason = "Standard priority civic grievance."
            sla_hours = 48

        # Extract potential key entities
        entities = []
        words = re.findall(r'\b[A-Za-z0-9\u0900-\u0DFF]{4,}\b', text)
        for w in words[:4]:
            if w.lower() not in ["there", "where", "which", "please", "issue", "problem", "this", "that"]:
                entities.append(w)

        summary = f"Identified as {best_category} issue. Recommended routing to {suggested_dept} with {priority} priority."

        return {
            "category": best_category,
            "suggested_department": suggested_dept,
            "priority": priority,
            "severity": severity,
            "confidence": round(confidence, 2),
            "summary": summary,
            "key_entities": list(set(entities)),
            "urgency_reason": urgency_reason,
            "estimated_sla_hours": sla_hours,
            "ai_engine": "JanSetu Multilingual NLP Engine"
        }

    @classmethod
    def classify_grievance(cls, text: str, user_category: str = None, language: str = "en") -> Dict[str, Any]:
        """
        Main entrypoint: analyzes text to return predicted category, suggested department, 
        priority/severity, confidence score, and triage summary using Gemini LLM if configured, 
        or local rule-based NLP fallback.
        """
        if settings.GEMINI_API_KEY and text and len(text.strip()) > 5:
            gemini_result = cls._gemini_classify(text, user_category, language)
            if gemini_result:
                return gemini_result

        return cls._rule_based_classify(text, user_category)
