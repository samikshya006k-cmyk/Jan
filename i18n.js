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
            "portal_officer": "OFFICER CONTROL CENTER",
            "good_morning_citizen": "Good morning",
            "good_morning_officer": "Good morning, Officer 👋",
            "system_operational": "System Operational",
            "search_placeholder": "Search your reports...",
            "search_officer_placeholder": "Search grievance ID, location...",
            "today": "TODAY",
            
            // Sidebar Navigation
            "nav_dashboard": "Dashboard",
            "nav_overview": "Dashboard",
            "nav_report_issue": "Report Issue",
            "nav_my_reports": "My Reports",
            "nav_civic_map": "Civic Map",
            "nav_participatory_budget": "Participatory Budget",
            "nav_community_impact": "Community Impact",
            "nav_grievances": "Grievances",
            "nav_priority_queue": "Priority Queue",
            "nav_assignments": "Assignments",
            "nav_evidence_review": "Evidence Review",
            "nav_analytics": "Analytics",
            "nav_notifications": "Notifications",
            "nav_my_profile": "My Profile",
            "nav_settings": "Settings",
            "nav_logout": "Logout",
            "nav_need_help": "Need help?",
            "nav_need_help_sub": "Learn how JanSetu works.",
            "nav_contact_support": "Contact ward support team",
            "nav_section_main": "MAIN",
            "nav_section_operations": "OPERATIONS",
            "nav_section_community": "COMMUNITY",
            "nav_section_account": "ACCOUNT",
            "nav_section_management": "MANAGEMENT",
            "nav_section_system": "SYSTEM",
            "sidebar_officer_role": "Municipal Administration",

            // Welcome Row & Subtitles
            "welcome_citizen_sub": "Here's what's happening with your community.",
            "welcome_officer_sub": "Monitor, triage and resolve civic grievances assigned to your department.",
            "btn_report_issue": "＋ Report an Issue",
            "btn_export_report": "📄 Download Ward Report (PDF)",
            "official_bulletin_tag": "Official Ward Bulletin",
            "btn_daily_briefing": "🔊 Daily Civic Briefing",
            "btn_read_notice": "📢 Read Notice",
            "btn_stop_audio": "⏹ Stop",
            "karma_rank_level3": "Rank: Ward Guardian (Level 3)",
            "karma_xp_needed": "160 XP to Level 4 • Municipal Vanguard ⚡",

            // Citizen Stat Cards
            "stat_reports_submitted": "Reports Submitted",
            "stat_reports_submitted_sub": "Click to view all reports ↓",
            "stat_in_progress": "In Progress",
            "stat_in_progress_sub": "Click to filter active issues ↓",
            "stat_issues_resolved": "Issues Resolved",
            "stat_issues_resolved_sub": "Click to filter resolved issues ↓",
            "stat_community_impact": "Community Impact",
            "stat_community_impact_sub": "Click to view impact breakdown →",
            "trend_active": "Active",
            
            // Officer Stat Cards
            "stat_total_grievances": "Total Grievances",
            "stat_total_grievances_sub": "This month",
            "stat_pending_review": "Pending Review",
            "stat_pending_review_sub": "Awaiting officer action",
            "stat_action_needed": "Action needed",
            "stat_high_priority": "High Priority",
            "stat_high_priority_sub": "Require immediate attention",
            "stat_urgent_count": "4 urgent",
            "stat_resolved": "Resolved",
            "stat_resolution_rate": "Resolution rate",

            // Filters & Recent Reports
            "filter_all": "All",
            "filter_in_progress": "⏳ In Progress",
            "filter_resolved": "✅ Resolved",
            "filter_critical": "🔥 Critical SLA",
            "card_recent_reports": "Recent Reports",
            "card_recent_reports_sub": "Track your latest civic issues",
            "btn_view_all": "View all →",
            "card_priority_queue": "Priority Queue",
            "card_priority_queue_sub": "Grievances ranked by urgency and community impact.",
            "eyebrow_needs_attention": "NEEDS ATTENTION",
            "btn_review": "Review",

            // AI Triage Card (Officer)
            "eyebrow_ai_assistant": "AI ASSISTANT",
            "title_triage_insights": "Triage Insights",
            "ai_ready_review": "grievances ready for review",
            "ai_duplicate_detected": "Duplicate detected",
            "ai_misrouted": "Misrouted",
            "ai_pattern_detected": "Pattern detected",
            "ai_pattern_desc": "7 complaints about water supply were reported within the same area in the last 48 hours.",
            "btn_review_ai_insights": "Review AI Insights →",

            // Department Performance
            "title_dept_performance": "Department Performance",
            "sub_dept_performance": "Current month resolution metrics",
            "title_sla_overview": "SLA Overview",
            "sub_sla_overview": "Service-level compliance",

            // Quick Actions & Leaderboard
            "card_quick_actions": "Quick Actions",
            "sub_quick_actions": "Get things done faster",
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
            "rank_guardian_l3": "Ward Guardian • Lvl 3",
            "rank_champion_l3": "Civic Champion • Lvl 3",
            "rank_corroborator": "Active Corroborator",

            // Participatory Budgeting
            "budget_title": "Ward 12 Participatory Budgeting",
            "budget_subtitle": "Vote on community development projects funded by municipal council.",
            "btn_cast_vote": "🗳️ Cast Citizen Vote",
            "btn_voted_success": "✓ Vote Cast Successfully",

            // Categories & Statuses
            "cat_roads": "Road & Infrastructure",
            "cat_lighting": "Street Lighting",
            "cat_waste": "Waste Management",
            "cat_water": "Water Supply",
            "cat_drainage": "Drainage & Sewerage",
            "status_pending": "Pending",
            "status_in_progress": "In Progress",
            "status_resolved": "Resolved",
            "status_critical": "Critical",
            "prio_critical": "Critical",
            "prio_high": "High",
            "prio_medium": "Medium",
            "prio_low": "Low",

            // Sample Grievance Titles
            "title_waste_overflow": "Overflowing waste collection point",
            "title_road_damage": "Major road damage near Unit 4",
            "title_street_light": "Non-functional street lights on 3rd Cross",
            "title_water_leak": "Water pipe leakage flooding footpath"
        },
        "or": {
            // General & Header
            "portal_citizen": "ନାଗରିକ ପୋର୍ଟାଲ୍",
            "portal_officer": "ପୌର ପ୍ରଶାସନିକ ନିୟନ୍ତ୍ରଣ କେନ୍ଦ୍ର",
            "good_morning_citizen": "ଶୁଭ ସକାଳ",
            "good_morning_officer": "ଶୁଭ ସକାଳ, ପୌର ଅଧିକାରୀ 👋",
            "system_operational": "ସିଷ୍ଟମ୍ ସକ୍ରିୟ ଅଛି",
            "search_placeholder": "ଆପଣଙ୍କ ଅଭିଯୋଗ ଖୋଜନ୍ତୁ...",
            "search_officer_placeholder": "ଅଭିଯୋଗ ଆଇଡି, ସ୍ଥାନ ଖୋଜନ୍ତୁ...",
            "today": "ଆଜି",
            
            // Sidebar Navigation
            "nav_dashboard": "ମୁଖ୍ୟ ପୃଷ୍ଠା",
            "nav_overview": "ମୁଖ୍ୟ ପୃଷ୍ଠା",
            "nav_report_issue": "ଅଭିଯୋଗ ଦାଖଲ",
            "nav_my_reports": "ମୋର ଅଭିଯୋଗ",
            "nav_civic_map": "ପୌର ମ୍ୟାପ୍",
            "nav_participatory_budget": "ନାଗରିକ ବଜେଟ୍ ଭୋଟ୍",
            "nav_community_impact": "ସାମୂହିକ ପ୍ରଭାବ",
            "nav_grievances": "ସମସ୍ତ ଅଭିଯୋଗ",
            "nav_priority_queue": "ଜରୁରୀ ଅଭିଯୋଗ ତାଲିକା",
            "nav_assignments": "ଦାୟିତ୍ୱ ବଣ୍ଟନ",
            "nav_evidence_review": "ଫଟୋ ପ୍ରମାଣ ଯାଞ୍ଚ",
            "nav_analytics": "ପରିସଂଖ୍ୟାନ ଓ ତଥ୍ୟ",
            "nav_notifications": "ସୂଚନା ଓ ବିଜ୍ଞପ୍ତି",
            "nav_my_profile": "ମୋର ପ୍ରୋଫାଇଲ୍",
            "nav_settings": "ସେଟିଂସ୍",
            "nav_logout": "ଲଗ୍ ଆଉଟ୍",
            "nav_need_help": "ସାହାଯ୍ୟ ଦରକାର କି?",
            "nav_need_help_sub": "ଜନସେତୁ କାର୍ଯ୍ୟପ୍ରଣାଳୀ ଜାଣନ୍ତୁ।",
            "nav_contact_support": "ୱାର୍ଡ଼ ହେଲ୍ପଲାଇନ୍ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ",
            "nav_section_main": "ମୁଖ୍ୟ",
            "nav_section_operations": "କାର୍ଯ୍ୟ ପରିଚାଳନା",
            "nav_section_community": "ସମୁଦାୟ",
            "nav_section_account": "ଖାତା",
            "nav_section_management": "ପରିଚାଳନା",
            "nav_section_system": "ସିଷ୍ଟମ୍",
            "sidebar_officer_role": "ପୌର ପ୍ରଶାସନ",

            // Welcome Row & Subtitles
            "welcome_citizen_sub": "ଏଠାରେ ଆପଣଙ୍କ ପୌରାଞ୍ଚଳ ଓ ୱାର୍ଡ଼ର ସଦ୍ୟତମ ତଥ୍ୟ ଦେଖନ୍ତୁ।",
            "welcome_officer_sub": "ଅଭିଯୋଗ ସମାଧାନ, ଠିକାଦାର ନିଯୁକ୍ତି ଓ ସରକାରୀ ସମୟସୀମା ତଦାରଖ।",
            "btn_report_issue": "＋ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ",
            "btn_export_report": "📄 ୱାର୍ଡ଼ ରିପୋର୍ଟ ଡାଉନଲୋଡ୍ (PDF)",
            "official_bulletin_tag": "ସରକାରୀ ୱାର୍ଡ଼ ବିଜ୍ଞପ୍ତି",
            "btn_daily_briefing": "🔊 ଦୈନିକ ପୌର ବାର୍ତ୍ତା",
            "btn_read_notice": "📢 ନୋଟିସ୍ ଶୁଣନ୍ତୁ",
            "btn_stop_audio": "⏹ ବନ୍ଦ କରନ୍ତୁ",
            "karma_rank_level3": "ପଦବୀ: ୱାର୍ଡ଼ ଗାର୍ଡିଆନ୍ (ଲେଭଲ ୩)",
            "karma_xp_needed": "ଲେଭଲ ୪ ପାଇଁ ୧୬୦ ଏକ୍ସପି ଆବଶ୍ୟକ ⚡",

            // Citizen Stat Cards
            "stat_reports_submitted": "ଦାଖଲ ଅଭିଯୋଗ",
            "stat_reports_submitted_sub": "ସବୁ ଅଭିଯୋଗ ଦେଖିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ ↓",
            "stat_in_progress": "କାର୍ଯ୍ୟ ଚାଲୁଅଛି",
            "stat_in_progress_sub": "ସକ୍ରିୟ କାର୍ଯ୍ୟ ଫିଲ୍ଟର୍ କରନ୍ତୁ ↓",
            "stat_issues_resolved": "ସମାଧାନ ହୋଇଛି",
            "stat_issues_resolved_sub": "ସମାଧାନ ହୋଇଥିବା ଅଭିଯୋଗ ↓",
            "stat_community_impact": "ସାମୂହିକ ଲାଭ",
            "stat_community_impact_sub": "ପ୍ରଭାବ ବିବରଣୀ ଦେଖନ୍ତୁ →",
            "trend_active": "ସକ୍ରିୟ",
            
            // Officer Stat Cards
            "stat_total_grievances": "ମୋଟ ଅଭିଯୋଗ",
            "stat_total_grievances_sub": "ଏହି ମାସରେ",
            "stat_pending_review": "ବିଚାରାଧୀନ ଯାଞ୍ଚ",
            "stat_pending_review_sub": "ଅଧିକାରୀଙ୍କ ପଦକ୍ଷେପ ଅପେକ୍ଷା",
            "stat_action_needed": "ପଦକ୍ଷେପ ଆବଶ୍ୟକ",
            "stat_high_priority": "ଉଚ୍ଚ ପ୍ରାଥମିକତା",
            "stat_high_priority_sub": "ତୁରନ୍ତ ଧ୍ୟାନ ଆବଶ୍ୟକ",
            "stat_urgent_count": "୪ ଜରୁରୀ",
            "stat_resolved": "ସମାଧାନ ହୋଇଛି",
            "stat_resolution_rate": "ସମାଧାନ ହାର",

            // Filters & Recent Reports
            "filter_all": "ସମସ୍ତ (୦୮)",
            "filter_in_progress": "⏳ କାର୍ଯ୍ୟ ଚାଲୁଅଛି (୦୩)",
            "filter_resolved": "✅ ସମାଧାନ ହୋଇଛି (୦୪)",
            "filter_critical": "🔥 ଜରୁରୀ ବିପଦ",
            "card_recent_reports": "ସାମ୍ପ୍ରତିକ ଅଭିଯୋଗ",
            "card_recent_reports_sub": "ଆପଣଙ୍କ ଅଭିଯୋଗର ସ୍ଥିତି ଯାଞ୍ଚ କରନ୍ତୁ",
            "btn_view_all": "ସବୁ ଦେଖନ୍ତୁ →",
            "card_priority_queue": "ଜରୁରୀ ଅଭିଯୋଗ ତାଲିକା",
            "card_priority_queue_sub": "ଜରୁରୀକାଳୀନ ଭିତ୍ତିରେ ସଜ୍ଜିତ ଅଭିଯୋଗ।",
            "eyebrow_needs_attention": "ତୁରନ୍ତ ଧ୍ୟାନ ଆବଶ୍ୟକ",
            "btn_review": "ସମୀକ୍ଷା",

            // AI Triage Card (Officer)
            "eyebrow_ai_assistant": "ଏଆଇ ସହାୟକ",
            "title_triage_insights": "ଏଆଇ ପର୍ଯ୍ୟବେକ୍ଷଣ ତଥ୍ୟ",
            "ai_ready_review": "ଅଭିଯୋଗ ଯାଞ୍ଚ ପାଇଁ ପ୍ରସ୍ତୁତ",
            "ai_duplicate_detected": "ନକଲି ଅଭିଯୋଗ ଚିହ୍ନଟ",
            "ai_misrouted": "ଭୁଲ ବିଭାଗ ଚିହ୍ନଟ",
            "ai_pattern_detected": "ବିଶେଷ ଢାଞ୍ଚା ଚିହ୍ନଟ",
            "ai_pattern_desc": "ଗତ ୪୮ ଘଣ୍ଟାରେ ସମାନ ଅଞ୍ଚଳରୁ ଜଳ ଯୋଗାଣ ବିଷୟରେ ୭ଟି ଅଭିଯୋଗ ଆସିଛି।",
            "btn_review_ai_insights": "ଏଆଇ ତଥ୍ୟ ଯାଞ୍ଚ କରନ୍ତୁ →",

            // Department Performance
            "title_dept_performance": "ବିଭାଗୀୟ କାର୍ଯ୍ୟଦକ୍ଷତା",
            "sub_dept_performance": "ଚଳିତ ମାସର ସମାଧାନ ପରିସଂଖ୍ୟାନ",
            "title_sla_overview": "ସମୟସୀମା (SLA) ସମୀକ୍ଷା",
            "sub_sla_overview": "ସରକାରୀ ନିୟମ ପାଳନ",

            // Quick Actions & Leaderboard
            "card_quick_actions": "ତୁରନ୍ତ କାର୍ଯ୍ୟାନୁଷ୍ଠାନ",
            "sub_quick_actions": "ଶୀଘ୍ର ସେବା ପାଆନ୍ତୁ",
            "quick_report_issue": "ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ",
            "quick_report_issue_sub": "ନୂତନ ସମସ୍ୟା ପଞ୍ଜୀକରଣ",
            "quick_explore_map": "ପୌର ମ୍ୟାପ୍ ଦେଖନ୍ତୁ",
            "quick_explore_map_sub": "ନିକଟସ୍ଥ ସମସ୍ୟା ଯାଞ୍ଚ କରନ୍ତୁ",
            "quick_vote_projects": "ପ୍ରକଳ୍ପରେ ଭୋଟ୍ ଦିଅନ୍ତୁ",
            "quick_vote_projects_sub": "ୱାର୍ଡ଼ ଉନ୍ନୟନରେ ଅଂଶଗ୍ରହଣ",
            "quick_ask_ai": "ଜନସେତୁ ଏଆଇ ସହାୟକ",
            "quick_ask_ai_sub": "୨୪/୭ ଭଏସ୍ ଓ ଅଭିଯୋଗ ସହାୟତା",
            "leaderboard_title": "ୱାର୍ଡ଼ ୧୨ ଲିଡରବୋର୍ଡ଼",
            "leaderboard_tag": "ଶ୍ରେଷ୍ଠ ନାଗରିକ",
            "you_tag": "(ଆପଣ)",
            "rank_guardian_l3": "ୱାର୍ଡ଼ ଗାର୍ଡିଆନ୍ • ଲେଭଲ ୩",
            "rank_champion_l3": "ସିଭିକ୍ ଚାମ୍ପିଅନ୍ • ଲେଭଲ ୩",
            "rank_corroborator": "ସକ୍ରିୟ ନାଗରିକ",

            // Participatory Budgeting
            "budget_title": "ୱାର୍ଡ଼ ୧୨ ନାଗରିକ ବଜେଟ୍ ଭୋଟିଂ",
            "budget_subtitle": "ପୌର ପାଣ୍ଠି ଦ୍ୱାରା ହେବାକୁ ଥିବା ଉନ୍ନୟନ ପ୍ରକଳ୍ପରେ ଆପଣଙ୍କ ଭୋଟ୍ ଦିଅନ୍ତୁ।",
            "btn_cast_vote": "🗳️ ନାଗରିକ ଭୋଟ୍ ଦିଅନ୍ତୁ",
            "btn_voted_success": "✓ ଭୋଟ୍ ସଫଳତାର ସହ ଦିଆଗଲା",

            // Categories & Statuses
            "cat_roads": "ରାସ୍ତା ଓ ଭିତ୍ତିଭୂମି",
            "cat_lighting": "ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍ ଆଲୋକୀକରଣ",
            "cat_waste": "ବର୍ଜ୍ୟବସ୍ତୁ ପରିଚାଳନା",
            "cat_water": "ଜଳ ଯୋଗାଣ",
            "cat_drainage": "ଡ୍ରେନେଜ୍ ଓ ନାଳ ସଫେଇ",
            "status_pending": "ବିଚାରାଧୀନ",
            "status_in_progress": "କାର୍ଯ୍ୟ ଚାଲୁଅଛି",
            "status_resolved": "ସମାଧାନ ହୋଇଛି",
            "status_critical": "ଜରୁରୀ",
            "prio_critical": "ଅତ୍ୟନ୍ତ ଜରୁରୀ",
            "prio_high": "ଉଚ୍ଚ",
            "prio_medium": "ମଧ୍ୟମ",
            "prio_low": "ନିମ୍ନ",

            // Sample Grievance Titles
            "title_waste_overflow": "ଆବର୍ଜନା ସଂଗ୍ରହ କେନ୍ଦ୍ରରୁ ଅଳିଆ ନିଷ୍କାସନ",
            "title_road_damage": "ୟୁନିଟ୍ ୪ ନିକଟରେ ମୁଖ୍ୟ ରାସ୍ତା ନଷ୍ଟ",
            "title_street_light": "୩ୟ କ୍ରସରେ ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍ ଖରାପ",
            "title_water_leak": "ପାଇପ୍ ଲିକେଜ୍ ଯୋଗୁଁ ଫୁଟପାଥରେ ପାଣି"
        },
        "hi": {
            // General & Header
            "portal_citizen": "नागरिक पोर्टल",
            "portal_officer": "नगर निगम प्रशासनिक नियंत्रण केंद्र",
            "good_morning_citizen": "शुभ प्रभात",
            "good_morning_officer": "शुभ प्रभात, अधिकारी महोदय 👋",
            "system_operational": "सिस्टम पूरी तरह सक्रिय है",
            "search_placeholder": "अपनी शिकायतें खोजें...",
            "search_officer_placeholder": "शिकायत आईडी, स्थान खोजें...",
            "today": "आज",
            
            // Sidebar Navigation
            "nav_dashboard": "मुख्य पृष्ठ",
            "nav_overview": "डैशबोर्ड",
            "nav_report_issue": "शिकायत दर्ज करें",
            "nav_my_reports": "मेरी शिकायतें",
            "nav_civic_map": "नागरिक मानचित्र",
            "nav_participatory_budget": "नागरिक बजट मतदान",
            "nav_community_impact": "सामुदायिक प्रभाव",
            "nav_grievances": "कुल शिकायतें",
            "nav_priority_queue": "प्राथमिकता सूची",
            "nav_assignments": "कार्य आवंटन",
            "nav_evidence_review": "साक्ष्य सत्यापन",
            "nav_analytics": "विश्लेषण व रिपोर्ट",
            "nav_notifications": "सूचनाएं व अलर्ट",
            "nav_my_profile": "मेरी प्रोफ़ाइल",
            "nav_settings": "सेटिंग्स",
            "nav_logout": "लॉग आउट",
            "nav_need_help": "सहायता चाहिए?",
            "nav_need_help_sub": "जनसेतु की कार्यप्रणाली जानें।",
            "nav_contact_support": "वार्ड सहायता टीम से संपर्क करें",
            "nav_section_main": "मुख्य",
            "nav_section_operations": "संचालन",
            "nav_section_community": "समुदाय",
            "nav_section_account": "खाता",
            "nav_section_management": "प्रबंधन",
            "nav_section_system": "सिस्टम",
            "sidebar_officer_role": "नगर निगम प्रशासन",

            // Welcome Row & Subtitles
            "welcome_citizen_sub": "यहाँ आपके क्षेत्र और वार्ड से जुड़ी ताज़ा जानकारी है।",
            "welcome_officer_sub": "शिकायत निवारण, ठेकेदार कार्य आवंटन व 24-घंटे समयसीमा निगरानी।",
            "btn_report_issue": "＋ शिकायत दर्ज करें",
            "btn_export_report": "📄 वार्ड रिपोर्ट डाउनलोड करें (PDF)",
            "official_bulletin_tag": "आधिकारिक वार्ड बुलेटिन",
            "btn_daily_briefing": "🔊 दैनिक नागरिक ब्रीफिंग",
            "btn_read_notice": "📢 नोटिस सुनें",
            "btn_stop_audio": "⏹ रोकें",
            "karma_rank_level3": "पद: वार्ड संरक्षक (लेवल 3)",
            "karma_xp_needed": "लेवल 4 के लिए 160 XP शेष ⚡",

            // Citizen Stat Cards
            "stat_reports_submitted": "कुल दर्ज शिकायतें",
            "stat_reports_submitted_sub": "सभी शिकायतें देखने के लिए क्लिक करें ↓",
            "stat_in_progress": "प्रगति पर",
            "stat_in_progress_sub": "सक्रिय कार्य फ़िल्टर करें ↓",
            "stat_issues_resolved": "समाधान पूर्ण",
            "stat_issues_resolved_sub": "सत्यापित समाधान देखने के लिए क्लिक करें ↓",
            "stat_community_impact": "सामुदायिक प्रभाव",
            "stat_community_impact_sub": "प्रभाव विवरण देखें →",
            "trend_active": "सक्रिय",
            
            // Officer Stat Cards
            "stat_total_grievances": "कुल शिकायतें",
            "stat_total_grievances_sub": "इस महीने",
            "stat_pending_review": "समीक्षा लंबित",
            "stat_pending_review_sub": "अधिकारी कार्रवाई की प्रतीक्षा",
            "stat_action_needed": "कार्रवाई आवश्यक",
            "stat_high_priority": "उच्च प्राथमिकता",
            "stat_high_priority_sub": "तत्काल ध्यान आवश्यक",
            "stat_urgent_count": "4 आवश्यक",
            "stat_resolved": "समाधान पूर्ण",
            "stat_resolution_rate": "समाधान दर",

            // Filters & Recent Reports
            "filter_all": "सभी (08)",
            "filter_in_progress": "⏳ प्रगति पर (03)",
            "filter_resolved": "✅ समाधान पूर्ण (04)",
            "filter_critical": "🔥 अति आवश्यक",
            "card_recent_reports": "हालिया शिकायतें",
            "card_recent_reports_sub": "अपनी शिकायतों की स्थिति ट्रैक करें",
            "btn_view_all": "सभी देखें →",
            "card_priority_queue": "प्राथमिकता सूची",
            "card_priority_queue_sub": "तात्कालिकता और सामुदायिक प्रभाव के आधार पर रैंक की गई शिकायतें।",
            "eyebrow_needs_attention": "तत्काल ध्यान आवश्यक",
            "btn_review": "समीक्षा",

            // AI Triage Card (Officer)
            "eyebrow_ai_assistant": "एआई सहायक",
            "title_triage_insights": "एआई ट्राइएज अंतर्दृष्टि",
            "ai_ready_review": "शिकायतें समीक्षा के लिए तैयार",
            "ai_duplicate_detected": "डुप्लीकेट शिकायतें",
            "ai_misrouted": "गलत विभाग में प्रेषित",
            "ai_pattern_detected": "पैटर्न पाया गया",
            "ai_pattern_desc": "पिछले 48 घंटों में इसी क्षेत्र से जल आपूर्ति के संबंध में 7 शिकायतें दर्ज की गईं।",
            "btn_review_ai_insights": "एआई रिपोर्ट की समीक्षा करें →",

            // Department Performance
            "title_dept_performance": "विभागीय कार्यप्रदर्शन",
            "sub_dept_performance": "चालू माह के समाधान आंकड़े",
            "title_sla_overview": "SLA समयसीमा समीक्षा",
            "sub_sla_overview": "समयबद्ध सेवा अनुपालन",

            // Quick Actions & Leaderboard
            "card_quick_actions": "त्वरित कार्य",
            "sub_quick_actions": "सुविधाजनक सेवाएं",
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
            "rank_guardian_l3": "वार्ड संरक्षक • स्तर 3",
            "rank_champion_l3": "नागरिक चैंपियन • स्तर 3",
            "rank_corroborator": "सक्रिय नागरिक",

            // Participatory Budgeting
            "budget_title": "वार्ड 12 नागरिक बजट वोटिंग",
            "budget_subtitle": "नगर निगम द्वारा वित्तपोषित विकास परियोजनाओं पर अपना वोट दें।",
            "btn_cast_vote": "🗳️ नागरिक वोट दें",
            "btn_voted_success": "✓ वोट सफलतापूर्वक दर्ज हुआ",

            // Categories & Statuses
            "cat_roads": "सड़क व आधारभूत संरचना",
            "cat_lighting": "स्ट्रीट लाइट व्यवस्था",
            "cat_waste": "कचरा प्रबंधन",
            "cat_water": "पेयजल आपूर्ति",
            "cat_drainage": "जल निकासी व नाली सफाई",
            "status_pending": "लंबित",
            "status_in_progress": "प्रगति पर",
            "status_resolved": "समाधान पूर्ण",
            "status_critical": "गंभीर",
            "prio_critical": "अति गंभीर",
            "prio_high": "उच्च",
            "prio_medium": "मध्यम",
            "prio_low": "सामान्य",

            // Sample Grievance Titles
            "title_waste_overflow": "कचरा संग्रह केंद्र में ओवरफ्लो",
            "title_road_damage": "यूनिट 4 के पास मुख्य सड़क क्षति",
            "title_street_light": "3rd क्रॉस पर स्ट्रीट लाइट बंद",
            "title_water_leak": "पाइप लीकेज से फुटपाथ पर पानी"
        },
        "gu": {
            "portal_citizen": "નાગરિક પોર્ટલ",
            "portal_officer": "નગરપાલિકા નિયંત્રણ કેન્દ્ર",
            "good_morning_citizen": "શુભ સવાર",
            "good_morning_officer": "શુભ સવાર, અધિકારી સાહેબ 👋",
            "system_operational": "સિસ્ટમ સક્રિય છે",
            "search_placeholder": "તમારી ફરિયાદો શોધો...",
            "search_officer_placeholder": "ફરિયાદ આઈડી, વિસ્તાર શોધો...",
            "today": "આજે",
            "nav_dashboard": "ડેશબોર્ડ",
            "nav_overview": "ડેશબોર્ડ",
            "nav_report_issue": "સમસ્યા નોંધાવો",
            "nav_my_reports": "મારી ફરિયાદો",
            "nav_civic_map": "નગર નકશો",
            "nav_participatory_budget": "નાગરિક બજેટ મતદાન",
            "nav_community_impact": "સમુદાય પ્રભાવ",
            "nav_grievances": "બધી ફરિયાદો",
            "nav_priority_queue": "પ્રાથમિકતા યાદી",
            "nav_assignments": "કામગીરી સોંપણી",
            "nav_evidence_review": "પુરાવા ચકાસણી",
            "nav_analytics": "વિશ્લેષણ",
            "nav_notifications": "સૂચનાઓ",
            "nav_my_profile": "મારી પ્રોફાઇલ",
            "nav_settings": "સેટિંગ્સ",
            "nav_logout": "લૉગ આઉટ",
            "nav_need_help": "મદદ જોઈએ છે?",
            "nav_need_help_sub": "જનસેતુ કેવી રીતે કાર્ય કરે છે તે જાણો.",
            "welcome_citizen_sub": "તમારા વિસ્તાર અને વોર્ડની તાજી વિગતો અહીં જુઓ.",
            "welcome_officer_sub": "ફરિયાદ નિવારણ અને કોન્ટ્રાક્ટર કામગીરીનું નિરીક્ષણ.",
            "btn_report_issue": "＋ સમસ્યા નોંધાવો",
            "btn_export_report": "📄 વોર્ડ રિપોર્ટ ડાઉનલોડ (PDF)",
            "official_bulletin_tag": "સત્તાવાર વોર્ડ બુલેટિન",
            "btn_daily_briefing": "🔊 દૈનિક નાગરિક બ્રીફિંગ",
            "btn_read_notice": "📢 નોટિસ સાંભળો",
            "btn_stop_audio": "⏹ બંધ કરો",
            "stat_reports_submitted": "કુલ ફરિયાદો",
            "stat_reports_submitted_sub": "બધી ફરિયાદો જોવા માટે ક્લિક કરો ↓",
            "stat_in_progress": "કામ ચાલુ છે",
            "stat_in_progress_sub": "સક્રિય ફરિયાદો ફિલ્ટર કરો ↓",
            "stat_issues_resolved": "નિરાકરણ થયેલ",
            "stat_issues_resolved_sub": "ઉકેલાયેલ ફરિયાદો જુઓ ↓",
            "stat_community_impact": "સમુદાય પ્રભાવ",
            "stat_community_impact_sub": "પ્રભાવ વિગતો જુઓ →",
            "trend_active": "સક્રિય",
            "stat_total_grievances": "કુલ ફરિયાદો",
            "stat_total_grievances_sub": "આ મહિને",
            "stat_pending_review": "ચકાસણી બાકી",
            "stat_pending_review_sub": "અધિકારીની કાર્યવાહી અપેક્ષિત",
            "stat_high_priority": "ઉચ્ચ પ્રાથમિકતા",
            "stat_resolved": "નિરાકરણ થયેલ",
            "filter_all": "બધા (૦૮)",
            "filter_in_progress": "⏳ કામ ચાલુ છે (૦૩)",
            "filter_resolved": "✅ નિરાકરણ થયેલ (૦૪)",
            "filter_critical": "🔥 તાત્કાલિક",
            "card_recent_reports": "તાજેતરની ફરિયાદો",
            "card_recent_reports_sub": "તમારી ફરિયાદોની સ્થિતિ તપાસો",
            "btn_view_all": "બધા જુઓ →",
            "card_priority_queue": "પ્રાથમિકતા યાદી",
            "btn_review": "સમીક્ષા",
            "card_quick_actions": "ઝડપી ક્રિયાઓ",
            "sub_quick_actions": "ઝડપી સેવા મેળવો",
            "quick_report_issue": "સમસ્યા નોંધાવો",
            "quick_explore_map": "નકશો જુઓ",
            "quick_vote_projects": "પ્રોજેક્ટ પર વોટ આપો",
            "quick_ask_ai": "જનસેતુ એઆઈ સહાયક",
            "leaderboard_title": "વોર્ડ ૧૨ લીડરબોર્ડ",
            "leaderboard_tag": "ટોચના નાગરિકો",
            "you_tag": "(તમે)",
            "budget_title": "વોર્ડ ૧૨ નાગરિક બજેટ વોટિંગ",
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
            "status_critical": "તાત્કાલિક",
            "title_waste_overflow": "કચરા કલેક્શન પોઇન્ટ પર ઓવરફ્લો",
            "title_road_damage": "યુનિટ 4 પાસે મોટો ખાડો અને રસ્તો ખરાબ",
            "title_street_light": "3જી ક્રોસ પર સ્ટ્રીટ લાઈટો બંધ",
            "title_water_leak": "પાઈપ લિકેજથી ફૂટપાથ પર પાણી"
        },
        "bn": {
            "portal_citizen": "নাগরিক পোর্টাল",
            "portal_officer": "পৌর প্রশাসনিক নিয়ন্ত্রণ কেন্দ্র",
            "good_morning_citizen": "সুপ্রভাত",
            "good_morning_officer": "সুপ্রভাত, পৌর আধিকারিক 👋",
            "system_operational": "সিস্টেম সক্রিয় আছে",
            "search_placeholder": "আপনার অভিযোগ খুঁজুন...",
            "search_officer_placeholder": "অভিযোগ আইডি, এলাকা খুঁজুন...",
            "today": "আজ",
            "nav_dashboard": "ড্যাশবোর্ড",
            "nav_overview": "ড্যাশবোর্ড",
            "nav_report_issue": "অভিযোগ জানান",
            "nav_my_reports": "আমার অভিযোগ",
            "nav_civic_map": "পৌর ম্যাপ",
            "nav_participatory_budget": "নাগরিক বাজেট ভোট",
            "nav_community_impact": "সামাজিক প্রভাব",
            "nav_grievances": "মোট অভিযোগ",
            "nav_priority_queue": "অগ্রাধিকার তালিকা",
            "nav_assignments": "দায়িত্ব বণ্টন",
            "nav_evidence_review": "প্রমাণ যাচাই",
            "nav_analytics": "পরিসংখ্যান",
            "nav_notifications": "বিজ্ঞপ্তি",
            "nav_my_profile": "আমার প্রোফাইল",
            "nav_settings": "সেটিংস",
            "nav_logout": "লগআউট",
            "nav_need_help": "সাহায্য প্রয়োজন?",
            "nav_need_help_sub": "জনসেতু কীভাবে কাজ করে জানুন।",
            "welcome_citizen_sub": "আপনার এলাকার সর্বশেষ তথ্য ও পরিষেবা আপডেট।",
            "welcome_officer_sub": "অভিযোগ নিষ্পত্তি ও ঠিকাদার কাজের তত্ত্বাবধান।",
            "btn_report_issue": "＋ অভিযোগ জানান",
            "btn_export_report": "📄 ওয়ার্ড রিপোর্ট ডাউনলোড (PDF)",
            "official_bulletin_tag": "অফিসিয়াল পৌর বুলেটিন",
            "btn_daily_briefing": "🔊 দৈনিক নাগরিক ব্রিফিং",
            "btn_read_notice": "📢 নোটিশ শুনুন",
            "btn_stop_audio": "⏹ থামুন",
            "stat_reports_submitted": "মোট অভিযোগ",
            "stat_reports_submitted_sub": "সব অভিযোগ দেখতে ক্লিক করুন ↓",
            "stat_in_progress": "কাজ চলছে",
            "stat_in_progress_sub": "চলমান অভিযোগ ফিল্টার করুন ↓",
            "stat_issues_resolved": "সমাধান সম্পন্ন",
            "stat_issues_resolved_sub": "নিষ্পত্তি হওয়া অভিযোগ দেখুন ↓",
            "stat_community_impact": "নাগরিক প্রভাব",
            "stat_community_impact_sub": "প্রভাবের বিবরণ দেখুন →",
            "trend_active": "সক্রিয়",
            "stat_total_grievances": "মোট অভিযোগ",
            "stat_total_grievances_sub": "এই মাসে",
            "stat_pending_review": "পর্যালোচনা বাকি",
            "stat_high_priority": "উচ্চ অগ্রাধিকার",
            "stat_resolved": "সমাধান সম্পন্ন",
            "filter_all": "সকল (০৮)",
            "filter_in_progress": "⏳ কাজ চলছে (০৩)",
            "filter_resolved": "✅ সমাধান সম্পন্ন (০৪)",
            "filter_critical": "🔥 জরুরি",
            "card_recent_reports": "সাম্প্রতিক অভিযোগ",
            "card_recent_reports_sub": "আপনার অভিযোগের বর্তমান অবস্থা দেখুন",
            "btn_view_all": "সব দেখুন →",
            "card_priority_queue": "জরুরি তালিকা",
            "btn_review": "যাচাই",
            "card_quick_actions": "দ্রুত সেবা",
            "sub_quick_actions": "দ্রুত পরিষেবা নিন",
            "quick_report_issue": "অভিযোগ জানান",
            "quick_explore_map": "ম্যাপ দেখুন",
            "quick_vote_projects": "প্রকল্পে ভোট দিন",
            "quick_ask_ai": "জনসেতু এআই সহকারী",
            "leaderboard_title": "ওয়ার্ড ১২ লিডারবোর্ড",
            "leaderboard_tag": "সেরা নাগরিক",
            "you_tag": "(আপনি)",
            "budget_title": "ওয়ার্ড ১২ নাগরিক বাজেট ভোটিং",
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
            "status_critical": "জরুরি",
            "title_waste_overflow": "আবর্জনা সংগ্রহ কেন্দ্রে অতিরিক্ত আবর্জনা",
            "title_road_damage": "ইউনিট ৪ এর কাছে ভাঙা রাস্তা",
            "title_street_light": "৩য় ক্রসে পথবাতি বন্ধ",
            "title_water_leak": "পাইপ ফেটে ফুটপাতে জল"
        },
        "ta": {
            "portal_citizen": "குடிமக்கள் போர்டல்",
            "portal_officer": "மாநகராட்சி கட்டுப்பாட்டு மையம்",
            "good_morning_citizen": "காலை வணக்கம்",
            "good_morning_officer": "காலை வணக்கம், அதிகாரி அவர்களே 👋",
            "system_operational": "கணினி செயல்படுகிறது",
            "search_placeholder": "உங்கள் புகார்களை தேடுக...",
            "today": "இன்று",
            "nav_dashboard": "முகப்பு",
            "nav_overview": "முகப்பு",
            "nav_report_issue": "புகார் செய்க",
            "nav_my_reports": "எனது புகார்கள்",
            "nav_civic_map": "வரைபடம்",
            "nav_participatory_budget": "பட்ஜெட் வாக்களிப்பு",
            "nav_community_impact": "மக்கள் தாக்கம்",
            "nav_grievances": "அனைத்து புகார்கள்",
            "nav_priority_queue": "முன்னுரிமை பட்டியல்",
            "nav_assignments": "பணி ஒதுக்கீடு",
            "nav_evidence_review": "சான்று சரிபார்ப்பு",
            "nav_analytics": "பகுப்பாய்வு",
            "nav_notifications": "அறிவிப்புகள்",
            "nav_my_profile": "சுயவிவரம்",
            "nav_settings": "அமைப்புகள்",
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
            "btn_review": "சரிபார்",
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
            "portal_officer": "మున్సిపల్ కంట్రోల్ సెంటర్",
            "good_morning_citizen": "శుభోదయం",
            "good_morning_officer": "శుభోదయం, అధికారి గారు 👋",
            "system_operational": "సిస్టమ్ పనిచేస్తోంది",
            "search_placeholder": "మీ ఫిర్యాదులను వెతకండి...",
            "today": "నేడు",
            "nav_dashboard": "డ్యాష్‌బోర్డ్",
            "nav_overview": "డ్యాష్‌బోర్డ్",
            "nav_report_issue": "ఫిర్యాదు చేయండి",
            "nav_my_reports": "నా ఫిర్యాదులు",
            "nav_civic_map": "పౌర మ్యాప్",
            "nav_participatory_budget": "బడ్జెట్ ఓటింగ్",
            "nav_community_impact": "సమాజ ప్రభావం",
            "nav_grievances": "అన్ని ఫిర్యాదులు",
            "nav_priority_queue": "ప్రాధాన్యత జాబితా",
            "nav_assignments": "కేటాయింపులు",
            "nav_evidence_review": "సాక్ష్యాల సమీక్ష",
            "nav_analytics": "విశ్లేషణలు",
            "nav_notifications": "నోటిఫికేషన్లు",
            "nav_my_profile": "నా ప్రొఫైల్",
            "nav_settings": "సెట్టింగ్‌లు",
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
            "btn_review": "సమీక్షించండి",
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
            "portal_officer": "महानगरपालिका नियंत्रण केंद्र",
            "good_morning_citizen": "शुभ प्रभात",
            "good_morning_officer": "शुभ प्रभात, अधिकारी महोदय 👋",
            "system_operational": "प्रणाली कार्यरत आहे",
            "search_placeholder": "आपल्या तक्रारी शोधा...",
            "today": "आज",
            "nav_dashboard": "डॅशबोर्ड",
            "nav_overview": "डॅशबोर्ड",
            "nav_report_issue": "तक्रार नोंदवा",
            "nav_my_reports": "माझ्या तक्रारी",
            "nav_civic_map": "नागरी नकाशा",
            "nav_participatory_budget": "नागरी अंदाजपत्रक मतदान",
            "nav_community_impact": "नागरी प्रभाव",
            "nav_grievances": "सर्व तक्रारी",
            "nav_priority_queue": "प्राधान्य सूची",
            "nav_assignments": "काम वाटप",
            "nav_evidence_review": "पुरावा तपासणी",
            "nav_analytics": "विश्लेषण",
            "nav_notifications": "सूचना",
            "nav_my_profile": "माझे प्रोफाइल",
            "nav_settings": "सेटिंग्ज",
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
            "btn_review": "तपासा",
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
            "portal_officer": "ಮಹಾನಗರ ಪಾಲಿಕೆ ನಿಯಂತ್ರಣ ಕೊಠಡಿ",
            "good_morning_citizen": "ಶುಭೋದಯ",
            "good_morning_officer": "ಶುಭೋದಯ, ಅಧಿಕಾರಿಗಳೇ 👋",
            "system_operational": "ವ್ಯವಸ್ಥೆ ಸಕ್ರಿಯವಾಗಿದೆ",
            "search_placeholder": "ನಿಮ್ಮ ದೂರುಗಳನ್ನು ಹುಡುಕಿ...",
            "today": "ಇಂದು",
            "nav_dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "nav_overview": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "nav_report_issue": "ದೂರು ಸಲ್ಲಿಸಿ",
            "nav_my_reports": "ನನ್ನ ದೂರುಗಳು",
            "nav_civic_map": "ನಗರ ನಕ್ಷೆ",
            "nav_participatory_budget": "ಪೌರ ಬಜೆಟ್ ಮತದಾನ",
            "nav_community_impact": "ಸಮುದಾಯ ಪರಿಣಾಮ",
            "nav_grievances": "ಎಲ್ಲಾ ದೂರುಗಳು",
            "nav_priority_queue": "ಆದ್ಯತೆ ಪಟ್ಟಿ",
            "nav_assignments": "ಕೆಲಸ ಹಂಚಿಕೆ",
            "nav_evidence_review": "ಸಾಕ್ಷಿ ಪರಿಶೀಲನೆ",
            "nav_analytics": "ವಿಶ್ಲೇಷಣೆ",
            "nav_notifications": "ಸೂಚನೆಗಳು",
            "nav_my_profile": "ನನ್ನ ಪ್ರೊಫೈಲ್",
            "nav_settings": "ಸಂಯೋಜನೆಗಳು",
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
            "btn_review": "ಪರಿಶೀಲಿಸಿ",
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

        translateTitle(rawTitle, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            if (current === 'en') return rawTitle;

            const t = (rawTitle || "").toLowerCase();
            if (t.includes("waste") || t.includes("garbage") || t.includes("overflow")) return this.get("title_waste_overflow", current);
            if (t.includes("road") || t.includes("crater") || t.includes("damage") || t.includes("unit 4")) return this.get("title_road_damage", current);
            if (t.includes("street light") || t.includes("light") || t.includes("dark") || t.includes("cross")) return this.get("title_street_light", current);
            if (t.includes("pipe") || t.includes("water") || t.includes("leak") || t.includes("flood")) return this.get("title_water_leak", current);
            return rawTitle;
        },

        translateCategory(cat, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const c = (cat || "").toLowerCase();
            if (c.includes("road") || c.includes("infra")) return this.get("cat_roads", current);
            if (c.includes("light")) return this.get("cat_lighting", current);
            if (c.includes("waste") || c.includes("garbage")) return this.get("cat_waste", current);
            if (c.includes("water")) return this.get("cat_water", current);
            if (c.includes("drain")) return this.get("cat_drainage", current);
            return cat;
        },

        translatePriority(prio, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const p = (prio || "").toLowerCase();
            if (p.includes("crit")) return this.get("prio_critical", current);
            if (p.includes("high")) return this.get("prio_high", current);
            if (p.includes("med")) return this.get("prio_medium", current);
            if (p.includes("low")) return this.get("prio_low", current);
            return prio;
        },

        translateStatus(status, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const s = (status || "").toLowerCase();
            if (s.includes("progress")) return this.get("status_in_progress", current);
            if (s.includes("resolve")) return this.get("status_resolved", current);
            if (s.includes("crit")) return this.get("status_critical", current);
            return this.get("status_pending", current);
        },

        applyLanguage(lang) {
            localStorage.setItem('jansetu_preferred_lang', lang);
            window.currentAppLanguage = lang;

            // Sync all language dropdowns
            const selects = document.querySelectorAll('#globalDashboardLangSelect, #globalOfficerLangSelect, #modalVoiceLangSelect, #profileInputLang, #aiChatLangSelect');
            selects.forEach(sel => {
                if (sel && sel.value !== lang) sel.value = lang;
            });

            const d = this.dict[lang] || this.dict['en'];

            // 1. Data-i18n elements
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (d[key]) el.textContent = d[key];
            });

            // 2. Data-i18n-placeholder elements
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (d[key]) el.placeholder = d[key];
            });

            // 3. Topbar Search & Status
            const searchInput = document.getElementById('globalSearch') || document.querySelector('.global-search input') || document.querySelector('.search-bar input');
            if (searchInput) {
                const isOfficer = window.location.pathname.includes('officer') || document.body.classList.contains('officer-body');
                searchInput.placeholder = isOfficer ? (d.search_officer_placeholder || "Search grievance ID, location...") : (d.search_placeholder || "Search your reports...");
            }
            const officeStatus = document.querySelector('.office-status');
            if (officeStatus) {
                officeStatus.innerHTML = `<span class="online-dot"></span> ${d.system_operational || "System Operational"}`;
            }

            // 4. Welcome Headers & Eyebrows
            const welcomeCitizenH1 = document.querySelector('.welcome-row h1');
            if (welcomeCitizenH1) {
                const nameElem = document.getElementById('welcomeName') || document.getElementById('userName');
                const userName = nameElem ? nameElem.textContent.trim() : 'Citizen';
                welcomeCitizenH1.innerHTML = `${d.good_morning_citizen || "Good morning"}, <span id="welcomeName">${userName}</span> 👋`;
            }
            const welcomeOfficerH1 = document.querySelector('.page-header h1');
            if (welcomeOfficerH1) {
                welcomeOfficerH1.innerHTML = d.good_morning_officer || "Good morning, Officer 👋";
            }
            const citizenEyebrow = document.querySelector('.welcome-row .eyebrow');
            if (citizenEyebrow) citizenEyebrow.textContent = d.portal_citizen || "CITIZEN PORTAL";
            const officerEyebrow = document.querySelector('.page-header .eyebrow');
            if (officerEyebrow) officerEyebrow.textContent = d.portal_officer || "OFFICER CONTROL CENTER";

            const citizenSub = document.querySelector('.welcome-row p');
            if (citizenSub) citizenSub.textContent = d.welcome_citizen_sub || "Here's what's happening with your community.";
            const officerSub = document.querySelector('.page-header p');
            if (officerSub) officerSub.textContent = d.welcome_officer_sub || "Monitor, triage and resolve civic grievances assigned to your department.";

            const dateBoxSpan = document.querySelector('.date-box span');
            if (dateBoxSpan) dateBoxSpan.textContent = d.today || "TODAY";
            const pdfExportBtn = document.querySelector('.pdf-export-btn');
            if (pdfExportBtn) pdfExportBtn.innerHTML = `<span>📄</span> ${d.btn_export_report ? d.btn_export_report.replace('📄 ', '') : 'Download Ward Report (PDF)'}`;

            // 5. Sidebar Navigation Links & Titles
            const navTitles = document.querySelectorAll('.nav-title, .nav-heading');
            navTitles.forEach(nt => {
                const text = nt.textContent.trim().toUpperCase();
                if (text.includes('MAIN')) nt.textContent = d.nav_section_main || "MAIN";
                else if (text.includes('OPERATIONS')) nt.textContent = d.nav_section_operations || "OPERATIONS";
                else if (text.includes('COMMUNITY')) nt.textContent = d.nav_section_community || "COMMUNITY";
                else if (text.includes('ACCOUNT')) nt.textContent = d.nav_section_account || "ACCOUNT";
                else if (text.includes('MANAGEMENT')) nt.textContent = d.nav_section_management || "MANAGEMENT";
                else if (text.includes('SYSTEM')) nt.textContent = d.nav_section_system || "SYSTEM";
            });

            const navLinks = document.querySelectorAll('.nav-link, .sidebar-nav a');
            navLinks.forEach(link => {
                const text = link.textContent.trim().toLowerCase();
                const icon = link.querySelector('.nav-icon')?.textContent || '';
                const countBadge = link.querySelector('.notification-count, .nav-count')?.outerHTML || '';

                if (text.includes('dashboard') || text.includes('overview') || text.includes('ମୁଖ୍ୟ') || text.includes('मुख्य')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_dashboard || "Dashboard"}`;
                } else if (text.includes('report issue') || text.includes('report an issue') || text.includes('ଅଭିଯୋଗ ଦାଖଲ') || text.includes('शिकायत दर्ज')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_report_issue || "Report Issue"}`;
                } else if (text.includes('my reports') || text.includes('ମୋର ଅଭିଯୋଗ') || text.includes('मेरी शिकायतें')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_my_reports || "My Reports"}`;
                } else if (text.includes('civic map') || text.includes('map') || text.includes('ମ୍ୟାପ୍') || text.includes('मानचित्र')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_civic_map || "Civic Map"}`;
                } else if (text.includes('participatory') || text.includes('budget') || text.includes('ବଜେଟ୍') || text.includes('बजट')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_participatory_budget || "Participatory Budget"}`;
                } else if (text.includes('community impact') || text.includes('impact') || text.includes('ପ୍ରଭାବ') || text.includes('प्रभाव')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_community_impact || "Community Impact"}`;
                } else if (text.includes('grievances') || text.includes('ମୋଟ ଅଭିଯୋଗ') || text.includes('कुल शिकायतें')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_grievances || "Grievances"} ${countBadge}`;
                } else if (text.includes('priority queue') || text.includes('priority') || text.includes('ଜରୁରୀ') || text.includes('प्राथमिकता')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_priority_queue || "Priority Queue"} ${countBadge}`;
                } else if (text.includes('assignment') || text.includes('ବଣ୍ଟନ') || text.includes('आवंटन')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_assignments || "Assignments"} ${countBadge}`;
                } else if (text.includes('evidence') || text.includes('ପ୍ରମାଣ') || text.includes('साक्ष्य')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_evidence_review || "Evidence Review"} ${countBadge}`;
                } else if (text.includes('analytics') || text.includes('ତଥ୍ୟ') || text.includes('विश्लेषण')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_analytics || "Analytics"}`;
                } else if (text.includes('notification') || text.includes('ସୂଚନା') || text.includes('सूचनाएं')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_notifications || "Notifications"} ${countBadge}`;
                } else if (text.includes('profile') || text.includes('ପ୍ରୋଫାଇଲ୍') || text.includes('प्रोफ़ाइल')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_my_profile || "My Profile"}`;
                } else if (text.includes('settings') || text.includes('ସେଟିଂସ୍') || text.includes('सेटिंग्स')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_settings || "Settings"}`;
                } else if (text.includes('logout') || text.includes('ଲଗ୍ ଆଉଟ୍') || text.includes('लॉग आउट')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_logout || "Logout"}`;
                }
            });

            // 6. Help Card (Sidebar Bottom)
            const helpCardStrong = document.querySelector('.help-card strong');
            if (helpCardStrong) helpCardStrong.textContent = d.nav_need_help || "Need help?";
            const helpCardSpan = document.querySelector('.help-card span');
            if (helpCardSpan) helpCardSpan.textContent = d.nav_need_help_sub || "Learn how JanSetu works.";

            const officerCardRole = document.querySelector('.officer-sidebar-card span');
            if (officerCardRole) officerCardRole.textContent = d.sidebar_officer_role || "Municipal Administration";

            // 7. Stat Cards (Citizen & Officer)
            // Citizen Stats:
            const citizenStatCards = document.querySelectorAll('.stats-grid .stat-card');
            citizenStatCards.forEach(sc => {
                const p = sc.querySelector('p');
                const desc = sc.querySelector('.stat-description');
                const trend = sc.querySelector('.trend');
                const titleSpan = sc.querySelector('.stat-title');
                const subSpan = sc.querySelector('.stat-subtitle');
                const trendSpan = sc.querySelector('.stat-trend');

                if (p) {
                    const text = p.textContent.toLowerCase();
                    if (text.includes('submitted') || text.includes('ଦାଖଲ') || text.includes('दर्ज')) {
                        p.textContent = d.stat_reports_submitted || "Reports Submitted";
                        if (desc) desc.textContent = d.stat_reports_submitted_sub || "Click to view all reports ↓";
                    } else if (text.includes('progress') || text.includes('ଚାଲୁଅଛି') || text.includes('प्रगति')) {
                        p.textContent = d.stat_in_progress || "In Progress";
                        if (desc) desc.textContent = d.stat_in_progress_sub || "Click to filter active issues ↓";
                        if (trend) trend.textContent = d.trend_active || "Active";
                    } else if (text.includes('resolved') || text.includes('ସମାଧାନ') || text.includes('समाधान')) {
                        p.textContent = d.stat_issues_resolved || "Issues Resolved";
                        if (desc) desc.textContent = d.stat_issues_resolved_sub || "Click to filter resolved issues ↓";
                    } else if (text.includes('impact') || text.includes('ପ୍ରଭାବ') || text.includes('प्रभाव')) {
                        p.textContent = d.stat_community_impact || "Community Impact";
                        if (desc) desc.textContent = d.stat_community_impact_sub || "Click to view impact breakdown →";
                    }
                }

                // Officer Stats:
                if (titleSpan) {
                    const text = titleSpan.textContent.toLowerCase();
                    if (text.includes('total grievances') || text.includes('ମୋଟ') || text.includes('कुल')) {
                        titleSpan.textContent = d.stat_total_grievances || "Total Grievances";
                        if (subSpan) subSpan.textContent = d.stat_total_grievances_sub || "This month";
                    } else if (text.includes('pending') || text.includes('ଯାଞ୍ଚ') || text.includes('लंबित')) {
                        titleSpan.textContent = d.stat_pending_review || "Pending Review";
                        if (subSpan) subSpan.textContent = d.stat_pending_review_sub || "Awaiting officer action";
                        if (trendSpan) trendSpan.textContent = d.stat_action_needed || "Action needed";
                    } else if (text.includes('priority') || text.includes('ଜରୁରୀ') || text.includes('प्राथमिकता')) {
                        titleSpan.textContent = d.stat_high_priority || "High Priority";
                        if (subSpan) subSpan.textContent = d.stat_high_priority_sub || "Require immediate attention";
                        if (trendSpan) trendSpan.textContent = d.stat_urgent_count || "4 urgent";
                    } else if (text.includes('resolved') || text.includes('ସମାଧାନ') || text.includes('समाधान')) {
                        titleSpan.textContent = d.stat_resolved || "Resolved";
                        if (subSpan) subSpan.textContent = d.stat_resolution_rate || "Resolution rate";
                    }
                }
            });

            // 8. Filter Pills
            const pills = document.querySelectorAll('.filter-tab-pill');
            pills.forEach(p => {
                const text = p.textContent.toLowerCase();
                if (text.includes('all') || text.includes('ସମସ୍ତ') || text.includes('सभी') || text.includes('બધા')) p.textContent = d.filter_all || "All (08)";
                else if (text.includes('progress') || text.includes('ଚାଲୁଅଛି') || text.includes('प्रगति') || text.includes('કામ ચાલુ')) p.textContent = d.filter_in_progress || "⏳ In Progress (03)";
                else if (text.includes('resolved') || text.includes('ସମାଧାନ') || text.includes('समाधान') || text.includes('નિરાકરણ')) p.textContent = d.filter_resolved || "✅ Resolved (04)";
                else if (text.includes('critical') || text.includes('ବିପଦ') || text.includes('आवश्यक') || text.includes('તાત્કાલિક')) p.textContent = d.filter_critical || "🔥 Critical SLA";
            });

            // 9. Quick Actions (Citizen Right Column)
            const quickCards = document.querySelectorAll('.quick-actions-card, .quick-actions');
            quickCards.forEach(qc => {
                const h2 = qc.querySelector('h2');
                if (h2) h2.textContent = d.card_quick_actions || "Quick Actions";
                const p = qc.querySelector('p');
                if (p) p.textContent = d.sub_quick_actions || "Get things done faster";
            });

            const quickActionButtons = document.querySelectorAll('.quick-action');
            quickActionButtons.forEach(btn => {
                const strong = btn.querySelector('strong');
                const span = btn.querySelector('span:not(:last-child)');
                if (strong) {
                    const t = strong.textContent.toLowerCase();
                    if (t.includes('report') || t.includes('ଅଭିଯୋଗ') || t.includes('शिकायत') || t.includes('સમસ્યા')) {
                        strong.textContent = d.quick_report_issue || "Report an issue";
                        if (span) span.textContent = d.quick_report_issue_sub || "Submit a new grievance";
                    } else if (t.includes('map') || t.includes('ମ୍ୟାପ୍') || textContains(t, ['मानचित्र', 'નકશો', 'வரைபடம்'])) {
                        strong.textContent = d.quick_explore_map || "Explore civic map";
                        if (span) span.textContent = d.quick_explore_map_sub || "See issues near you";
                    } else if (t.includes('project') || t.includes('vote') || t.includes('ଭୋଟ୍') || t.includes('वोट') || t.includes('વોટ')) {
                        strong.textContent = d.quick_vote_projects || "Vote on projects";
                        if (span) span.textContent = d.quick_vote_projects_sub || "Participate in your ward";
                    } else if (t.includes('ai') || t.includes('assistant') || t.includes('ଏଆଇ') || t.includes('एआई')) {
                        strong.textContent = d.quick_ask_ai || "Ask JanSetu AI Assistant";
                        if (span) span.textContent = d.quick_ask_ai_sub || "24/7 Voice & Grievance AI Help";
                    }
                }
            });

            // 10. Leaderboard (Citizen Right Column)
            const lbH3 = document.querySelector('.card h3');
            if (lbH3 && (lbH3.textContent.includes('Leaderboard') || lbH3.textContent.includes('ଲିଡରବୋର୍ଡ଼') || lbH3.textContent.includes('लीडरबोर्ड'))) {
                lbH3.textContent = d.leaderboard_title || "Ward 12 Leaderboard";
            }
            const lbTag = document.querySelector('.card span[style*="background: #fef3c7"]');
            if (lbTag) lbTag.textContent = d.leaderboard_tag || "Top Guardians";

            const lbSelf = document.getElementById('leaderboardSelfName');
            if (lbSelf) lbSelf.textContent = `Sourav P. ${d.you_tag || "(You)"}`;

            // 11. Priority Queue & AI Triage Insights (Officer)
            const prioCardH2 = document.querySelector('.priority-card h2');
            if (prioCardH2) prioCardH2.textContent = d.card_priority_queue || "Priority Queue";
            const prioCardP = document.querySelector('.priority-card p');
            if (prioCardP) prioCardP.textContent = d.card_priority_queue_sub || "Grievances ranked by urgency and community impact.";
            const prioEyebrow = document.querySelector('.priority-card .eyebrow');
            if (prioEyebrow) prioEyebrow.textContent = d.eyebrow_needs_attention || "NEEDS ATTENTION";

            const aiCardEyebrow = document.querySelector('.ai-card .eyebrow');
            if (aiCardEyebrow) aiCardEyebrow.textContent = d.eyebrow_ai_assistant || "AI ASSISTANT";
            const aiCardH2 = document.querySelector('.ai-card h2');
            if (aiCardH2) aiCardH2.textContent = d.title_triage_insights || "Triage Insights";
            const aiReadySpan = document.querySelector('.ai-highlight span');
            if (aiReadySpan) aiReadySpan.textContent = d.ai_ready_review || "grievances ready for review";
            const aiDupSpan = document.querySelectorAll('.ai-stat span');
            if (aiDupSpan[0]) aiDupSpan[0].textContent = d.ai_duplicate_detected || "Duplicate detected";
            if (aiDupSpan[1]) aiDupSpan[1].textContent = d.ai_misrouted || "Misrouted";
            const aiInsightP = document.querySelector('.ai-insight-box p');
            if (aiInsightP) {
                aiInsightP.innerHTML = `<strong>${d.ai_pattern_detected || "Pattern detected"}</strong> ${d.ai_pattern_desc || "7 complaints about water supply were reported within the same area in the last 48 hours."}`;
            }
            const aiBtn = document.querySelector('.ai-button');
            if (aiBtn) aiBtn.textContent = d.btn_review_ai_insights || "Review AI Insights →";

            // Department Performance section
            const deptH2 = document.querySelectorAll('.metrics-card h2, .performance-card h2');
            deptH2.forEach(h => {
                if (h.textContent.includes('Performance') || h.textContent.includes('ଦକ୍ଷତା') || h.textContent.includes('प्रदर्शन')) {
                    h.textContent = d.title_dept_performance || "Department Performance";
                }
            });

            // 12. Dynamic Content Translator: Update Grievance Rows
            this.translateExistingGrievanceRows(lang);
        },

        translateExistingGrievanceRows(lang) {
            const d = this.dict[lang] || this.dict['en'];

            // Citizen recent reports rows
            const rows = document.querySelectorAll('.report-row, .grievance-item, tr[data-status]');
            rows.forEach(row => {
                const h3 = row.querySelector('h3, td:nth-child(2)');
                if (h3) {
                    const raw = h3.getAttribute('data-raw-title') || h3.textContent.trim();
                    h3.setAttribute('data-raw-title', raw);
                    h3.textContent = this.translateTitle(raw, lang);
                }

                // Status spans
                const statusSpan = row.querySelector('.status, .report-status span');
                if (statusSpan) {
                    const rawStatus = statusSpan.getAttribute('data-raw-status') || statusSpan.textContent.trim();
                    statusSpan.setAttribute('data-raw-status', rawStatus);
                    statusSpan.textContent = this.translateStatus(rawStatus, lang);
                }

                // Priority spans
                const prioSpan = row.querySelector('.priority');
                if (prioSpan) {
                    const rawPrio = prioSpan.getAttribute('data-raw-priority') || prioSpan.textContent.trim();
                    prioSpan.setAttribute('data-raw-priority', rawPrio);
                    prioSpan.textContent = this.translatePriority(rawPrio, lang);
                }

                // Review button
                const revBtn = row.querySelector('.review-button, .action-btn');
                if (revBtn) {
                    revBtn.textContent = d.btn_review || "Review";
                }
            });
        }
    };

    function textContains(str, arr) {
        return arr.some(a => str.includes(a));
    }

    // Auto-initialize on load
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('jansetu_preferred_lang') || 'en';
        setTimeout(() => {
            window.JanSetuI18n.applyLanguage(savedLang);
        }, 100);
    });

    // Global aliases for dashboard scripts
    window.changeDashboardLanguage = function(lang) {
        window.JanSetuI18n.applyLanguage(lang);
    };

    window.changeOfficerLanguage = function(lang) {
        window.JanSetuI18n.applyLanguage(lang);
    };
})();
