/**
 * JanSetu Unified Multilingual Internationalization (i18n) Engine
 * Seamless regional language switching for Citizen and Officer Dashboards
 * Full support for Regional Numeral digits, Leaderboard, Quick Actions, Stats & Live Content
 * Languages: EN, HI, OR, BN, GU, TA, TE, MR, KN
 */

(function() {
    const NUMERAL_MAPS = {
        "en": ["0","1","2","3","4","5","6","7","8","9"],
        "or": ["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"], // Odia
        "hi": ["०","१","२","३","४","५","६","७","८","९"], // Hindi
        "mr": ["०","१","२","३","४","५","६","७","८","९"], // Marathi
        "bn": ["০","১","২","৩","৪","৫","৬","৭","৮","৯"], // Bengali
        "gu": ["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"], // Gujarati
        "ta": ["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"], // Tamil
        "te": ["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"], // Telugu
        "kn": ["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"]  // Kannada
    };

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

            // Department Performance & SLA
            "title_dept_performance": "Department Performance",
            "sub_dept_performance": "Current month resolution metrics",
            "title_sla_overview": "SLA Overview",
            "sub_sla_overview": "Service-level compliance",
            "label_on_time": "On time",

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
            "xp_unit": "XP",

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

            // Department Performance & SLA
            "title_dept_performance": "ବିଭାଗୀୟ କାର୍ଯ୍ୟଦକ୍ଷତା",
            "sub_dept_performance": "ଚଳିତ ମାସର ସମାଧାନ ପରିସଂଖ୍ୟାନ",
            "title_sla_overview": "ସମୟସୀମା (SLA) ସମୀକ୍ଷା",
            "sub_sla_overview": "ସରକାରୀ ନିୟମ ପାଳନ",
            "label_on_time": "ସମୟ ମଧ୍ୟରେ",

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
            "rank_corroborator": "ସକ୍ରିୟ ସହଯୋଗୀ",
            "xp_unit": "ଏକ୍ସପି",

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
            "stat_urgent_count": "४ आवश्यक",
            "stat_resolved": "समाधान पूर्ण",
            "stat_resolution_rate": "समाधान दर",

            // Filters & Recent Reports
            "filter_all": "सभी (०८)",
            "filter_in_progress": "⏳ प्रगति पर (०३)",
            "filter_resolved": "✅ समाधान पूर्ण (०४)",
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

            // Department Performance & SLA
            "title_dept_performance": "विभागीय कार्यप्रदर्शन",
            "sub_dept_performance": "चालू माह के समाधान आंकड़े",
            "title_sla_overview": "SLA समयसीमा समीक्षा",
            "sub_sla_overview": "समयबद्ध सेवा अनुपालन",
            "label_on_time": "समय पर पूर्ण",

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
            "rank_corroborator": "सक्रिय सहयोगी",
            "xp_unit": "XP",

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
        }
    };

    window.JanSetuI18n = {
        dict: I18N_DICTIONARIES,
        numeralMaps: NUMERAL_MAPS,

        formatDigits(str, lang = null) {
            if (str === null || str === undefined) return "";
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const s = String(str);
            const map = this.numeralMaps[current];
            if (!map || current === 'en') return s;
            return s.replace(/[0-9]/g, d => map[parseInt(d, 10)] || d);
        },
        
        get(key, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const langDict = this.dict[current] || this.dict['en'];
            return langDict[key] || this.dict['en'][key] || key;
        },

        translateTitle(rawTitle, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            if (current === 'en') return rawTitle;

            const t = (rawTitle || "").toLowerCase();
            if (t.includes("waste") || t.includes("garbage") || t.includes("overflow") || t.includes("ଆବର୍ଜନା") || t.includes("कचरा")) return this.get("title_waste_overflow", current);
            if (t.includes("road") || t.includes("crater") || t.includes("damage") || t.includes("unit 4") || t.includes("ରାସ୍ତା") || t.includes("सड़क")) return this.get("title_road_damage", current);
            if (t.includes("street light") || t.includes("light") || t.includes("dark") || t.includes("cross") || t.includes("ଲାଇଟ୍") || t.includes("लाइट")) return this.get("title_street_light", current);
            if (t.includes("pipe") || t.includes("water") || t.includes("leak") || t.includes("flood") || t.includes("ପାଣି") || t.includes("पानी")) return this.get("title_water_leak", current);
            return rawTitle;
        },

        translateCategory(cat, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const c = (cat || "").toLowerCase();
            if (c.includes("road") || c.includes("infra") || c.includes("ରାସ୍ତା") || c.includes("सड़क")) return this.get("cat_roads", current);
            if (c.includes("light") || c.includes("ଲାଇଟ୍") || c.includes("लाइट")) return this.get("cat_lighting", current);
            if (c.includes("waste") || c.includes("garbage") || c.includes("ବର୍ଜ୍ୟ") || c.includes("कचरा")) return this.get("cat_waste", current);
            if (c.includes("water") || c.includes("ଜଳ") || c.includes("जल")) return this.get("cat_water", current);
            if (c.includes("drain") || c.includes("ଡ୍ରେନେଜ୍") || c.includes("निकासी")) return this.get("cat_drainage", current);
            return cat;
        },

        translatePriority(prio, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const p = (prio || "").toLowerCase();
            if (p.includes("crit") || p.includes("ଜରୁରୀ") || p.includes("गंभीर")) return this.get("prio_critical", current);
            if (p.includes("high") || p.includes("ଉଚ୍ଚ") || p.includes("उच्च")) return this.get("prio_high", current);
            if (p.includes("med") || p.includes("ମଧ୍ୟମ") || p.includes("मध्यम")) return this.get("prio_medium", current);
            if (p.includes("low") || p.includes("ନିମ୍ନ") || p.includes("सामान्य")) return this.get("prio_low", current);
            return prio;
        },

        translateStatus(status, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            const s = (status || "").toLowerCase();
            if (s.includes("progress") || s.includes("ଚାଲୁଅଛି") || s.includes("प्रगति")) return this.get("status_in_progress", current);
            if (s.includes("resolve") || s.includes("ସମାଧାନ") || s.includes("समाधान")) return this.get("status_resolved", current);
            if (s.includes("crit") || s.includes("ବିପଦ") || s.includes("गंभीर")) return this.get("status_critical", current);
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
            const searchInputs = document.querySelectorAll('#globalSearch, #searchInput, .global-search input, .search-bar input');
            searchInputs.forEach(input => {
                const isOfficer = window.location.pathname.includes('officer') || document.body.classList.contains('officer-body');
                input.placeholder = isOfficer ? (d.search_officer_placeholder || "Search grievance ID, location...") : (d.search_placeholder || "Search your reports...");
            });

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
            const currentDateEl = document.getElementById('currentDate');
            if (currentDateEl && currentDateEl.textContent) {
                currentDateEl.textContent = this.formatDigits(currentDateEl.textContent, lang);
            }

            const pdfExportBtn = document.querySelector('.pdf-export-btn');
            if (pdfExportBtn) pdfExportBtn.innerHTML = `<span>📄</span> ${d.btn_export_report ? d.btn_export_report.replace('📄 ', '') : 'Download Ward Report (PDF)'}`;

            // 5. Sidebar Navigation Links & Titles
            const navTitles = document.querySelectorAll('.nav-title, .nav-heading');
            navTitles.forEach(nt => {
                const text = nt.textContent.trim().toUpperCase();
                if (text.includes('MAIN') || text.includes('ମୁଖ୍ୟ') || text.includes('मुख्य')) nt.textContent = d.nav_section_main || "MAIN";
                else if (text.includes('OPERATIONS') || text.includes('କାର୍ଯ୍ୟ') || text.includes('संचालन')) nt.textContent = d.nav_section_operations || "OPERATIONS";
                else if (text.includes('COMMUNITY') || text.includes('ସମୁଦାୟ') || text.includes('समुदाय')) nt.textContent = d.nav_section_community || "COMMUNITY";
                else if (text.includes('ACCOUNT') || text.includes('ଖାତା') || text.includes('खाता')) nt.textContent = d.nav_section_account || "ACCOUNT";
                else if (text.includes('MANAGEMENT') || text.includes('ପରିଚାଳନା') || text.includes('प्रबंधन')) nt.textContent = d.nav_section_management || "MANAGEMENT";
                else if (text.includes('SYSTEM') || text.includes('ସିଷ୍ଟମ୍') || text.includes('सिस्टम')) nt.textContent = d.nav_section_system || "SYSTEM";
            });

            const navLinks = document.querySelectorAll('.nav-link, .sidebar-nav a');
            navLinks.forEach(link => {
                const text = link.textContent.trim().toLowerCase();
                const icon = link.querySelector('.nav-icon')?.textContent || '';
                const countBadge = link.querySelector('.notification-count, .nav-count');
                let countHTML = '';
                if (countBadge) {
                    const rawCount = countBadge.getAttribute('data-raw-count') || countBadge.textContent.trim();
                    countBadge.setAttribute('data-raw-count', rawCount);
                    countHTML = `<span class="${countBadge.className}">${this.formatDigits(rawCount, lang)}</span>`;
                }

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
                } else if (text.includes('grievances') || text.includes('ସମସ୍ତ ଅଭିଯୋଗ') || text.includes('कुल शिकायतें')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_grievances || "Grievances"} ${countHTML}`;
                } else if (text.includes('priority queue') || text.includes('priority') || text.includes('ଜରୁରୀ ଅଭିଯୋଗ') || text.includes('प्राथमिकता सूची')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_priority_queue || "Priority Queue"} ${countHTML}`;
                } else if (text.includes('assignment') || text.includes('ବଣ୍ଟନ') || text.includes('आवंटन')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_assignments || "Assignments"} ${countHTML}`;
                } else if (text.includes('evidence') || text.includes('ପ୍ରମାଣ') || text.includes('साक्ष्य')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_evidence_review || "Evidence Review"} ${countHTML}`;
                } else if (text.includes('analytics') || text.includes('ତଥ୍ୟ') || text.includes('विश्लेषण')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_analytics || "Analytics"}`;
                } else if (text.includes('notification') || text.includes('ସୂଚନା') || text.includes('सूचनाएं')) {
                    link.innerHTML = `<span class="nav-icon">${icon}</span> ${d.nav_notifications || "Notifications"} ${countHTML}`;
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
            const helpCardSpan = document.querySelector('.help-card span, .help-card p');
            if (helpCardSpan) helpCardSpan.textContent = d.nav_need_help_sub || "Learn how JanSetu works.";

            const officerCardRole = document.querySelector('.officer-sidebar-card span');
            if (officerCardRole) officerCardRole.textContent = d.sidebar_officer_role || "Municipal Administration";

            // 7. Stat Cards & Numbers (Citizen & Officer)
            const statNumbers = document.querySelectorAll('.stat-card h2, .stat-number, .stat-card strong.stat-number');
            statNumbers.forEach(sn => {
                const raw = sn.getAttribute('data-raw-val') || sn.textContent.trim();
                sn.setAttribute('data-raw-val', raw);
                sn.textContent = this.formatDigits(raw, lang);
            });

            const citizenStatCards = document.querySelectorAll('.stats-grid .stat-card');
            citizenStatCards.forEach(sc => {
                const p = sc.querySelector('p');
                const desc = sc.querySelector('.stat-description');
                const trend = sc.querySelector('.trend, .stat-trend');
                const titleSpan = sc.querySelector('.stat-title');
                const subSpan = sc.querySelector('.stat-subtitle');

                if (trend) {
                    const rawTrend = trend.getAttribute('data-raw-trend') || trend.textContent.trim();
                    trend.setAttribute('data-raw-trend', rawTrend);
                    if (rawTrend.toLowerCase().includes('active') || rawTrend.includes('ସକ୍ରିୟ') || rawTrend.includes('सक्रिय')) {
                        trend.textContent = d.trend_active || "Active";
                    } else if (rawTrend.toLowerCase().includes('action') || rawTrend.includes('ପଦକ୍ଷେପ') || rawTrend.includes('कार्रवाई')) {
                        trend.textContent = d.stat_action_needed || "Action needed";
                    } else if (rawTrend.toLowerCase().includes('urgent') || rawTrend.includes('ଜରୁରୀ') || rawTrend.includes('आवश्यक')) {
                        trend.textContent = d.stat_urgent_count || "4 urgent";
                    } else {
                        trend.textContent = this.formatDigits(rawTrend, lang);
                    }
                }

                if (p) {
                    const text = p.textContent.toLowerCase();
                    if (text.includes('submitted') || text.includes('ଦାଖଲ') || text.includes('दर्ज')) {
                        p.textContent = d.stat_reports_submitted || "Reports Submitted";
                        if (desc) desc.textContent = d.stat_reports_submitted_sub || "Click to view all reports ↓";
                    } else if (text.includes('progress') || text.includes('ଚାଲୁଅଛି') || text.includes('प्रगति')) {
                        p.textContent = d.stat_in_progress || "In Progress";
                        if (desc) desc.textContent = d.stat_in_progress_sub || "Click to filter active issues ↓";
                    } else if (text.includes('resolved') || text.includes('ସମାଧାନ') || text.includes('समाधान')) {
                        p.textContent = d.stat_issues_resolved || "Issues Resolved";
                        if (desc) desc.textContent = d.stat_issues_resolved_sub || "Click to filter resolved issues ↓";
                    } else if (text.includes('impact') || text.includes('ପ୍ରଭାବ') || text.includes('प्रभाव')) {
                        p.textContent = d.stat_community_impact || "Community Impact";
                        if (desc) desc.textContent = d.stat_community_impact_sub || "Click to view impact breakdown →";
                    }
                }

                if (titleSpan) {
                    const text = titleSpan.textContent.toLowerCase();
                    if (text.includes('total grievances') || text.includes('ମୋଟ') || text.includes('कुल')) {
                        titleSpan.textContent = d.stat_total_grievances || "Total Grievances";
                        if (subSpan) subSpan.textContent = d.stat_total_grievances_sub || "This month";
                    } else if (text.includes('pending') || text.includes('ଯାଞ୍ଚ') || text.includes('लंबित')) {
                        titleSpan.textContent = d.stat_pending_review || "Pending Review";
                        if (subSpan) subSpan.textContent = d.stat_pending_review_sub || "Awaiting officer action";
                    } else if (text.includes('priority') || text.includes('ଜରୁରୀ') || text.includes('प्राथमिकता')) {
                        titleSpan.textContent = d.stat_high_priority || "High Priority";
                        if (subSpan) subSpan.textContent = d.stat_high_priority_sub || "Require immediate attention";
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
                const h2 = qc.querySelector('h2, .card-header h2');
                if (h2) h2.textContent = d.card_quick_actions || "Quick Actions";
                const p = qc.querySelector('p, .card-header p');
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
                    } else if (t.includes('map') || t.includes('ମ୍ୟାପ୍') || t.includes('मानचित्र') || t.includes('નકશો')) {
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
            const lbTag = document.querySelector('.card span[style*="background: #fef3c7"], .card span[style*="color: #b45309"]');
            if (lbTag) lbTag.textContent = d.leaderboard_tag || "Top Guardians";

            const lbSelf = document.getElementById('leaderboardSelfName');
            if (lbSelf) lbSelf.textContent = `Sourav P. ${d.you_tag || "(You)"}`;

            const lbSelfScore = document.getElementById('leaderboardSelfScore');
            if (lbSelfScore) lbSelfScore.textContent = `${this.formatDigits("340", lang)} ${d.xp_unit || "XP"}`;

            const lbRanks = document.querySelectorAll('.card [style*="border-radius: 8px"]');
            lbRanks.forEach(r => {
                const subtitle = r.querySelector('span[style*="display: block"]');
                const scoreStrong = r.querySelector('strong:last-child');

                if (subtitle) {
                    const st = subtitle.textContent.toLowerCase();
                    if (st.includes('guardian') || st.includes('ଗାର୍ଡିଆନ୍') || st.includes('संरक्षक')) {
                        subtitle.textContent = d.rank_guardian_l3 || "Ward Guardian • Lvl 3";
                    } else if (st.includes('champion') || st.includes('ଚାମ୍ପିଅନ୍') || st.includes('चैंपियन')) {
                        subtitle.textContent = d.rank_champion_l3 || "Civic Champion • Lvl 3";
                    } else if (st.includes('corroborator') || st.includes('ସହଯୋଗୀ') || st.includes('सहयोगी')) {
                        subtitle.textContent = d.rank_corroborator || "Active Corroborator";
                    }
                }

                if (scoreStrong && scoreStrong.textContent.includes('XP')) {
                    const digits = scoreStrong.textContent.replace(/[^0-9]/g, '');
                    if (digits) {
                        scoreStrong.textContent = `${this.formatDigits(digits, lang)} ${d.xp_unit || "XP"}`;
                    }
                }
            });

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
            
            const aiReadyStrong = document.querySelector('.ai-highlight strong');
            if (aiReadyStrong) aiReadyStrong.textContent = this.formatDigits(aiReadyStrong.textContent.trim(), lang);
            const aiReadySpan = document.querySelector('.ai-highlight span');
            if (aiReadySpan) aiReadySpan.textContent = d.ai_ready_review || "grievances ready for review";

            const aiStats = document.querySelectorAll('.ai-stat > div');
            if (aiStats.length >= 2) {
                const s0 = aiStats[0].querySelector('span');
                const st0 = aiStats[0].querySelector('strong');
                if (s0) s0.textContent = d.ai_duplicate_detected || "Duplicate detected";
                if (st0) st0.textContent = this.formatDigits(st0.textContent.trim(), lang);

                const s1 = aiStats[1].querySelector('span');
                const st1 = aiStats[1].querySelector('strong');
                if (s1) s1.textContent = d.ai_misrouted || "Misrouted";
                if (st1) st1.textContent = this.formatDigits(st1.textContent.trim(), lang);
            }

            const aiInsightP = document.querySelector('.ai-insight-box p');
            if (aiInsightP) {
                aiInsightP.innerHTML = `<strong>${d.ai_pattern_detected || "Pattern detected"}</strong> ${d.ai_pattern_desc || "7 complaints about water supply were reported within the same area in the last 48 hours."}`;
            }
            const aiBtn = document.querySelector('.ai-button');
            if (aiBtn) aiBtn.textContent = d.btn_review_ai_insights || "Review AI Insights →";

            // Department Performance & SLA overview section (Officer)
            const deptCardH2 = document.querySelector('.metrics-card h2, .performance-card h2');
            if (deptCardH2) deptCardH2.textContent = d.title_dept_performance || "Department Performance";
            const deptCardP = document.querySelector('.metrics-card p, .performance-card p');
            if (deptCardP) deptCardP.textContent = d.sub_dept_performance || "Current month resolution metrics";

            const slaCardH2 = document.querySelector('.sla-card h2, .sla-section h2');
            if (slaCardH2) slaCardH2.textContent = d.title_sla_overview || "SLA Overview";
            const slaCardP = document.querySelector('.sla-card p, .sla-section p');
            if (slaCardP) slaCardP.textContent = d.sub_sla_overview || "Service-level compliance";

            const gaugeLabel = document.querySelector('.gauge-label span, .sla-card .gauge-label');
            if (gaugeLabel) gaugeLabel.textContent = d.label_on_time || "On time";

            const viewAllButtons = document.querySelectorAll('.text-button, .view-all-btn');
            viewAllButtons.forEach(v => {
                v.textContent = d.btn_view_all || "View all →";
            });

            // 12. Dynamic Grievance Rows (Titles, Statuses, Upvotes, Review buttons)
            this.translateExistingGrievanceRows(lang);
        },

        translateExistingGrievanceRows(lang) {
            const d = this.dict[lang] || this.dict['en'];

            // Citizen recent reports rows & Officer Priority list
            const rows = document.querySelectorAll('.report-row, .grievance-item, tr[data-status]');
            rows.forEach(row => {
                const h3 = row.querySelector('h3, td:nth-child(2)');
                if (h3) {
                    const raw = h3.getAttribute('data-raw-title') || h3.textContent.trim();
                    h3.setAttribute('data-raw-title', raw);
                    h3.textContent = this.translateTitle(raw, lang);
                }

                // Category in description
                const descP = row.querySelector('.grievance-main p, .report-details p');
                if (descP && descP.textContent.includes('•')) {
                    const parts = descP.textContent.split('•');
                    if (parts.length >= 2) {
                        const rawCat = parts[1].trim();
                        parts[1] = ` ${this.translateCategory(rawCat, lang)} `;
                        descP.textContent = parts.join('•');
                    }
                }

                // Upvotes
                const upvoteBtn = row.querySelector('.support-vote-btn');
                if (upvoteBtn) {
                    const rawVotes = upvoteBtn.getAttribute('data-raw-votes') || upvoteBtn.textContent.replace(/[^0-9]/g, '');
                    upvoteBtn.setAttribute('data-raw-votes', rawVotes);
                    upvoteBtn.textContent = `▲ ${this.formatDigits(rawVotes, lang)}`;
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

    // Auto-initialize on load
    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem('jansetu_preferred_lang') || 'en';
        setTimeout(() => {
            window.JanSetuI18n.applyLanguage(savedLang);
        }, 150);
    });

    // Global aliases for dashboard scripts
    window.changeDashboardLanguage = function(lang) {
        window.JanSetuI18n.applyLanguage(lang);
    };

    window.changeOfficerLanguage = function(lang) {
        window.JanSetuI18n.applyLanguage(lang);
    };
})();
