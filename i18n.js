/**
 * JanSetu Unified Multilingual Internationalization (i18n) Engine
 * Seamless regional language switching for Citizen and Officer Dashboards
 * Languages supported: EN, HI, OR, BN, GU, TA, TE, MR, KN
 */

(function() {
    const I18N_DICTIONARIES = {
        "en": {
            // General & Header
            "portal_citizen": "CITIZEN PORTAL",
            "portal_officer": "OFFICER MUNICIPAL PORTAL",
            "good_morning": "Good morning",
            "good_afternoon": "Good afternoon",
            "good_evening": "Good evening",
            "system_operational": "System Operational",
            "search_placeholder": "Search grievance ID, landmark...",
            "search_officer_placeholder": "Search grievance ID, location, contractor...",
            
            // Sidebar Navigation
            "nav_overview": "Overview",
            "nav_report_issue": "Report Issue",
            "nav_my_reports": "My Reports",
            "nav_civic_map": "Civic Map",
            "nav_participatory_budget": "Participatory Budget",
            "nav_community_impact": "Community Impact",
            "nav_assignments": "Assignments",
            "nav_evidence_review": "Evidence Review",
            "nav_analytics": "Analytics",
            "nav_notifications": "Notifications",
            "nav_my_profile": "My Profile",
            "nav_settings": "Settings",
            "nav_logout": "Logout",
            "nav_need_help": "Need help?",
            "nav_contact_support": "Contact ward support team",
            "nav_section_community": "COMMUNITY",
            "nav_section_account": "ACCOUNT",
            "nav_section_management": "MANAGEMENT",
            "nav_section_system": "SYSTEM",

            // Welcome Row
            "welcome_citizen_sub": "Here's what's happening with your community and ward.",
            "welcome_officer_sub": "Live grievance triage, contractor dispatch & statutory SLA monitoring.",
            "btn_report_issue": "＋ Report an Issue",
            "btn_export_report": "📥 Export Ward Report",
            "official_bulletin_tag": "Official Ward Bulletin",
            "btn_daily_briefing": "🔊 Daily Civic Briefing",
            "btn_read_notice": "📢 Read Notice",
            "btn_stop_audio": "⏹ Stop",
            "karma_rank_level3": "Rank: Ward Guardian (Level 3)",
            "karma_xp_needed": "160 XP to Level 4 • Municipal Vanguard",

            // Stat Cards
            "stat_reports_submitted": "Reports Submitted",
            "stat_reports_submitted_sub": "Lifetime registered issues",
            "stat_in_progress": "In Progress",
            "stat_in_progress_sub": "Active contractor resolution",
            "stat_issues_resolved": "Issues Resolved",
            "stat_issues_resolved_sub": "Verified fixed in Ward 12",
            "stat_community_impact": "Community Impact",
            "stat_community_impact_sub": "365 Neighbors Benefited",
            
            // Officer Stat Cards
            "stat_total_active": "Total Active Grievances",
            "stat_total_active_sub": "Across Ward 12 Municipal Grid",
            "stat_assigned_contractor": "Assigned to Contractor",
            "stat_assigned_contractor_sub": "Apex Civic Infra in field",
            "stat_sla_compliance": "Statutory SLA Compliance",
            "stat_sla_compliance_sub": "ORTPS 24-hr guarantee rate",
            "stat_critical_attention": "Critical Attention Required",
            "stat_critical_attention_sub": "Severe hazards & pipe bursts",

            // Filters & Recent Reports
            "filter_all": "All",
            "filter_in_progress": "⏳ In Progress",
            "filter_resolved": "✅ Resolved",
            "filter_critical": "🔥 Critical SLA",
            "card_recent_reports": "Recent Reports",
            "card_recent_reports_sub": "Track your latest civic issues",
            "btn_view_all": "View all →",
            "card_quick_actions": "Quick Actions",
            "quick_report_issue": "Report an issue",
            "quick_report_issue_sub": "Submit a new grievance",
            "quick_explore_map": "Explore civic map",
            "quick_explore_map_sub": "See issues near you",
            "quick_vote_projects": "Vote on projects",
            "quick_vote_projects_sub": "Participate in your ward",
            "quick_ask_ai": "Ask JanSetu AI Assistant",
            "quick_ask_ai_sub": "24/7 Voice & Grievance AI Help",
            "leaderboard_title": "Ward 12 Leaderboard",
            "leaderboard_tag": "Top Guardians",
            "you_tag": "(You)",

            // Participatory Budgeting
            "budget_title": "Ward 12 Participatory Budgeting",
            "budget_subtitle": "Vote on community development projects funded by municipal council.",
            "btn_cast_vote": "🗳️ Cast Citizen Vote",
            "btn_voted_success": "✓ Vote Cast Successfully",

            // Categories & Statuses
            "cat_roads": "Roads & Infrastructure",
            "cat_lighting": "Street Lighting",
            "cat_waste": "Waste Management",
            "cat_water": "Water Supply",
            "cat_drainage": "Drainage & Sewerage",
            "status_pending": "Pending",
            "status_in_progress": "In Progress",
            "status_resolved": "Resolved",
            "status_critical": "Critical"
        },
        "or": {
            // General & Header
            "portal_citizen": "ନାଗରିକ ପୋର୍ଟାଲ୍",
            "portal_officer": "ପୌର ପ୍ରଶାସନିକ ପୋର୍ଟାଲ୍",
            "good_morning": "ଶୁଭ ସକାଳ",
            "good_afternoon": "ଶୁଭ ଅପରାହ୍ନ",
            "good_evening": "ଶୁଭ ସନ୍ଧ୍ୟା",
            "system_operational": "ସିଷ୍ଟମ୍ ସକ୍ରିୟ ଅଛି",
            "search_placeholder": "ଅଭିଯୋଗ ନମ୍ବର, ସ୍ଥାନ ଖୋଜନ୍ତୁ...",
            "search_officer_placeholder": "ଅଭିଯୋଗ ଆଇଡି, ୱାର୍ଡ଼, ଠିକାଦାର ଖୋଜନ୍ତୁ...",
            
            // Sidebar Navigation
            "nav_overview": "ସମୀକ୍ଷା (ଡ୍ୟାସବୋର୍ଡ଼)",
            "nav_report_issue": "ଅଭିଯୋଗ ଦାଖଲ",
            "nav_my_reports": "ମୋର ଅଭିଯୋଗ",
            "nav_civic_map": "ପୌର ମ୍ୟାପ୍",
            "nav_participatory_budget": "ନାଗରିକ ବଜେଟ୍ ଭୋଟ୍",
            "nav_community_impact": "ସାମୂହିକ ପ୍ରଭାବ",
            "nav_assignments": "ଦାୟିତ୍ୱ ବଣ୍ଟନ",
            "nav_evidence_review": "ଫଟୋ ପ୍ରମାଣ ଯାଞ୍ଚ",
            "nav_analytics": "ପରିସଂଖ୍ୟାନ ଓ ତଥ୍ୟ",
            "nav_notifications": "ସୂଚନା ଓ ବିଜ୍ଞପ୍ତି",
            "nav_my_profile": "ମୋର ପ୍ରୋଫାଇଲ୍",
            "nav_settings": "ସେଟିଂସ୍",
            "nav_logout": "ଲଗ୍ ଆଉଟ୍",
            "nav_need_help": "ସାହାଯ୍ୟ ଦରକାର କି?",
            "nav_contact_support": "ୱାର୍ଡ଼ ହେଲ୍ପଲାଇନ୍ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ",
            "nav_section_community": "ସମୁଦାୟ",
            "nav_section_account": "ଖାତା",
            "nav_section_management": "ପରିଚାଳନା",
            "nav_section_system": "ସିଷ୍ଟମ୍",

            // Welcome Row
            "welcome_citizen_sub": "ଏଠାରେ ଆପଣଙ୍କ ପୌରାଞ୍ଚଳ ଓ ୱାର୍ଡ଼ର ସଦ୍ୟତମ ତଥ୍ୟ ଦେଖନ୍ତୁ।",
            "welcome_officer_sub": "ଅଭିଯୋଗ ସମାଧାନ, ଠିକାଦାର ନିଯୁକ୍ତି ଓ ସରକାରୀ ସମୟସୀମା ତଦାରଖ।",
            "btn_report_issue": "＋ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ",
            "btn_export_report": "📥 ୱାର୍ଡ଼ ରିପୋର୍ଟ ଡାଉନଲୋଡ୍",
            "official_bulletin_tag": "ସରକାରୀ ୱାର୍ଡ଼ ବିଜ୍ଞପ୍ତି",
            "btn_daily_briefing": "🔊 ଦୈନିକ ପୌର ବାର୍ତ୍ତା ଶୁଣନ୍ତୁ",
            "btn_read_notice": "📢 ନୋଟିସ୍ ଶୁଣନ୍ତୁ",
            "btn_stop_audio": "⏹ ବନ୍ଦ କରନ୍ତୁ",
            "karma_rank_level3": "ପଦବୀ: ୱାର୍ଡ଼ ଗାର୍ଡିଆନ୍ (ଲେଭଲ ୩)",
            "karma_xp_needed": "ଲେଭଲ ୪ ପାଇଁ ୧୬୦ ଏକ୍ସପି ଆବଶ୍ୟକ",

            // Stat Cards
            "stat_reports_submitted": "ଦାଖଲ ଅଭିଯୋଗ",
            "stat_reports_submitted_sub": "ମୋଟ ପଞ୍ଜୀକୃତ ଅଭିଯୋଗ",
            "stat_in_progress": "କାର୍ଯ୍ୟ ଚାଲୁଅଛି",
            "stat_in_progress_sub": "ଠିକାଦାର ଦ୍ୱାରା ମରାମତି ଚାଲିଛି",
            "stat_issues_resolved": "ସମାଧାନ ହୋଇଛି",
            "stat_issues_resolved_sub": "ୱାର୍ଡ଼ ୧୨ ରେ ସମ୍ପୂର୍ଣ୍ଣ ସମାଧାନ",
            "stat_community_impact": "ସାମୂହିକ ଲାଭ",
            "stat_community_impact_sub": "୩୬୫ ଜଣ ପଡ଼ୋଶୀ ଉପକୃତ",

            // Officer Stat Cards
            "stat_total_active": "ମୋଟ ସକ୍ରିୟ ଅଭିଯୋଗ",
            "stat_total_active_sub": "ୱାର୍ଡ଼ ୧୨ ପୌର କ୍ଷେତ୍ର ମଧ୍ୟରେ",
            "stat_assigned_contractor": "ଠିକାଦାରଙ୍କୁ ଦିଆଯାଇଛି",
            "stat_assigned_contractor_sub": "କ୍ଷେତ୍ରରେ କାର୍ଯ୍ୟରତ",
            "stat_sla_compliance": "ସରକାରୀ ସମୟସୀମା ପାଳନ",
            "stat_sla_compliance_sub": "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ସମାଧାନ ହାର",
            "stat_critical_attention": "ଜରୁରୀ ସମସ୍ୟା",
            "stat_critical_attention_sub": "ତୁରନ୍ତ ଧ୍ୟାନ ଆବଶ୍ୟକ",

            // Filters & Recent Reports
            "filter_all": "ସମସ୍ତ (୦୮)",
            "filter_in_progress": "⏳ କାର୍ଯ୍ୟ ଚାଲୁଅଛି (୦୩)",
            "filter_resolved": "✅ ସମାଧାନ ହୋଇଛି (୦୪)",
            "filter_critical": "🔥 ଜରୁରୀ ବିପଦ",
            "card_recent_reports": "ସାମ୍ପ୍ରତିକ ଅଭିଯୋଗ",
            "card_recent_reports_sub": "ଆପଣଙ୍କ ଅଭିଯୋଗର ସ୍ଥିତି ଯାଞ୍ଚ କରନ୍ତୁ",
            "btn_view_all": "ସବୁ ଦେଖନ୍ତୁ →",
            "card_quick_actions": "ତୁରନ୍ତ କାର୍ଯ୍ୟାନୁଷ୍ଠାନ",
            "quick_report_issue": "ଅଭିଯୋଗ କରନ୍ତୁ",
            "quick_report_issue_sub": "ନୂତନ ସମସ୍ୟା ପଞ୍ଜୀକରଣ କରନ୍ତୁ",
            "quick_explore_map": "ପୌର ମ୍ୟାପ୍ ଦେଖନ୍ତୁ",
            "quick_explore_map_sub": "ଆପଣଙ୍କ ଆଖପାଖ ସମସ୍ୟା",
            "quick_vote_projects": "ବଜେଟ୍ ପ୍ରକଳ୍ପରେ ଭୋଟ୍",
            "quick_vote_projects_sub": "ୱାର୍ଡ଼ ଉନ୍ନୟନରେ ଭାଗ ନିଅନ୍ତୁ",
            "quick_ask_ai": "ଜନସେତୁ ଏଆଇ ସହାୟକ",
            "quick_ask_ai_sub": "୨୪/୭ ଭଏସ୍ ଓ ଅଭିଯୋଗ ସହାୟତା",
            "leaderboard_title": "ୱାର୍ଡ଼ ୧୨ ଲିଡରବୋର୍ଡ଼",
            "leaderboard_tag": "ଶ୍ରେଷ୍ଠ ନାଗରିକ",
            "you_tag": "(ଆପଣ)",

            // Participatory Budgeting
            "budget_title": "ୱାର୍ଡ଼ ୧୨ ନାଗରିକ ବଜେଟ୍ ଭୋଟିଂ",
            "budget_subtitle": "ପୌର ପାଣ୍ଠି ଦ୍ୱାରା ହେବାକୁ ଥିବା ଉନ୍ନୟନ ପ୍ରକଳ୍ପରେ ଆପଣଙ୍କ ଭୋଟ୍ ଦିଅନ୍ତୁ।",
            "btn_cast_vote": "🗳️ ନାଗରିକ ଭୋଟ୍ ଦିଅନ୍ତୁ",
            "btn_voted_success": "✓ ସଫଳତାର ସହ ଭୋଟ୍ ଦିଆଗଲା",

            // Categories & Statuses
            "cat_roads": "ରାସ୍ତା ଓ ଭିତ୍ତିଭୂମି",
            "cat_lighting": "ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍ ଆଲୋକୀକରଣ",
            "cat_waste": "ବର୍ଜ୍ୟବସ୍ତୁ ଓ ସଫେଇ",
            "cat_water": "ଜଳ ଯୋଗାଣ",
            "cat_drainage": "ଡ୍ରେନେଜ୍ ଓ ନାଳ ସଫେଇ",
            "status_pending": "ବିଚାରାଧୀନ",
            "status_in_progress": "କାର୍ଯ୍ୟ ଚାଲୁଅଛି",
            "status_resolved": "ସମାଧାନ ହୋଇଛି",
            "status_critical": "ଜରୁରୀ"
        },
        "hi": {
            // General & Header
            "portal_citizen": "नागरिक पोर्टल",
            "portal_officer": "नगर निगम प्रशासनिक पोर्टल",
            "good_morning": "शुभ प्रभात",
            "good_afternoon": "शुभ दोपहर",
            "good_evening": "शुभ संध्या",
            "system_operational": "सिस्टम पूरी तरह सक्रिय है",
            "search_placeholder": "शिकायत संख्या, स्थान खोजें...",
            "search_officer_placeholder": "शिकायत आईडी, वार्ड, ठेकेदार खोजें...",
            
            // Sidebar Navigation
            "nav_overview": "डैशबोर्ड अवलोकन",
            "nav_report_issue": "शिकायत दर्ज करें",
            "nav_my_reports": "मेरी शिकायतें",
            "nav_civic_map": "नागरिक मानचित्र",
            "nav_participatory_budget": "नागरिक बजट मतदान",
            "nav_community_impact": "सामुदायिक प्रभाव",
            "nav_assignments": "कार्य आवंटन",
            "nav_evidence_review": "साक्ष्य सत्यापन",
            "nav_analytics": "विश्लेषण व रिपोर्ट",
            "nav_notifications": "सूचनाएं व अलर्ट",
            "nav_my_profile": "मेरी प्रोफ़ाइल",
            "nav_settings": "सेटिंग्स",
            "nav_logout": "लॉग आउट",
            "nav_need_help": "सहायता चाहिए?",
            "nav_contact_support": "वार्ड सहायता टीम से संपर्क करें",
            "nav_section_community": "समुदाय",
            "nav_section_account": "खाता",
            "nav_section_management": "प्रबंधन",
            "nav_section_system": "सिस्टम",

            // Welcome Row
            "welcome_citizen_sub": "यहाँ आपके क्षेत्र और वार्ड से जुड़ी ताज़ा जानकारी है।",
            "welcome_officer_sub": "शिकायत निवारण, ठेकेदार कार्य आवंटन व 24-घंटे समयसीमा निगरानी।",
            "btn_report_issue": "＋ शिकायत दर्ज करें",
            "btn_export_report": "📥 वार्ड रिपोर्ट डाउनलोड करें",
            "official_bulletin_tag": "आधिकारिक वार्ड बुलेटिन",
            "btn_daily_briefing": "🔊 दैनिक नागरिक ब्रीफिंग",
            "btn_read_notice": "📢 नोटिस सुनें",
            "btn_stop_audio": "⏹ रोकें",
            "karma_rank_level3": "पद: वार्ड संरक्षक (लेवल 3)",
            "karma_xp_needed": "लेवल 4 के लिए 160 XP शेष",

            // Stat Cards
            "stat_reports_submitted": "कुल दर्ज शिकायतें",
            "stat_reports_submitted_sub": "अब तक दर्ज कुल मामले",
            "stat_in_progress": "प्रगति पर",
            "stat_in_progress_sub": "ठेकेदार द्वारा मरम्मत जारी",
            "stat_issues_resolved": "समाधान पूर्ण",
            "stat_issues_resolved_sub": "वार्ड 12 में सत्यापित समाधान",
            "stat_community_impact": "सामुदायिक प्रभाव",
            "stat_community_impact_sub": "365 नागरिक लाभान्वित",

            // Officer Stat Cards
            "stat_total_active": "कुल सक्रिय शिकायतें",
            "stat_total_active_sub": "वार्ड 12 नगर निगम क्षेत्र",
            "stat_assigned_contractor": "ठेकेदार को आवंटित",
            "stat_assigned_contractor_sub": "कार्यस्थल पर मरम्मत जारी",
            "stat_sla_compliance": "समयसीमा अनुपालन दर",
            "stat_sla_compliance_sub": "24 घंटे में गारंटीकृत समाधान",
            "stat_critical_attention": "अति आवश्यक समस्याएं",
            "stat_critical_attention_sub": "तत्काल कार्रवाई आवश्यक",

            // Filters & Recent Reports
            "filter_all": "सभी (08)",
            "filter_in_progress": "⏳ प्रगति पर (03)",
            "filter_resolved": "✅ समाधान पूर्ण (04)",
            "filter_critical": "🔥 अति आवश्यक",
            "card_recent_reports": "हालिया शिकायतें",
            "card_recent_reports_sub": "अपनी शिकायतों की स्थिति ट्रैक करें",
            "btn_view_all": "सभी देखें →",
            "card_quick_actions": "त्वरित कार्य",
            "quick_report_issue": "समस्या दर्ज करें",
            "quick_report_issue_sub": "नई शिकायत दर्ज करें",
            "quick_explore_map": "मानचित्र पर देखें",
            "quick_explore_map_sub": "आस-पास की समस्याएं",
            "quick_vote_projects": "परियोजनाओं पर वोट करें",
            "quick_vote_projects_sub": "वार्ड विकास में भाग लें",
            "quick_ask_ai": "जनसेतु एआई सहायक",
            "quick_ask_ai_sub": "24/7 वॉयस व शिकायत सहायता",
            "leaderboard_title": "वार्ड 12 लीडरबोर्ड",
            "leaderboard_tag": "शीर्ष नागरिक",
            "you_tag": "(आप)",

            // Participatory Budgeting
            "budget_title": "वार्ड 12 नागरिक बजट वोटिंग",
            "budget_subtitle": "नगर निगम द्वारा वित्तपोषित विकास परियोजनाओं पर अपना वोट दें।",
            "btn_cast_vote": "🗳️ नागरिक वोट दें",
            "btn_voted_success": "✓ वोट सफलतापूर्वक दर्ज हुआ",

            // Categories & Statuses
            "cat_roads": "सड़क व आधारभूत संरचना",
            "cat_lighting": "स्ट्रीट लाइट व्यवस्था",
            "cat_waste": "कचरा प्रबंधन व स्वच्छता",
            "cat_water": "पेयजल आपूर्ति",
            "cat_drainage": "जल निकासी व नाली सफाई",
            "status_pending": "लंबित",
            "status_in_progress": "प्रगति पर",
            "status_resolved": "समाधान पूर्ण",
            "status_critical": "गंभीर"
        },
        "bn": {
            "portal_citizen": "নাগরিক পোর্টাল",
            "portal_officer": "পৌর প্রশাসনিক পোর্টাল",
            "good_morning": "সুপ্রভাত",
            "good_afternoon": "শুভ দুপুর",
            "good_evening": "শুভ সন্ধ্যা",
            "system_operational": "সিস্টেম সক্রিয় আছে",
            "search_placeholder": "অভিযোগ নম্বর, স্থান খুঁজুন...",
            "search_officer_placeholder": "অভিযোগ আইডি, এলাকা খুঁজুন...",
            "nav_overview": "ড্যাশবোর্ড",
            "nav_report_issue": "অভিযোগ জানান",
            "nav_my_reports": "আমার অভিযোগ",
            "nav_civic_map": "পৌর ম্যাপ",
            "nav_participatory_budget": "নাগরিক বাজেট ভোট",
            "nav_community_impact": "সামাজিক প্রভাব",
            "nav_assignments": "দায়িত্ব বণ্টন",
            "nav_evidence_review": "প্রমাণ যাচাই",
            "nav_analytics": "পরিসংখ্যান",
            "nav_notifications": "বিজ্ঞপ্তি",
            "nav_my_profile": "আমার প্রোফাইল",
            "nav_settings": "সেটিংস",
            "nav_logout": "লগআউট",
            "welcome_citizen_sub": "আপনার এলাকার সর্বশেষ তথ্য ও পরিষেবা আপডেট।",
            "btn_report_issue": "＋ অভিযোগ জানান",
            "official_bulletin_tag": "অফিসিয়াল পৌর বুলেটিন",
            "btn_daily_briefing": "🔊 দৈনিক নাগরিক ব্রিফিং",
            "btn_read_notice": "📢 নোটিশ শুনুন",
            "btn_stop_audio": "⏹ থামুন",
            "stat_reports_submitted": "মোট অভিযোগ",
            "stat_in_progress": "কাজ চলছে",
            "stat_issues_resolved": "সমাধান সম্পন্ন",
            "stat_community_impact": "নাগরিক প্রভাব",
            "filter_all": "সকল (০৮)",
            "filter_in_progress": "⏳ কাজ চলছে (০৩)",
            "filter_resolved": "✅ সমাধান সম্পন্ন (০৪)",
            "filter_critical": "🔥 জরুরি",
            "card_recent_reports": "সাম্প্রতিক অভিযোগ",
            "card_recent_reports_sub": "আপনার অভিযোগের বর্তমান অবস্থা দেখুন",
            "btn_view_all": "সব দেখুন →",
            "card_quick_actions": "দ্রুত সেবা",
            "quick_report_issue": "অভিযোগ জানান",
            "quick_explore_map": "ম্যাপ দেখুন",
            "quick_vote_projects": "প্রকল্পে ভোট দিন",
            "quick_ask_ai": "জনসেতু এআই সহকারী",
            "leaderboard_title": "ওয়ার্ড ১২ লিডারবোর্ড",
            "btn_cast_vote": "🗳️ নাগরিক ভোট দিন",
            "btn_voted_success": "✓ ভোট সফল হয়েছে",
            "cat_roads": "রাস্তা ও পরিকাঠামো",
            "cat_lighting": "পথবাতি ব্যবস্থা",
            "cat_waste": "বর্জ্য ব্যবস্থাপনা",
            "cat_water": "জল সরবরাহ",
            "cat_drainage": "নিকাশী ব্যবস্থা",
            "status_pending": "অপেক্ষারত",
            "status_in_progress": "কাজ চলছে",
            "status_resolved": "সমাধান সম্পন্ন",
            "status_critical": "জরুরি"
        },
        "gu": {
            "portal_citizen": "નાગરિક પોર્ટલ",
            "portal_officer": "નગરપાલિકા પોર્ટલ",
            "good_morning": "શુભ સવાર",
            "good_afternoon": "શુભ બપોર",
            "good_evening": "શુભ સાંજ",
            "system_operational": "સિસ્ટમ સક્રિય છે",
            "search_placeholder": "ફરિયાદ નંબર, વિસ્તાર શોધો...",
            "search_officer_placeholder": "ફરિયાદ આઈડી, વોર્ડ શોધો...",
            "nav_overview": "ડેશબોર્ડ",
            "nav_report_issue": "સમસ્યા નોંધાવો",
            "nav_my_reports": "મારી ફરિયાદો",
            "nav_civic_map": "નગર નકશો",
            "nav_participatory_budget": "નાગરિક બજેટ મતદાન",
            "nav_community_impact": "સમુદાય પ્રભાવ",
            "nav_assignments": "કામગીરી સોંપણી",
            "nav_evidence_review": "પુરાવા ચકાસણી",
            "nav_analytics": "વિશ્લેષણ",
            "nav_notifications": "સૂચનાઓ",
            "nav_my_profile": "મારી પ્રોફાઇલ",
            "nav_settings": "સેટિંગ્સ",
            "nav_logout": "લૉગ આઉટ",
            "welcome_citizen_sub": "તમારા વિસ્તાર અને વોર્ડની તાજી વિગતો અહીં જુઓ.",
            "btn_report_issue": "＋ સમસ્યા નોંધાવો",
            "official_bulletin_tag": "સત્તાવાર વોર્ડ બુલેટિન",
            "btn_daily_briefing": "🔊 દૈનિક નાગરિક બ્રીફિંગ",
            "btn_read_notice": "📢 નોટિસ સાંભળો",
            "btn_stop_audio": "⏹ બંધ કરો",
            "stat_reports_submitted": "કુલ ફરિયાદો",
            "stat_in_progress": "કામ ચાલુ છે",
            "stat_issues_resolved": "નિરાકરણ થયેલ",
            "stat_community_impact": "સમુદાય પ્રભાવ",
            "filter_all": "બધા (૦૮)",
            "filter_in_progress": "⏳ કામ ચાલુ છે (૦૩)",
            "filter_resolved": "✅ નિરાકરણ થયેલ (૦૪)",
            "filter_critical": "🔥 તાત્કાલિક",
            "card_recent_reports": "તાજેતરની ફરિયાદો",
            "card_recent_reports_sub": "તમારી ફરિયાદોની સ્થિતિ તપાસો",
            "btn_view_all": "બધા જુઓ →",
            "card_quick_actions": "ઝડપી ક્રિયાઓ",
            "quick_report_issue": "સમસ્યા નોંધાવો",
            "quick_explore_map": "નકશો જુઓ",
            "quick_vote_projects": "પ્રોજેક્ટ પર વોટ આપો",
            "quick_ask_ai": "જનસેતુ એઆઈ સહાયક",
            "leaderboard_title": "વોર્ડ ૧૨ લીડરબોર્ડ",
            "btn_cast_vote": "🗳️ નાગરિક મત આપો",
            "btn_voted_success": "✓ મત સફળતાપૂર્વક અપાયો",
            "cat_roads": "રસ્તા અને ઈન્ફ્રાસ્ટ્રક્ચર",
            "cat_lighting": "સ્ટ્રીટ લાઇટિંગ",
            "cat_waste": "કચરા વ્યવસ્થાપન",
            "cat_water": "પાણી પુરવઠો",
            "cat_drainage": "ગટર વ્યવસ્થા",
            "status_pending": "બાકી",
            "status_in_progress": "કામ ચાલુ છે",
            "status_resolved": "નિરાકરણ થયેલ",
            "status_critical": "તાત્કાલિક"
        },
        "ta": {
            "portal_citizen": "குடிமக்கள் போர்டல்",
            "portal_officer": "மாநகராட்சி நிர்வாக போர்டல்",
            "good_morning": "காலை வணக்கம்",
            "good_afternoon": "மதிய வணக்கம்",
            "good_evening": "மாலை வணக்கம்",
            "system_operational": "கணினி செயல்படுகிறது",
            "search_placeholder": "புகார் எண், இடம் தேடுக...",
            "nav_overview": "முகப்பு",
            "nav_report_issue": "புகார் செய்க",
            "nav_my_reports": "எனது புகார்கள்",
            "nav_civic_map": "வரைபடம்",
            "nav_participatory_budget": "பட்ஜெட் வாக்களிப்பு",
            "nav_community_impact": "மக்கள் தாக்கம்",
            "nav_assignments": "பணி ஒதுக்கீடு",
            "nav_evidence_review": "சான்று சரிபார்ப்பு",
            "nav_analytics": "பகுப்பாய்வு",
            "nav_notifications": "அறிவிப்புகள்",
            "nav_my_profile": "சுயவிவரம்",
            "nav_logout": "வெளியேறு",
            "btn_report_issue": "＋ புகார் செய்க",
            "btn_daily_briefing": "🔊 தினசரி அறிக்கை",
            "btn_read_notice": "📢 அறிவிப்பை கேட்கவும்",
            "stat_reports_submitted": "பதிவு செய்த புகார்கள்",
            "stat_in_progress": "செயலில் உள்ளது",
            "stat_issues_resolved": "தீர்க்கப்பட்டது",
            "stat_community_impact": "பொதுமக்கள் தாக்கம்",
            "filter_all": "அனைத்தும்",
            "card_recent_reports": "சமீபத்திய புகார்கள்",
            "btn_view_all": "அனைத்தையும் காண்க →",
            "btn_cast_vote": "🗳️ வாக்களிக்கவும்",
            "cat_roads": "சாலை மற்றும் உள்கட்டமைப்பு",
            "cat_lighting": "தெரு விளக்குகள்",
            "cat_waste": "குப்பை மேலாண்மை",
            "cat_water": "குடிநீர் விநியோகம்",
            "cat_drainage": "வடிகால் அமைப்பு",
            "status_pending": "நிலுவையில்",
            "status_in_progress": "செயலில் உள்ளது",
            "status_resolved": "தீர்க்கப்பட்டது"
        },
        "te": {
            "portal_citizen": "పౌర పోర్టల్",
            "portal_officer": "మున్సిపల్ అడ్మిన్ పోర్టల్",
            "good_morning": "శుభోదయం",
            "good_afternoon": "శుభ మధ్యాహ్నం",
            "good_evening": "శుభ సాయంత్రం",
            "system_operational": "సిస్టమ్ పనిచేస్తోంది",
            "search_placeholder": "ఫిర్యాదు నంబర్, ప్రాంతం వెతకండి...",
            "nav_overview": "డ్యాష్‌బోర్డ్",
            "nav_report_issue": "ఫిర్యాదు చేయండి",
            "nav_my_reports": "నా ఫిర్యాదులు",
            "nav_civic_map": "పౌర మ్యాప్",
            "nav_participatory_budget": "బడ్జెట్ ఓటింగ్",
            "nav_community_impact": "సమాజ ప్రభావం",
            "nav_assignments": "కేటాయింపులు",
            "nav_evidence_review": "సాక్ష్యాల సమీక్ష",
            "nav_analytics": "విశ్లేషణలు",
            "nav_notifications": "నోటిఫికేషన్లు",
            "nav_my_profile": "నా ప్రొఫైల్",
            "nav_logout": "లాగ్ అవుట్",
            "btn_report_issue": "＋ ఫిర్యాదు చేయండి",
            "btn_daily_briefing": "🔊 రోజువారీ సారాంశం",
            "btn_read_notice": "📢 నోటీసు వినండి",
            "stat_reports_submitted": "దాఖలు చేసిన ఫిర్యాదులు",
            "stat_in_progress": "పురోగతిలో ఉంది",
            "stat_issues_resolved": "పరిష్కరించబడింది",
            "stat_community_impact": "సమాజ ప్రభావం",
            "filter_all": "అన్నీ",
            "card_recent_reports": "ఇటీవలి నివేదికలు",
            "btn_view_all": "అన్నీ చూడండి →",
            "btn_cast_vote": "🗳️ ఓటు వేయండి",
            "cat_roads": "రోడ్లు మరియు మౌలిక సదుపాయాలు",
            "cat_lighting": "వీధి దీపాలు",
            "cat_waste": "వ్యర్థాల నిర్వహణ",
            "cat_water": "నీటి సరఫరా",
            "cat_drainage": "డ్రైనేజీ వ్యవస్థ",
            "status_pending": "పెండింగ్‌లో ఉంది",
            "status_in_progress": "పురోగతిలో ఉంది",
            "status_resolved": "పరిష్కరించబడింది"
        },
        "mr": {
            "portal_citizen": "नागरी पोर्टल",
            "portal_officer": "महानगरपालिका प्रशासन पोर्टल",
            "good_morning": "शुभ प्रभात",
            "good_afternoon": "शुभ दुपार",
            "good_evening": "शुभ संध्याकाळ",
            "system_operational": "प्रणाली कार्यरत आहे",
            "search_placeholder": "तक्रार क्रमांक, ठिकाण शोधा...",
            "nav_overview": "डॅशबोर्ड",
            "nav_report_issue": "तक्रार नोंदवा",
            "nav_my_reports": "माझ्या तक्रारी",
            "nav_civic_map": "नागरी नकाशा",
            "nav_participatory_budget": "नागरी अंदाजपत्रक मतदान",
            "nav_community_impact": "नागरी प्रभाव",
            "nav_assignments": "काम वाटप",
            "nav_evidence_review": "पुरावा तपासणी",
            "nav_analytics": "विश्लेषण",
            "nav_notifications": "सूचना",
            "nav_my_profile": "माझे प्रोफाइल",
            "nav_logout": "लॉग आउट",
            "btn_report_issue": "＋ तक्रार नोंदवा",
            "btn_daily_briefing": "🔊 दैनिक नागरी माहिती",
            "btn_read_notice": "📢 नोटीस ऐका",
            "stat_reports_submitted": "एकूण तक्रारी",
            "stat_in_progress": "काम सुरू",
            "stat_issues_resolved": "निवारण पूर्ण",
            "stat_community_impact": "नागरी प्रभाव",
            "filter_all": "सर्व",
            "card_recent_reports": "नुकत्याच दाखल तक्रारी",
            "btn_view_all": "सर्व पहा →",
            "btn_cast_vote": "🗳️ मत नोंदवा",
            "cat_roads": "रस्ते व पायाभूत सुविधा",
            "cat_lighting": "पथदिवे व्यवस्था",
            "cat_waste": "कचरा व्यवस्थापन",
            "cat_water": "पाणी पुरवठा",
            "cat_drainage": "सांडपाणी निचरा",
            "status_pending": "प्रलंबित",
            "status_in_progress": "काम सुरू",
            "status_resolved": "निवारण पूर्ण"
        },
        "kn": {
            "portal_citizen": "ಪೌರ ಪೋರ್ಟಲ್",
            "portal_officer": "ಮಹಾನಗರ ಪಾಲಿಕೆ ಆಡಳಿತ ಪೋರ್ಟಲ್",
            "good_morning": "ಶುಭೋದಯ",
            "good_afternoon": "ಶುಭ ಮಧ್ಯಾಹ್ನ",
            "good_evening": "ಶುಭ ಸಂಜೆ",
            "system_operational": "ವ್ಯವಸ್ಥೆ ಸಕ್ರಿಯವಾಗಿದೆ",
            "search_placeholder": "ದೂರು ಸಂಖ್ಯೆ, ಸ್ಥಳ ಹುಡುಕಿ...",
            "nav_overview": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "nav_report_issue": "ದೂರು ಸಲ್ಲಿಸಿ",
            "nav_my_reports": "ನನ್ನ ದೂರುಗಳು",
            "nav_civic_map": "ನಗರ ನಕ್ಷೆ",
            "nav_participatory_budget": "ಪೌರ ಬಜೆಟ್ ಮತದಾನ",
            "nav_community_impact": "ಸಮುದಾಯ ಪರಿಣಾಮ",
            "nav_assignments": "ಕೆಲಸ ಹಂಚಿಕೆ",
            "nav_evidence_review": "ಸಾಕ್ಷಿ ಪರಿಶೀಲನೆ",
            "nav_analytics": "ವಿಶ್ಲೇಷಣೆ",
            "nav_notifications": "ಸೂಚನೆಗಳು",
            "nav_my_profile": "ನನ್ನ ಪ್ರೊಫೈಲ್",
            "nav_logout": "ಲಾಗ್ ಔಟ್",
            "btn_report_issue": "＋ ದೂರು ಸಲ್ಲಿಸಿ",
            "btn_daily_briefing": "🔊 ದೈನಂದಿನ ಮಾಹಿತಿ",
            "btn_read_notice": "📢 ಪ್ರಕಟಣೆ ಆಲಿಸಿ",
            "stat_reports_submitted": "ಸಲ್ಲಿಸಿದ ದೂರುಗಳು",
            "stat_in_progress": "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
            "stat_issues_resolved": "ಪರಿಹರಿಸಲಾಗಿದೆ",
            "stat_community_impact": "ಸಮುದಾಯ ಪರಿಣಾಮ",
            "filter_all": "ಎಲ್ಲವೂ",
            "card_recent_reports": "ಇತ್ತೀಚಿನ ದೂರುಗಳು",
            "btn_view_all": "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ →",
            "btn_cast_vote": "🗳️ ಮತ ಚಲಾಯಿಸಿ",
            "cat_roads": "ರಸ್ತೆ ಮತ್ತು ಮೂಲಸೌಕರ್ಯ",
            "cat_lighting": "ಬೀದಿ ದೀಪಗಳು",
            "cat_waste": "ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ",
            "cat_water": "ನೀರು ಸರಬರಾಜು",
            "cat_drainage": "ಒಳಚರಂಡಿ ವ್ಯವಸ್ಥೆ",
            "status_pending": "ಬಾಕಿ ಇದೆ",
            "status_in_progress": "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
            "status_resolved": "ಪರಿಹರಿಸಲಾಗಿದೆ"
        }
    };

    window.JanSetuI18n = {
        dict: I18N_DICTIONARIES,
        
        get(key, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const langDict = this.dict[current] || this.dict['en'];
            return langDict[key] || this.dict['en'][key] || key;
        },

        applyLanguage(lang) {
            localStorage.setItem('jansetu_preferred_lang', lang);
            window.currentAppLanguage = lang;

            // Sync all language dropdowns on page
            const selects = document.querySelectorAll('#globalDashboardLangSelect, #globalOfficerLangSelect, #modalVoiceLangSelect, #profileInputLang, #aiChatLangSelect');
            selects.forEach(sel => {
                if (sel && sel.value !== lang) sel.value = lang;
            });

            const d = this.dict[lang] || this.dict['en'];

            // 1. Data-i18n elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (d[key]) {
                    el.textContent = d[key];
                }
            });

            // 2. Data-i18n-placeholder elements
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (d[key]) {
                    el.placeholder = d[key];
                }
            });

            // 3. Translate Global Topbar & Search
            const globalSearch = document.getElementById('globalSearch') || document.querySelector('.global-search input');
            if (globalSearch) {
                globalSearch.placeholder = d.search_placeholder || "Search grievance ID, landmark...";
            }
            const officeStatus = document.querySelector('.office-status');
            if (officeStatus) {
                officeStatus.innerHTML = `<span class="online-dot"></span> ${d.system_operational || "System Operational"}`;
            }

            // 4. Translate Welcome Greeting Header
            const welcomeH1 = document.querySelector('.welcome-row h1, .welcome-header h1');
            if (welcomeH1) {
                const nameElem = document.getElementById('welcomeName') || document.getElementById('userName');
                const userName = nameElem ? nameElem.textContent.trim() : 'Citizen';
                welcomeH1.innerHTML = `${d.good_morning || "Good morning"}, <span id="welcomeName">${userName}</span> 👋`;
            }
            const welcomeEyebrow = document.querySelector('.welcome-row .eyebrow, .welcome-header .eyebrow');
            if (welcomeEyebrow) {
                welcomeEyebrow.textContent = d.portal_citizen || "CITIZEN PORTAL";
            }
            const welcomeSub = document.querySelector('.welcome-row p, .welcome-header p');
            if (welcomeSub) {
                welcomeSub.textContent = d.welcome_citizen_sub || "Here's what's happening with your community.";
            }

            // 5. Translate Bulletin & Notice Buttons
            const briefingBtn = document.getElementById('bulletinBriefingBtn');
            if (briefingBtn) {
                briefingBtn.innerHTML = `<span>🔊</span> ${d.btn_daily_briefing ? d.btn_daily_briefing.replace('🔊 ', '') : 'Daily Civic Briefing'}`;
            }
            const noticeBtn = document.getElementById('bulletinNoticeBtn');
            if (noticeBtn) {
                noticeBtn.innerHTML = `<span>📢</span> ${d.btn_read_notice ? d.btn_read_notice.replace('📢 ', '') : 'Read Notice'}`;
            }

            // 6. Translate Sidebar Navigation
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                const text = link.textContent.trim().toLowerCase();
                const icon = link.querySelector('.nav-icon')?.textContent || '';
                const countBadge = link.querySelector('.notification-count, .nav-count')?.outerHTML || '';

                if (text.includes('overview')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_overview || "Overview"}`;
                else if (text.includes('report issue') || text.includes('report an issue')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_report_issue || "Report Issue"}`;
                else if (text.includes('my reports') || text.includes('recent reports')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_my_reports || "My Reports"}`;
                else if (text.includes('map')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_civic_map || "Civic Map"}`;
                else if (text.includes('budget')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_participatory_budget || "Participatory Budget"}`;
                else if (text.includes('impact')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_community_impact || "Community Impact"}`;
                else if (text.includes('assignment')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_assignments || "Assignments"} ${countBadge}`;
                else if (text.includes('evidence')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_evidence_review || "Evidence Review"} ${countBadge}`;
                else if (text.includes('analytics')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_analytics || "Analytics"}`;
                else if (text.includes('notification')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_notifications || "Notifications"} ${countBadge}`;
                else if (text.includes('profile')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_my_profile || "My Profile"}`;
                else if (text.includes('settings')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_settings || "Settings"}`;
                else if (text.includes('logout')) link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_logout || "Logout"}`;
            });

            // 7. Translate Stat Cards
            const statTitles = document.querySelectorAll('.stat-info strong, .officer-stat-card strong, .stat-card strong');
            statTitles.forEach(st => {
                const t = st.textContent.trim().toLowerCase();
                if (t.includes('reports submitted')) st.textContent = d.stat_reports_submitted || "Reports Submitted";
                else if (t.includes('in progress')) st.textContent = d.stat_in_progress || "In Progress";
                else if (t.includes('resolved')) st.textContent = d.stat_issues_resolved || "Issues Resolved";
                else if (t.includes('impact') || t.includes('community')) st.textContent = d.stat_community_impact || "Community Impact";
                else if (t.includes('active grievances')) st.textContent = d.stat_total_active || "Total Active Grievances";
                else if (t.includes('assigned to contractor')) st.textContent = d.stat_assigned_contractor || "Assigned to Contractor";
                else if (t.includes('compliance')) st.textContent = d.stat_sla_compliance || "Statutory SLA Compliance";
                else if (t.includes('critical attention')) st.textContent = d.stat_critical_attention || "Critical Attention Required";
            });

            // 8. Translate Filter Pills
            const pills = document.querySelectorAll('.filter-tab-pill');
            pills.forEach(p => {
                const text = p.textContent.trim().toLowerCase();
                if (text.includes('all')) p.textContent = d.filter_all || "All (08)";
                else if (text.includes('in progress')) p.textContent = d.filter_in_progress || "⏳ In Progress (03)";
                else if (text.includes('resolved')) p.textContent = d.filter_resolved || "✅ Resolved (04)";
                else if (text.includes('critical')) p.textContent = d.filter_critical || "🔥 Critical SLA";
            });

            // 9. Translate Section Headers
            const reportsCardH2 = document.querySelector('.reports-card .card-header h2');
            if (reportsCardH2) reportsCardH2.textContent = d.card_recent_reports || "Recent Reports";
            const reportsCardSub = document.querySelector('.reports-card .card-header p');
            if (reportsCardSub) reportsCardSub.textContent = d.card_recent_reports_sub || "Track your latest civic issues";
            const viewAllBtns = document.querySelectorAll('.reports-card .text-btn, .card-header .text-btn');
            viewAllBtns.forEach(b => { if (b.textContent.includes('View')) b.textContent = d.btn_view_all || "View all →"; });

            // 10. Translate Toast Notification
            if (window.showToast) {
                const langNames = {
                    "en": "English", "hi": "हिंदी (Hindi)", "or": "ଓଡ଼ିଆ (Odia)", "bn": "বাংলা (Bengali)",
                    "gu": "ગુજરાતી (Gujarati)", "ta": "தமிழ் (Tamil)", "te": "తెలుగు (Telugu)",
                    "mr": "मराठी (Marathi)", "kn": "ಕನ್ನಡ (Kannada)"
                };
                window.showToast(`🌐 Language switched to ${langNames[lang] || lang.toUpperCase()}`);
            }
        }
    };

    // Auto-initialize on load
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('jansetu_preferred_lang') || 'en';
        window.JanSetuI18n.applyLanguage(savedLang);
    });

    // Global aliases for dashboard scripts
    window.changeDashboardLanguage = function(lang) {
        window.JanSetuI18n.applyLanguage(lang);
    };

    window.changeOfficerLanguage = function(lang) {
        window.JanSetuI18n.applyLanguage(lang);
    };
})();
