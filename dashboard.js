/* =========================================
   JANSETU CITIZEN DASHBOARD JS
========================================= */


/* =========================================
   USER DATA
========================================= */

const userEmail =
    localStorage.getItem("userEmail");


if (userEmail) {

    const profileEmail =
        document.getElementById("profileEmail");

    if (profileEmail) {

        profileEmail.textContent =
            userEmail;

    }

}


/* =========================================
   SIDEBAR
========================================= */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    sidebar.classList.toggle("open");

    overlay.classList.toggle("active");

}


function closeSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById("sidebarOverlay");


    sidebar.classList.remove("open");

    overlay.classList.remove("active");

}


/* =========================================
   PROFILE MENU
========================================= */

function toggleProfileMenu() {

    const menu =
        document.getElementById("profileMenu");


    menu.classList.toggle("active");

}


/* Close profile menu when clicking elsewhere */

document.addEventListener(
    "click",
    function(event) {

        const profile =
            document.querySelector(".user-profile");

        const menu =
            document.getElementById("profileMenu");


        if (
            menu &&
            profile &&
            !profile.contains(event.target) &&
            !menu.contains(event.target)
        ) {

            menu.classList.remove("active");

        }

    }
);


/* =========================================
   NOTIFICATIONS
========================================= */

function toggleNotifications() {

    showSection("notifications");

}


/* =========================================
   SECTION NAVIGATION
========================================= */

function showSection(
    sectionName,
    clickedLink = null
) {

    const overview =
        document.getElementById("overview");

    const reports =
        document.getElementById("allReports");

    const notifications =
        document.getElementById("notifications");


    /*
       Hide dashboard sections
    */

    if (overview) {

        overview.style.display =
            "none";

    }


    if (reports) {

        reports.style.display =
            "none";

    }


    if (notifications) {

        notifications.style.display =
            "none";

    }


    /*
       Show selected section
    */

    if (sectionName === "overview") {

        if (overview) {

            overview.style.display =
                "block";

        }

    }


    else if (
        sectionName === "reports"
    ) {

        if (reports) {

            reports.style.display =
                "block";

        }

    }


    else if (
        sectionName === "notifications"
    ) {

        if (notifications) {

            notifications.style.display =
                "block";

        }

    }


    else if (
        sectionName === "map"
    ) {

        showToast(
            "Civic map module will be connected soon."
        );

        return;

    }


    else if (
        sectionName === "budget"
    ) {

        showBudget();

        return;

    }


    else if (
        sectionName === "impact"
    ) {

        if (overview) {

            overview.style.display =
                "block";

        }

        setTimeout(
            function() {

                const impact =
                    document.getElementById("impact");

                if (impact) {

                    impact.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            },
            50
        );

    }


    /*
       Active navigation
    */

    document
        .querySelectorAll(".nav-link")
        .forEach(
            function(link) {

                link.classList.remove(
                    "active"
                );

            }
        );


    if (clickedLink) {

        clickedLink.classList.add(
            "active"
        );

    }


    closeSidebar();

}


/* =========================================
   REPORT DETAILS
========================================= */

const reportData = {

    "JS-20481": {

        title:
            "Road damage near Unit 4",

        status:
            "In Progress"

    },


    "JS-20462": {

        title:
            "Broken street light",

        status:
            "Resolved"

    },


    "JS-20431": {

        title:
            "Garbage collection issue",

        status:
            "Pending"

    }

};


function viewReport(reportId) {

    const report =
        reportData[reportId];


    if (!report) {

        showToast(
            "Report details not available."
        );

        return;

    }


    const modal =
        document.getElementById(
            "detailModal"
        );


    const title =
        document.getElementById(
            "detailTitle"
        );


    const id =
        document.getElementById(
            "detailId"
        );


    title.textContent =
        report.title;


    id.textContent =
        "#" + reportId;


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeDetails() {

    const modal =
        document.getElementById(
            "detailModal"
        );


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* Close details by clicking outside */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "detailModal"
            );


        if (
            event.target === modal
        ) {

            closeDetails();

        }

    }
);


/* =========================================
   REPORT FILTER
========================================= */

function filterReports(
    status,
    button
) {


    document
        .querySelectorAll(".filter-btn")
        .forEach(
            function(btn) {

                btn.classList.remove(
                    "active"
                );

            }
        );


    button.classList.add(
        "active"
    );


    const reports =
        document.querySelectorAll(
            ".full-report"
        );


    reports.forEach(
        function(report) {

            const reportStatus =
                report.getAttribute(
                    "data-status"
                );


            if (
                status === "all" ||
                reportStatus === status
            ) {

                report.style.display =
                    "flex";

            }

            else {

                report.style.display =
                    "none";

            }

        }
    );

}


/* =========================================
   PARTICIPATORY BUDGETING
========================================= */

function showBudget() {

    showToast(
        "Participatory budgeting module coming soon."
    );

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "dashboardToast"
        );


    const messageElement =
        document.getElementById(
            "dashboardToastMessage"
        );


    if (!toast) {

        alert(message);

        return;

    }


    messageElement.textContent =
        message;


    toast.classList.add(
        "active"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "active"
                );

            },
            3000
        );

}


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const search =
                this.value
                    .toLowerCase()
                    .trim();


            const reports =
                document.querySelectorAll(
                    ".report-row"
                );


            reports.forEach(
                function(report) {

                    const text =
                        report.textContent
                            .toLowerCase();


                    if (
                        text.includes(search)
                    ) {

                        report.style.display =
                            "flex";

                    }

                    else {

                        report.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================================
   LOGOUT
========================================= */

function logout() {

    localStorage.removeItem(
        "userRole"
    );

    localStorage.removeItem(
        "userEmail"
    );


    window.location.href =
        "index.html";

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeDetails();

            closeSidebar();

            const profileMenu =
                document.getElementById(
                    "profileMenu"
                );


            if (profileMenu) {

                profileMenu.classList.remove(
                    "active"
                );

            }

        }

    }
);