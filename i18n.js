/**
 * JanSetu Unified Multilingual Internationalization (i18n) Engine
 * Seamless regional language switching for Citizen and Officer Dashboards
 * Full localization for Karma XP, Civic Maps, Ward Bulletins, Budgeting,
 * AI Chatbot, Community Impact, Brand, User Profile, Location Pins & Numeral Digits.
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
            // Brand & User Profile
            "brand_title": "JanSetu",
            "brand_subtitle": "Civic Intelligence",
            "user_citizen_role": "Citizen",
            "user_ward_resident": "Ward 12 Resident",
            "officer_role_label": "Officer Admin",
            "officer_ward_label": "Ward 12",

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

            // Welcome Row & Action Buttons
            "welcome_citizen_sub": "Here's what's happening with your community.",
            "welcome_officer_sub": "Monitor, triage and resolve civic grievances assigned to your department.",
            "btn_report_issue": "＋ Report an Issue",
            "btn_export_report": "📄 Download Ward Report (PDF)",

            // Official Ward Bulletin
            "official_bulletin_tag": "Official Ward Bulletin",
            "bulletin_ward_tag": "Ward 12 • Saheed Nagar",
            "bulletin_headline": "Scheduled Water Supply Maintenance (Sunday 8 AM - 2 PM)",
            "bulletin_message": "Municipal PHED pipeline interconnection work will take place in Ward 12 & Saheed Nagar on Sunday. Citizens are requested to store adequate water.",
            "btn_daily_briefing": "🔊 Daily Civic Briefing",
            "btn_read_notice": "📢 Read Notice",
            "btn_stop_audio": "⏹ Stop",

            // Civic Karma Bar & Badges
            "label_civic_karma": "Civic Karma",
            "karma_points_suffix": "Points",
            "karma_rank_level3": "Rank: Ward Guardian (Level 3)",
            "karma_desc": "Earn XP by reporting verified issues, voting on ward projects, and confirming repairs.",
            "badge_champion": "🌟 Civic Champion",
            "badge_corroborator": "🔍 Verified Corroborator",
            "btn_view_all_badges": "View All Badges →",
            "karma_level_progress": "Level 3 Progress (340 / 500 XP)",
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
            "btn_track": "Track →",

            // Community Impact Card
            "impact_title": "Community Impact",
            "impact_subtitle": "Your contribution matters",
            "impact_this_month": "This month",
            "impact_citizens_benefited": "citizens benefited",
            "impact_your_contrib": "Your civic contribution",
            "impact_message_full": "Together, citizens in your area have helped improve 23 local issues this month.",

            // Civic Map
            "map_title": "Civic Map",
            "map_subtitle": "Live geospatial complaints in your jurisdiction",
            "btn_reset_view": "Reset View ⌖",

            // Participatory Budgeting Banner & Section
            "budget_eyebrow": "PARTICIPATORY BUDGETING",
            "budget_banner_title": "Help decide what gets built in your ward.",
            "budget_banner_sub": "Review community proposals and vote for projects that can make the biggest local impact.",
            "btn_explore_proposals": "Explore proposals →",
            "budget_title": "Ward 12 Participatory Budgeting",
            "budget_subtitle": "Vote on community development projects funded by municipal council.",
            "budget_section_sub": "Vote on municipal fund allocations for local infrastructure projects in Ward 12.",
            "budget_civic_participation": "CIVIC PARTICIPATION",
            "btn_cast_vote": "🗳️ Cast Citizen Vote",
            "btn_voted_success": "✓ Vote Cast Successfully",

            // AI Chatbot Widget
            "chatbot_trigger_title": "Ask JanSetu AI",
            "chatbot_trigger_sub": "⚡ 24/7 Civic Assistant",
            "chatbot_header_title": "JanSetu AI Civic Assistant",
            "chatbot_header_sub": "● Online • Auto-Triage & Ward 12 Guide",
            "chatbot_input_placeholder": "Ask AI or describe civic problem...",
            "chip_pothole": "🚧 Report Pothole",
            "chip_broken_light": "💡 Broken Light",
            "chip_garbage": "🗑️ Garbage Dump",
            "chip_track": "🔍 Track #JS-20481",
            "chip_officials": "🏛️ Ward 12 Officials",
            "chip_sla": "📜 24-hr SLA",
            "chip_budget": "🗳️ Budget Voting",

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

            // Locations
            "loc_saheed_nagar": "Saheed Nagar",
            "loc_unit_4_market": "Unit 4 Market",
            "loc_unit_4_gate": "Near Unit 4 Main Gate",
            "loc_community_park": "Opposite Community Park",
            "loc_transformer": "Near Electrical Transformer",
            "loc_reservoir": "Near Municipal Water Reservoir",
            "loc_master_canteen": "Master Canteen",
            "loc_ward_12": "Ward 12",

            // Sample Grievance Titles
            "title_waste_overflow": "Overflowing waste collection point",
            "title_road_damage": "Major road damage near Unit 4",
            "title_street_light": "Non-functional street lights on 3rd Cross",
            "title_water_leak": "Water pipe leakage flooding footpath"
        },
        "or": {
            // Brand & User Profile
            "brand_title": "ଜନସେତୁ",
            "brand_subtitle": "ପୌର ସେବା ବ୍ୟବସ୍ଥା",
            "user_citizen_role": "ନାଗରିକ",
            "user_ward_resident": "ୱାର୍ଡ଼ ୧୨ ବାସିନ୍ଦା",
            "officer_role_label": "ପୌର ଅଧିକାରୀ",
            "officer_ward_label": "ୱାର୍ଡ଼ ୧୨",

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

            // Welcome Row & Action Buttons
            "welcome_citizen_sub": "ଏଠାରେ ଆପଣଙ୍କ ପୌରାଞ୍ଚଳ ଓ ୱାର୍ଡ଼ର ସଦ୍ୟତମ ତଥ୍ୟ ଦେଖନ୍ତୁ।",
            "welcome_officer_sub": "ଅଭିଯୋଗ ସମାଧାନ, ଠିକାଦାର ନିଯୁକ୍ତି ଓ ସରକାରୀ ସମୟସୀମା ତଦାରଖ।",
            "btn_report_issue": "＋ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ",
            "btn_export_report": "📄 ୱାର୍ଡ଼ ରିପୋର୍ଟ ଡାଉନଲୋଡ୍ (PDF)",

            // Official Ward Bulletin
            "official_bulletin_tag": "ସରକାରୀ ୱାର୍ଡ଼ ବିଜ୍ଞପ୍ତି",
            "bulletin_ward_tag": "ୱାର୍ଡ଼ ୧୨ • ସହିଦ ନଗର",
            "bulletin_headline": "ଜଳ ଯୋଗାଣ ରକ୍ଷଣାବେକ୍ଷଣ ସୂଚନା (ରବିବାର ସକାଳ ୮ - ଅପରାହ୍ନ ୨)",
            "bulletin_message": "ମ୍ୟୁନିସିପାଲ୍ PHED ପାଇପଲାଇନ୍ ସଂଯୋଗ କାର୍ଯ୍ୟ ରବିବାର ଦିନ ୱାର୍ଡ଼ ୧୨ ଓ ସହିଦ ନଗରରେ ଅନୁଷ୍ଠିତ ହେବ। ନାଗରିକମାନଙ୍କୁ ଆବଶ୍ୟକ ଜଳ ସଂଗ୍ରହ କରି ରଖିବାକୁ ଅନୁରୋଧ।",
            "btn_daily_briefing": "🔊 ଦୈନିକ ପୌର ବାର୍ତ୍ତା",
            "btn_read_notice": "📢 ନୋଟିସ୍ ଶୁଣନ୍ତୁ",
            "btn_stop_audio": "⏹ ବନ୍ଦ କରନ୍ତୁ",

            // Civic Karma Bar & Badges
            "label_civic_karma": "ପୌର କର୍ମ",
            "karma_points_suffix": "ପଏଣ୍ଟ",
            "karma_rank_level3": "ପଦବୀ: ୱାର୍ଡ଼ ଗାର୍ଡିଆନ୍ (ଲେଭଲ ୩)",
            "karma_desc": "ଅଭିଯୋଗ ଦାଖଲ, ବଜେଟ୍ ଭୋଟିଂ ଓ ମରାମତି ଯାଞ୍ଚ କରି ଏକ୍ସପି ଅର୍ଜନ କରନ୍ତୁ।",
            "badge_champion": "🌟 ସିଭିକ୍ ଚାମ୍ପିଅନ୍",
            "badge_corroborator": "🔍 ସତ୍ୟାପିତ ସହଯୋଗୀ",
            "btn_view_all_badges": "ସବୁ ବ୍ୟାଜ୍ ଦେଖନ୍ତୁ →",
            "karma_level_progress": "ଲେଭଲ ୩ ପ୍ରଗତି (୩୪୦ / ୫୦୦ ଏକ୍ସପି)",
            "karma_xp_needed": "ଲେଭଲ ୪ ପାଇଁ ୧୬୦ ଏକ୍ସପି ବାକି • ମ୍ୟୁନିସିପାଲ୍ ଭାଙ୍ଗାର୍ଡ଼ ⚡",

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
            "btn_track": "ଟ୍ରାକ୍ କରନ୍ତୁ →",

            // Community Impact Card
            "impact_title": "ସାମୂହିକ ପ୍ରଭାବ",
            "impact_subtitle": "ଆପଣଙ୍କ ଅବଦାନ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ",
            "impact_this_month": "ଏହି ମାସରେ",
            "impact_citizens_benefited": "ଜଣ ନାଗରିକ ଉପକୃତ",
            "impact_your_contrib": "ଆପଣଙ୍କ ପୌର ଅବଦାନ",
            "impact_message_full": "ଏହି ମାସରେ ଆପଣଙ୍କ ଅଞ୍ଚଳର ନାଗରିକମାନେ ଏକାଠି ହୋଇ ୨୩ଟି ସ୍ଥାନୀୟ ସମସ୍ୟାର ସମାଧାନ କରିଛନ୍ତି।",

            // Civic Map
            "map_title": "ପୌର ମ୍ୟାପ୍",
            "map_subtitle": "ୱାର୍ଡ଼ ୧୨ ଅଞ୍ଚଳରେ ଲାଇଭ୍ ଭୌଗୋଳିକ ଅଭିଯୋଗ",
            "btn_reset_view": "ମ୍ୟାପ୍ ରିସେଟ୍ ⌖",

            // Participatory Budgeting Banner & Section
            "budget_eyebrow": "ନାଗରିକ ବଜେଟ୍ ଅଂଶଗ୍ରହଣ",
            "budget_banner_title": "ଆପଣଙ୍କ ୱାର୍ଡ଼ରେ କ’ଣ ନିର୍ମାଣ ହେବ ତାହା ସ୍ଥିର କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।",
            "budget_banner_sub": "ସାମୂହିକ ଉନ୍ନୟନ ପ୍ରସ୍ତାବଗୁଡ଼ିକର ସମୀକ୍ଷା କରନ୍ତୁ ଏବଂ ସର୍ବାଧିକ ପ୍ରଭାବଶାଳୀ ପ୍ରକଳ୍ପ ପାଇଁ ଭୋଟ୍ ଦିଅନ୍ତୁ।",
            "btn_explore_proposals": "ପ୍ରସ୍ତାବଗୁଡ଼ିକ ଦେଖନ୍ତୁ →",
            "budget_title": "ୱାର୍ଡ଼ ୧୨ ନାଗରିକ ବଜେଟ୍ ଭୋଟିଂ",
            "budget_subtitle": "ପୌର ପାଣ୍ଠି ଦ୍ୱାରା ହେବାକୁ ଥିବା ଉନ୍ନୟନ ପ୍ରକଳ୍ପରେ ଆପଣଙ୍କ ଭୋଟ୍ ଦିଅନ୍ତୁ।",
            "budget_section_sub": "ୱାର୍ଡ଼ ୧୨ ରେ ସ୍ଥାନୀୟ ଭିତ୍ତିଭୂମି ପ୍ରକଳ୍ପ ପାଇଁ ପୌର ପାଣ୍ଠି ଆବଣ୍ଟନ ଉପରେ ଭୋଟ୍ ଦିଅନ୍ତୁ।",
            "budget_civic_participation": "ନାଗରିକ ଅଂଶଗ୍ରହଣ",
            "btn_cast_vote": "🗳️ ନାଗରିକ ଭୋଟ୍ ଦିଅନ୍ତୁ",
            "btn_voted_success": "✓ ଭୋଟ୍ ସଫଳତାର ସହ ଦିଆଗଲା",

            // AI Chatbot Widget
            "chatbot_trigger_title": "ଜନସେତୁ ଏଆଇ ସହାୟକ",
            "chatbot_trigger_sub": "⚡ ୨୪/୭ ପୌର ସହାୟକ",
            "chatbot_header_title": "ଜନସେତୁ ଏଆଇ ପୌର ସହାୟକ",
            "chatbot_header_sub": "● ଅନଲାଇନ୍ • ସ୍ୱୟଂକ୍ରିୟ ଯାଞ୍ଚ ଓ ୱାର୍ଡ଼ ୧୨ ଗାଇଡ୍",
            "chatbot_input_placeholder": "ଏଆଇ କୁ ପଚାରନ୍ତୁ ବା ଅଭିଯୋଗ ଲେଖନ୍ତୁ...",
            "chip_pothole": "🚧 ରାସ୍ତା ଖାଲ ଅଭିଯୋଗ",
            "chip_broken_light": "💡 ଖରାପ ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍",
            "chip_garbage": "🗑️ ଅଳିଆ ଆବର୍ଜନା",
            "chip_track": "🔍 ଟିକେଟ୍ ଟ୍ରାକ୍ #JS-20481",
            "chip_officials": "🏛️ ୱାର୍ଡ଼ ୧୨ ଅଧିକାରୀ",
            "chip_sla": "📜 ୨୪-ଘଣ୍ଟା ସମୟସୀମା",
            "chip_budget": "🗳️ ବଜେଟ୍ ଭୋଟିଂ",

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

            // Locations
            "loc_saheed_nagar": "ସହିଦ ନଗର",
            "loc_unit_4_market": "ୟୁନିଟ୍ ୪ ମାର୍କେଟ୍",
            "loc_unit_4_gate": "ୟୁନିଟ୍ ୪ ମୁଖ୍ୟ ଫାଟକ ନିକଟ",
            "loc_community_park": "କମ୍ୟୁନିଟି ପାର୍କ ସମ୍ମୁଖ",
            "loc_transformer": "ବିଦ୍ୟୁତ ଟ୍ରାନ୍ସଫର୍ମର ନିକଟ",
            "loc_reservoir": "ପୌର ଜଳାଶୟ ନିକଟ",
            "loc_master_canteen": "ମାଷ୍ଟର କ୍ୟାଣ୍ଟିନ୍",
            "loc_ward_12": "ୱାର୍ଡ଼ ୧୨",

            // Sample Grievance Titles
            "title_waste_overflow": "ଆବର୍ଜନା ସଂଗ୍ରହ କେନ୍ଦ୍ରରୁ ଅଳିଆ ନିଷ୍କାସନ",
            "title_road_damage": "ୟୁନିଟ୍ ୪ ନିକଟରେ ମୁଖ୍ୟ ରାସ୍ତା ନଷ୍ଟ",
            "title_street_light": "୩ୟ କ୍ରସରେ ଷ୍ଟ୍ରିଟ୍ ଲାଇଟ୍ ଖରାପ",
            "title_water_leak": "ପାଇପ୍ ଲିକେଜ୍ ଯୋଗୁଁ ଫୁଟପାଥରେ ପାଣି"
        },
        "hi": {
            // Brand & User Profile
            "brand_title": "जनसेतु",
            "brand_subtitle": "नागरिक सेवा प्रणाली",
            "user_citizen_role": "नागरिक",
            "user_ward_resident": "वार्ड 12 निवासी",
            "officer_role_label": "अधिकारी एडमिन",
            "officer_ward_label": "वार्ड 12",

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

            // Welcome Row & Action Buttons
            "welcome_citizen_sub": "यहाँ आपके क्षेत्र और वार्ड से जुड़ी ताज़ा जानकारी है।",
            "welcome_officer_sub": "शिकायत निवारण, ठेकेदार कार्य आवंटन व 24-घंटे समयसीमा निगरानी।",
            "btn_report_issue": "＋ शिकायत दर्ज करें",
            "btn_export_report": "📄 वार्ड रिपोर्ट डाउनलोड करें (PDF)",

            // Official Ward Bulletin
            "official_bulletin_tag": "आधिकारिक वार्ड बुलेटिन",
            "bulletin_ward_tag": "वार्ड 12 • शहीद नगर",
            "bulletin_headline": "नियमित जल आपूर्ति रखरखाव सूचना (रविवार सुबह 8 - दोपहर 2)",
            "bulletin_message": "नगर निगम PHED पाइपलाइन इंटरकनेक्शन कार्य रविवार को वार्ड 12 और शहीद नगर में होगा। नागरिकों से अनुरोध है कि पर्याप्त पानी का भंडारण करें।",
            "btn_daily_briefing": "🔊 दैनिक नागरिक ब्रीफिंग",
            "btn_read_notice": "📢 नोटिस सुनें",
            "btn_stop_audio": "⏹ रोकें",

            // Civic Karma Bar & Badges
            "label_civic_karma": "नागरिक कर्म",
            "karma_points_suffix": "अंक",
            "karma_rank_level3": "पद: वार्ड संरक्षक (लेवल 3)",
            "karma_desc": "सत्यापित शिकायत दर्ज करने, बजट वोट और मरम्मत सत्यापन से XP कमाएं।",
            "badge_champion": "🌟 नागरिक चैंपियन",
            "badge_corroborator": "🔍 सत्यापित सहयोगी",
            "btn_view_all_badges": "सभी बैज देखें →",
            "karma_level_progress": "लेवल 3 प्रगति (३४० / ५०० XP)",
            "karma_xp_needed": "लेवल 4 के लिए 160 XP शेष • म्यूनिसिपल वैनगार्ड ⚡",

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
            "filter_all": "सभी (०୮)",
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
            "btn_track": "ट्रैक करें →",

            // Community Impact Card
            "impact_title": "सामुदायिक प्रभाव",
            "impact_subtitle": "आपका योगदान महत्वपूर्ण है",
            "impact_this_month": "इस महीने",
            "impact_citizens_benefited": "नागरिक लाभान्वित",
            "impact_your_contrib": "आपका नागरिक योगदान",
            "impact_message_full": "इस महीने आपके क्षेत्र के नागरिकों ने मिलकर 23 स्थानीय समस्याओं को हल करने में मदद की है।",

            // Civic Map
            "map_title": "नागरिक मानचित्र",
            "map_subtitle": "वार्ड 12 क्षेत्र में लाइव भौगोलिक शिकायतें",
            "btn_reset_view": "रीसेट मैप ⌖",

            // Participatory Budgeting Banner & Section
            "budget_eyebrow": "नागरिक बजट भागीदारी",
            "budget_banner_title": "अपने वार्ड में क्या निर्माण होना चाहिए, यह तय करने में मदद करें।",
            "budget_banner_sub": "सामुदायिक विकास प्रस्तावों की समीक्षा करें और सबसे प्रभावशाली परियोजनाओं के लिए वोट दें।",
            "btn_explore_proposals": "प्रस्ताव देखें →",
            "budget_title": "वार्ड 12 नागरिक बजट वोटिंग",
            "budget_subtitle": "नगर निगम द्वारा वित्तपोषित विकास परियोजनाओं पर अपना वोट दें।",
            "budget_section_sub": "वार्ड 12 में स्थानीय बुनियादी ढांचा परियोजनाओं के लिए नगर निगम निधि आवंटन पर मतदान करें।",
            "budget_civic_participation": "नागरिक सहभागिता",
            "btn_cast_vote": "🗳️ नागरिक वोट दें",
            "btn_voted_success": "✓ वोट सफलतापूर्वक दर्ज हुआ",

            // AI Chatbot Widget
            "chatbot_trigger_title": "जनसेतु एआई से पूछें",
            "chatbot_trigger_sub": "⚡ 24/7 नागरिक सहायक",
            "chatbot_header_title": "जनसेतु एआई नागरिक सहायक",
            "chatbot_header_sub": "● ऑनलाइन • स्वचालित ट्राइएज व वार्ड 12 गाइड",
            "chatbot_input_placeholder": "एआई से पूछें या नागरिक समस्या बताएं...",
            "chip_pothole": "🚧 सड़क गड्ढे की शिकायत",
            "chip_broken_light": "💡 खराब स्ट्रीट लाइट",
            "chip_garbage": "🗑️ कचरा डंपिंग",
            "chip_track": "🔍 शिकायत ट्रैक #JS-20481",
            "chip_officials": "🏛️ वार्ड 12 अधिकारी",
            "chip_sla": "📜 24-घंटे समयसीमा",
            "chip_budget": "🗳️ बजट मतदान",

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

            // Locations
            "loc_saheed_nagar": "शहीद नगर",
            "loc_unit_4_market": "यूनिट 4 मार्केट",
            "loc_unit_4_gate": "यूनिट 4 मेन गेट के पास",
            "loc_community_park": "कम्युनिटी पार्क के सामने",
            "loc_transformer": "इलेक्ट्रिकल ट्रांसफॉर्मर के पास",
            "loc_reservoir": "नगर निगम जलाशय के पास",
            "loc_master_canteen": "मास्टर कैंटीन",
            "loc_ward_12": "वार्ड 12",

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

        translateLocation(rawLoc, lang = null) {
            const current = lang || localStorage.getItem('jansetu_preferred_lang') || 'en';
            if (current === 'en' || !rawLoc) return rawLoc;
            const l = rawLoc.toLowerCase();
            if (l.includes("saheed") || l.includes("ସହିଦ") || l.includes("शहीद")) return this.get("loc_saheed_nagar", current);
            if (l.includes("market") || l.includes("ମାର୍କେଟ୍") || l.includes("मार्केट")) return this.get("loc_unit_4_market", current);
            if (l.includes("gate") || l.includes("ଫାଟକ") || l.includes("गेट")) return this.get("loc_unit_4_gate", current);
            if (l.includes("park") || l.includes("ପାର୍କ") || l.includes("पार्क")) return this.get("loc_community_park", current);
            if (l.includes("transformer") || l.includes("ଟ୍ରାନ୍ସଫର୍ମର") || l.includes("ट्रांसफॉर्मर")) return this.get("loc_transformer", current);
            if (l.includes("reservoir") || l.includes("water") || l.includes("ଜଳାଶୟ") || l.includes("जलाशय")) return this.get("loc_reservoir", current);
            if (l.includes("master") || l.includes("canteen") || l.includes("କ୍ୟାଣ୍ଟିନ୍") || l.includes("कैंटीन")) return this.get("loc_master_canteen", current);
            if (l.includes("ward 12") || l.includes("ୱାର୍ଡ଼ ୧୨") || l.includes("वार्ड 12")) return this.get("loc_ward_12", current);
            return rawLoc;
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

            // 3. Brand & User Profile in Header
            const brandSpan = document.querySelector('.brand span, .brand-logo span');
            if (brandSpan) brandSpan.textContent = d.brand_subtitle || "Civic Intelligence";

            const userName = document.getElementById('userName');
            if (userName) userName.textContent = d.user_citizen_role || "Citizen";
            const userSub = document.querySelector('.user-info span');
            if (userSub) userSub.textContent = d.user_citizen_role || "Citizen";
            const profileMenuName = document.getElementById('profileMenuName');
            if (profileMenuName) profileMenuName.textContent = d.user_citizen_role || "Citizen";
            const profileMenuSub = document.querySelector('.profile-menu-header span');
            if (profileMenuSub) profileMenuSub.textContent = d.user_ward_resident || "Ward 12 Resident";

            const officerProfileStrong = document.querySelector('.officer-info strong');
            if (officerProfileStrong) officerProfileStrong.textContent = d.officer_role_label || "Officer Admin";
            const officerProfileSmall = document.querySelector('.officer-info small, .officer-info span');
            if (officerProfileSmall) officerProfileSmall.textContent = d.officer_ward_label || "Ward 12";

            // 4. Topbar Search & Status
            const searchInputs = document.querySelectorAll('#globalSearch, #searchInput, .global-search input, .search-bar input');
            searchInputs.forEach(input => {
                const isOfficer = window.location.pathname.includes('officer') || document.body.classList.contains('officer-body');
                input.placeholder = isOfficer ? (d.search_officer_placeholder || "Search grievance ID, location...") : (d.search_placeholder || "Search your reports...");
            });

            const officeStatus = document.querySelector('.office-status');
            if (officeStatus) {
                officeStatus.innerHTML = `<span class="online-dot"></span> ${d.system_operational || "System Operational"}`;
            }

            // 5. Welcome Headers & Action Buttons
            const welcomeCitizenH1 = document.querySelector('.welcome-row h1');
            if (welcomeCitizenH1) {
                welcomeCitizenH1.innerHTML = `${d.good_morning_citizen || "Good morning"}, <span id="welcomeName">${d.user_citizen_role || "Citizen"}</span> 👋`;
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

            const primaryReportBtn = document.querySelector('.welcome-actions .primary-btn, .welcome-row .primary-btn');
            if (primaryReportBtn) {
                primaryReportBtn.innerHTML = `<span>＋</span> ${d.btn_report_issue ? d.btn_report_issue.replace('＋ ', '') : 'Report an Issue'}`;
            }

            // 6. Ward Community Bulletin & Alerts
            const bulletinTag = document.querySelector('#wardBulletinContainer span[style*="text-transform: uppercase"]');
            if (bulletinTag) bulletinTag.textContent = d.official_bulletin_tag || "Official Ward Bulletin";
            const bulletinWardTag = document.getElementById('bulletinWardTag');
            if (bulletinWardTag) bulletinWardTag.textContent = d.bulletin_ward_tag || "Ward 12 • Saheed Nagar";
            const bulletinHeadline = document.getElementById('bulletinHeadline');
            if (bulletinHeadline) bulletinHeadline.textContent = d.bulletin_headline || "Scheduled Water Supply Maintenance (Sunday 8 AM - 2 PM)";
            const bulletinMessage = document.getElementById('bulletinMessage');
            if (bulletinMessage) bulletinMessage.textContent = d.bulletin_message || "Municipal PHED pipeline interconnection work will take place in Ward 12 & Saheed Nagar on Sunday. Citizens are requested to store adequate water.";

            const briefingBtn = document.getElementById('bulletinBriefingBtn');
            if (briefingBtn) briefingBtn.innerHTML = `<span>🔊</span> ${d.btn_daily_briefing ? d.btn_daily_briefing.replace('🔊 ', '') : 'Daily Civic Briefing'}`;
            const noticeBtn = document.getElementById('bulletinNoticeBtn');
            if (noticeBtn) noticeBtn.innerHTML = `<span>📢</span> ${d.btn_read_notice ? d.btn_read_notice.replace('📢 ', '') : 'Read Notice'}`;
            const stopBtn = document.getElementById('bulletinStopAudioBtn');
            if (stopBtn) stopBtn.innerHTML = `⏹ ${d.btn_stop_audio ? d.btn_stop_audio.replace('⏹ ', '') : 'Stop'}`;

            // 7. Civic Karma & Badges
            const karmaStrong = document.querySelector('[style*="Civic Karma"]');
            if (karmaStrong) {
                const score = this.formatDigits("340", lang);
                karmaStrong.innerHTML = `${d.label_civic_karma || "Civic Karma"}: <span id="karmaScoreDisplay" style="color: #2563eb;">${score} ${d.karma_points_suffix || "Points"}</span>`;
            }
            const karmaRankSpan = document.querySelector('span[style*="background: #e0e7ff"]');
            if (karmaRankSpan) karmaRankSpan.textContent = d.karma_rank_level3 || "Rank: Ward Guardian (Level 3)";
            
            const karmaDesc = document.querySelector('span[style*="Earn XP by reporting"]');
            if (karmaDesc) karmaDesc.textContent = d.karma_desc || "Earn XP by reporting verified issues, voting on ward projects, and confirming repairs.";

            const badgeSpans = document.querySelectorAll('[style*="border-radius: 16px"]');
            if (badgeSpans[0]) badgeSpans[0].innerHTML = d.badge_champion || "🌟 Civic Champion";
            if (badgeSpans[1]) badgeSpans[1].innerHTML = d.badge_corroborator || "🔍 Verified Corroborator";

            const viewBadgesBtn = document.querySelector('button[onclick="openProfileModal()"]');
            if (viewBadgesBtn) viewBadgesBtn.textContent = d.btn_view_all_badges || "View All Badges →";

            const karmaProgText = document.querySelector('span[style*="Level 3 Progress"]');
            if (karmaProgText) {
                const cur = this.formatDigits("340", lang);
                const max = this.formatDigits("500", lang);
                karmaProgText.textContent = `${d.karma_level_progress ? d.karma_level_progress.replace('340', cur).replace('500', max) : `Level 3 Progress (${cur} / ${max} XP)`}`;
            }
            const karmaXpNeed = document.querySelector('span[style*="160 XP to Level 4"]');
            if (karmaXpNeed) {
                const rem = this.formatDigits("160", lang);
                karmaXpNeed.textContent = d.karma_xp_needed ? d.karma_xp_needed.replace('160', rem) : `${rem} XP to Level 4 • Municipal Vanguard ⚡`;
            }

            // 8. Sidebar Navigation Links & Titles
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

            // 9. Help Card (Sidebar Bottom)
            const helpCardStrong = document.querySelector('.help-card strong');
            if (helpCardStrong) helpCardStrong.textContent = d.nav_need_help || "Need help?";
            const helpCardSpan = document.querySelector('.help-card span, .help-card p');
            if (helpCardSpan) helpCardSpan.textContent = d.nav_need_help_sub || "Learn how JanSetu works.";

            // 10. Stat Cards & Numbers (Citizen & Officer)
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

            // 11. Filter Pills
            const pills = document.querySelectorAll('.filter-tab-pill');
            pills.forEach(p => {
                const text = p.textContent.toLowerCase();
                if (text.includes('all') || text.includes('ସମସ୍ତ') || text.includes('सभी') || text.includes('બધા')) p.textContent = d.filter_all || "All (08)";
                else if (text.includes('progress') || text.includes('ଚାଲୁଅଛି') || text.includes('प्रगति') || text.includes('કામ ચાલુ')) p.textContent = d.filter_in_progress || "⏳ In Progress (03)";
                else if (text.includes('resolved') || text.includes('ସମାଧାନ') || text.includes('समाधान')) p.textContent = d.filter_resolved || "✅ Resolved (04)";
                else if (text.includes('critical') || text.includes('ବିପଦ') || text.includes('आवश्यक')) p.textContent = d.filter_critical || "🔥 Critical SLA";
            });

            // 12. Recent Reports Card
            const recentReportsH2 = document.querySelector('.reports-card h2, .reports-section h2');
            if (recentReportsH2) recentReportsH2.textContent = d.card_recent_reports || "Recent Reports";
            const recentReportsP = document.querySelector('.reports-card .card-header p, .reports-section p');
            if (recentReportsP) recentReportsP.textContent = d.card_recent_reports_sub || "Track your latest civic issues";
            const viewAllBtns = document.querySelectorAll('.reports-card .text-btn, .reports-card .text-button');
            viewAllBtns.forEach(v => { v.textContent = d.btn_view_all || "View all →"; });

            // 13. Community Impact Section
            const impactH2 = document.querySelector('#impact h2');
            if (impactH2) impactH2.textContent = d.impact_title || "Community Impact";
            const impactP = document.querySelector('#impact .card-header p');
            if (impactP) impactP.textContent = d.impact_subtitle || "Your contribution matters";
            const impactBadge = document.querySelector('.impact-badge');
            if (impactBadge) impactBadge.textContent = d.impact_this_month || "This month";
            const impactSpanBenefited = document.querySelector('.impact-number span');
            if (impactSpanBenefited) impactSpanBenefited.textContent = d.impact_citizens_benefited || "citizens benefited";
            const barLabelSpan = document.querySelector('.bar-label span');
            if (barLabelSpan) barLabelSpan.textContent = d.impact_your_contrib || "Your civic contribution";
            const impactMsg = document.querySelector('.impact-message');
            if (impactMsg) impactMsg.innerHTML = d.impact_message_full || "Together, citizens in your area have helped improve <strong>23 local issues</strong> this month.";

            // 14. Civic Map Section
            const mapH2 = document.querySelector('#map h2');
            if (mapH2) mapH2.textContent = d.map_title || "Civic Map";
            const mapP = document.querySelector('#map .card-header p');
            if (mapP) mapP.textContent = d.map_subtitle || "Live geospatial complaints in your jurisdiction";
            const mapResetBtn = document.querySelector('#map .text-btn');
            if (mapResetBtn) mapResetBtn.textContent = d.btn_reset_view || "Reset View ⌖";

            // 15. Participatory Budgeting Card & Section
            const budgetEyebrow = document.querySelector('.budget-info .eyebrow');
            if (budgetEyebrow) budgetEyebrow.textContent = d.budget_eyebrow || "PARTICIPATORY BUDGETING";
            const budgetBannerH2 = document.querySelector('.budget-info h2');
            if (budgetBannerH2) budgetBannerH2.textContent = d.budget_banner_title || "Help decide what gets built in your ward.";
            const budgetBannerP = document.querySelector('.budget-info p');
            if (budgetBannerP) budgetBannerP.textContent = d.budget_banner_sub || "Review community proposals and vote for projects that can make the biggest local impact.";
            const budgetExploreBtn = document.querySelector('.budget-card .primary-btn');
            if (budgetExploreBtn) budgetExploreBtn.textContent = d.btn_explore_proposals || "Explore proposals →";

            const budgetSectionH1 = document.querySelector('#budgetSection h1');
            if (budgetSectionH1) budgetSectionH1.textContent = d.budget_title || "Participatory Budgeting";
            const budgetSectionEyebrow = document.querySelector('#budgetSection .eyebrow');
            if (budgetSectionEyebrow) budgetSectionEyebrow.textContent = d.budget_civic_participation || "CIVIC PARTICIPATION";
            const budgetSectionP = document.querySelector('#budgetSection p');
            if (budgetSectionP) budgetSectionP.textContent = d.budget_section_sub || "Vote on municipal fund allocations for local infrastructure projects in Ward 12.";

            // 16. Quick Actions & Leaderboard
            const quickCardsH2 = document.querySelector('.quick-actions h2, .quick-actions-card h2');
            if (quickCardsH2) quickCardsH2.textContent = d.card_quick_actions || "Quick Actions";
            const quickCardsP = document.querySelector('.quick-actions p, .quick-actions-card p');
            if (quickCardsP) quickCardsP.textContent = d.sub_quick_actions || "Get things done faster";

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

            // 17. Ask JanSetu AI Chatbot Floating Trigger & Headers
            const aiTriggerText = document.querySelector('.ai-chat-trigger-text');
            if (aiTriggerText) {
                aiTriggerText.innerHTML = `<span>${d.chatbot_trigger_title || "Ask JanSetu AI"}</span><small>${d.chatbot_trigger_sub || "⚡ 24/7 Civic Assistant"}</small>`;
            }
            const aiHeaderStrong = document.querySelector('.ai-header strong');
            if (aiHeaderStrong) aiHeaderStrong.textContent = d.chatbot_header_title || "JanSetu AI Civic Assistant";
            const aiHeaderSmall = document.querySelector('.ai-header small');
            if (aiHeaderSmall) aiHeaderSmall.textContent = d.chatbot_header_sub || "● Online • Auto-Triage & Ward 12 Guide";
            const aiInput = document.getElementById('aiInput');
            if (aiInput) aiInput.placeholder = d.chatbot_input_placeholder || "Ask AI or describe civic problem...";

            // 18. Dynamic Grievance Rows (Title, category, location, upvotes, status, review button)
            this.translateExistingGrievanceRows(lang);
        },

        translateExistingGrievanceRows(lang) {
            const d = this.dict[lang] || this.dict['en'];

            const rows = document.querySelectorAll('.report-row, .grievance-item, tr[data-status]');
            rows.forEach(row => {
                const h3 = row.querySelector('h3, td:nth-child(2)');
                if (h3) {
                    const raw = h3.getAttribute('data-raw-title') || h3.textContent.trim();
                    h3.setAttribute('data-raw-title', raw);
                    h3.textContent = this.translateTitle(raw, lang);
                }

                const descP = row.querySelector('.grievance-main p, .report-details p');
                if (descP && descP.textContent.includes('•')) {
                    const parts = descP.textContent.split('•');
                    if (parts.length >= 2) {
                        const rawCat = parts[1].trim();
                        parts[1] = ` ${this.translateCategory(rawCat, lang)} `;
                        descP.textContent = parts.join('•');
                    }
                }

                const metaLoc = row.querySelector('.grievance-meta span:first-child');
                if (metaLoc && metaLoc.textContent.includes('⌖')) {
                    const rawLoc = metaLoc.getAttribute('data-raw-loc') || metaLoc.textContent.replace('⌖', '').trim();
                    metaLoc.setAttribute('data-raw-loc', rawLoc);
                    metaLoc.textContent = `⌖ ${this.translateLocation(rawLoc, lang)}`;
                }

                const upvoteBtn = row.querySelector('.support-vote-btn');
                if (upvoteBtn) {
                    const rawVotes = upvoteBtn.getAttribute('data-raw-votes') || upvoteBtn.textContent.replace(/[^0-9]/g, '');
                    upvoteBtn.setAttribute('data-raw-votes', rawVotes);
                    upvoteBtn.textContent = `▲ ${this.formatDigits(rawVotes, lang)}`;
                }

                const statusSpan = row.querySelector('.status, .report-status span');
                if (statusSpan) {
                    const rawStatus = statusSpan.getAttribute('data-raw-status') || statusSpan.textContent.trim();
                    statusSpan.setAttribute('data-raw-status', rawStatus);
                    statusSpan.textContent = this.translateStatus(rawStatus, lang);
                }

                const prioSpan = row.querySelector('.priority');
                if (prioSpan) {
                    const rawPrio = prioSpan.getAttribute('data-raw-priority') || prioSpan.textContent.trim();
                    prioSpan.setAttribute('data-raw-priority', rawPrio);
                    prioSpan.textContent = this.translatePriority(rawPrio, lang);
                }

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
