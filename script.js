/* =====================================================
   CIVICCONNECT - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   DOM ELEMENTS
===================================================== */

const loginModal = document.getElementById("loginModal");
const reportModal = document.getElementById("reportModal");
const mobileMenu = document.getElementById("mobileMenu");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const toastIcon = document.getElementById("toastIcon");

const issueInput = document.getElementById("issueInput");
const locationMessage = document.getElementById("locationMessage");
const aiPreview = document.getElementById("aiPreview");


/* =====================================================
   LOGIN MODAL
===================================================== */

/*
   Navbar Login button
   and Report an Issue button
   both open the login modal.
*/

function openLoginModal() {

    if (!loginModal) {
        console.error("loginModal not found");
        return;
    }

    loginModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/*
   Your navbar already uses showLogin()
*/

function showLogin() {

    openLoginModal();

}


/*
   Close login modal
*/

function closeLogin() {

    if (!loginModal) {
        return;
    }

    loginModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   REPORT BUTTON
===================================================== */

/*
   IMPORTANT:

   Your HTML currently has:

   onclick="openReportModal()"

   But you want:

   Report an Issue
          ↓
      Login Modal
          ↓
       Citizen
          ↓
       Dashboard

   Therefore openReportModal() opens LOGIN first.
*/

function openReportModal() {

    openLoginModal();

}


/*
   This function is kept for your existing
   report modal if you want to use it later.
*/

function openActualReportModal() {

    if (!reportModal) {
        return;
    }

    reportModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/*
   Close report modal
*/

function closeReportModal() {

    if (!reportModal) {
        return;
    }

    reportModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   LOGIN
===================================================== */

function loginDemo() {

    /* ---------------------------------
       Get selected role
    --------------------------------- */

    const selectedRole = document.querySelector(
        'input[name="role"]:checked'
    );


    if (!selectedRole) {

        showToast(
            "Please select Citizen or Officer.",
            "!"
        );

        return;

    }


    const role = selectedRole.value;


    /* ---------------------------------
       Get email
    --------------------------------- */

    const emailInput =
        document.getElementById("loginEmail");


    /* ---------------------------------
       Get password
    --------------------------------- */

    const passwordInput =
        document.getElementById("loginPassword");


    const email =
        emailInput
            ? emailInput.value.trim()
            : "";


    const password =
        passwordInput
            ? passwordInput.value.trim()
            : "";


    /* ---------------------------------
       Validate email
    --------------------------------- */

    if (email === "") {

        showToast(
            "Please enter your email address.",
            "!"
        );

        if (emailInput) {
            emailInput.focus();
        }

        return;

    }


    /* ---------------------------------
       Validate password
    --------------------------------- */

    if (password === "") {

        showToast(
            "Please enter your password.",
            "!"
        );

        if (passwordInput) {
            passwordInput.focus();
        }

        return;

    }


    /* ---------------------------------
       CITIZEN LOGIN
    --------------------------------- */

    if (role === "citizen") {

        /*
           Save demo login information.

           This is NOT real authentication.
           Backend authentication can replace
           this later.
        */

        localStorage.setItem(
            "userRole",
            "citizen"
        );

        localStorage.setItem(
            "userEmail",
            email
        );


        /*
           Redirect to Citizen Dashboard
        */

        window.location.href =
            "citizendashboard.html";

        return;

    }


    /* ---------------------------------
       OFFICER LOGIN
    --------------------------------- */

    if (role === "officer") {

        localStorage.setItem(
            "userRole",
            "officer"
        );

        localStorage.setItem(
            "userEmail",
            email
        );


        /*
           Change this filename when you
           create the officer dashboard.
        */

        showToast(
            "Officer dashboard coming soon.",
            "!"
        );

        return;

    }

}


/* =====================================================
   CLOSE MODALS
===================================================== */


/*
   Click outside login modal
*/

if (loginModal) {

    loginModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === loginModal
            ) {

                closeLogin();

            }

        }
    );

}


/*
   Click outside report modal
*/

if (reportModal) {

    reportModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === reportModal
            ) {

                closeReportModal();

            }

        }
    );

}


/*
   ESC key
*/

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLogin();

            closeReportModal();

            closeMobileMenu();

        }

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.toggle("active");

}


/*
   Close mobile menu
*/

function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("active");

}


/* =====================================================
   SMOOTH SCROLL
===================================================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    closeMobileMenu();

}


/* =====================================================
   TOAST MESSAGE
===================================================== */

function showToast(message, icon = "✓") {

    if (!toast) {
        alert(message);
        return;
    }


    if (toastMessage) {
        toastMessage.textContent = message;
    }


    if (toastIcon) {
        toastIcon.textContent = icon;
    }


    toast.classList.add("active");


    setTimeout(function () {

        toast.classList.remove("active");

    }, 3000);

}


/* =====================================================
   COMING SOON
===================================================== */

function showComingSoon(feature) {

    showToast(
        feature + " will be available soon.",
        "!"
    );

}


/* =====================================================
   VOICE DEMO
===================================================== */

function startVoiceDemo() {

    /*
       Check browser support
    */

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        showToast(
            "Voice input is not supported in this browser.",
            "!"
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    showToast(
        "Listening... Please describe the civic issue.",
        "🎤"
    );


    recognition.start();


    recognition.onresult =
        function (event) {

            const transcript =
                event.results[0][0].transcript;


            if (issueInput) {

                issueInput.value =
                    transcript;

                updateAIPreview();

            }


            showToast(
                "Voice captured successfully.",
                "✓"
            );

        };


    recognition.onerror =
        function () {

            showToast(
                "Could not capture voice. Try again.",
                "!"
            );

        };

}


/* =====================================================
   LOCATION
===================================================== */

function detectLocation() {

    if (!locationMessage) {
        return;
    }


    if (!navigator.geolocation) {

        locationMessage.textContent =
            "Location is not supported by this browser.";

        return;

    }


    locationMessage.textContent =
        "Detecting your location...";


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;


            const longitude =
                position.coords.longitude;


            locationMessage.textContent =
                "Location detected ✓ " +
                latitude.toFixed(4) +
                ", " +
                longitude.toFixed(4);


            showToast(
                "Location detected successfully.",
                "✓"
            );

        },


        function () {

            locationMessage.textContent =
                "Unable to detect location. Please allow location access.";

            showToast(
                "Location permission is required.",
                "!"
            );

        }

    );

}


/* =====================================================
   AI PREVIEW
===================================================== */

function updateAIPreview() {

    if (!issueInput || !aiPreview) {
        return;
    }


    const text =
        issueInput.value.trim();


    if (text === "") {

        aiPreview.innerHTML = `

            <div class="ai-header">

                <div class="ai-status">

                    <span class="ai-dot"></span>

                    AI Analysis

                </div>

                <span>
                    Preview
                </span>

            </div>

            <p>
                Describe your issue to see an AI triage preview.
            </p>

        `;

        return;

    }


    /*
       Frontend demo only.

       Real AI classification will later
       come from your Python backend.
    */

    let category =
        "General Civic Issue";

    let severity =
        "Medium";

    let department =
        "Municipal Services";


    const lowerText =
        text.toLowerCase();


    if (
        lowerText.includes("pothole") ||
        lowerText.includes("road") ||
        lowerText.includes("street")
    ) {

        category = "Road & Infrastructure";

        severity = "High";

        department = "Road Division";

    }


    else if (
        lowerText.includes("water") ||
        lowerText.includes("pipe") ||
        lowerText.includes("leak")
    ) {

        category = "Water Supply";

        severity = "High";

        department = "Water Division";

    }


    else if (
        lowerText.includes("garbage") ||
        lowerText.includes("waste") ||
        lowerText.includes("trash")
    ) {

        category = "Waste Management";

        severity = "Medium";

        department = "Waste Management";

    }


    else if (
        lowerText.includes("light") ||
        lowerText.includes("streetlight") ||
        lowerText.includes("lamp")
    ) {

        category = "Street Lighting";

        severity = "Medium";

        department = "Electrical Division";

    }


    aiPreview.innerHTML = `

        <div class="ai-header">

            <div class="ai-status">

                <span class="ai-dot"></span>

                AI Analysis

            </div>

            <span>
                Preview
            </span>

        </div>


        <p>

            <strong>Category:</strong>
            ${category}

            <br>

            <strong>Severity:</strong>
            ${severity}

            <br>

            <strong>Department:</strong>
            ${department}

        </p>

    `;

}


/*
   Update AI preview while typing
*/

if (issueInput) {

    issueInput.addEventListener(
        "input",
        updateAIPreview
    );

}


/* =====================================================
   SUBMIT REPORT
===================================================== */

function submitReport() {

    if (!issueInput) {
        return;
    }


    const issue =
        issueInput.value.trim();


    if (issue === "") {

        showToast(
            "Please describe the civic issue first.",
            "!"
        );

        issueInput.focus();

        return;

    }


    /*
       Demo report ID
    */

    const reportId =
        "CC-" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    /*
       Save demo report locally
    */

    const report = {

        id: reportId,

        issue: issue,

        status: "Submitted",

        createdAt:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "latestCivicReport",
        JSON.stringify(report)
    );


    closeReportModal();


    showToast(
        "Issue submitted successfully. ID: " +
        reportId,
        "✓"
    );


    /*
       Clear form
    */

    issueInput.value = "";


    updateAIPreview();

}


/* =====================================================
   PARTICIPATORY BUDGET
===================================================== */

function showBudgetMessage() {

    showToast(
        "Ward budget explorer will open soon.",
        "₹"
    );

}


/* =====================================================
   COUNTER ANIMATION
===================================================== */

function animateCounter(element) {

    const target =
        parseInt(
            element.getAttribute("data-target")
        );


    if (isNaN(target)) {
        return;
    }


    let current = 0;


    const duration = 1800;

    const stepTime =
        Math.max(
            Math.floor(duration / target),
            1
        );


    const counter =
        setInterval(function () {

            current +=
                Math.ceil(
                    target / 100
                );


            if (current >= target) {

                current = target;

                clearInterval(counter);

            }


            element.textContent =
                current.toLocaleString();

        }, stepTime);

}


/*
   Observe stat cards
*/

const counters =
    document.querySelectorAll(
        "[data-target]"
    );


if (counters.length > 0) {

    const counterObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            animateCounter(
                                entry.target
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.5
            }

        );


    counters.forEach(
        function (counter) {

            counterObserver.observe(counter);

        }
    );

}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(element);

        }
    );

}


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener(
    "scroll",
    function () {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        }

        else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


const sections =
    document.querySelectorAll(
        "main section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   PREVENT EMPTY FOOTER LINKS
===================================================== */

document.querySelectorAll(
    'a[href="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    }
);


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Make sure page starts at top
        */

        window.scrollTo(0, 0);

    }
);