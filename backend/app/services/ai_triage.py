import re
from typing import Dict, Any, List, Tuple


class AITriageService:
    """
    AI-powered civic grievance triage engine.
    Performs multilingual NLP keyword analysis, intent extraction, 
    department routing, and severity scoring.
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
            "వీధి దీపం", "తెரு விளக்கு"
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
        "खतरा", "दुर्घटना", "आपातकाल", "খোলা ম্যানহোল", "বিপদ", "ప్రమాదం"
    ]

    HIGH_TRIGGERS = [
        "huge", "massive", "blocked", "overflowing", "injury", "broken", "major", "urgently",
        "कई दिन", "बड़ा गड्ढा", "अत्यधिक", "ବଡ଼ ଗାତ"
    ]

    @classmethod
    def classify_grievance(cls, text: str, user_category: str = None) -> Dict[str, Any]:
        """
        Analyze text to return predicted category, suggested department, 
        priority/severity, confidence score, and triage summary.
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
                "urgency_reason": None
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
        elif is_high or best_category in ["Drainage", "Water Supply"]:
            priority = "High"
            severity = "High" if is_high else "Medium"
            urgency_reason = "High disruption potential or critical utility issue."
        else:
            priority = "Medium"
            severity = "Medium"
            urgency_reason = "Standard priority civic grievance."

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
            "urgency_reason": urgency_reason
        }
