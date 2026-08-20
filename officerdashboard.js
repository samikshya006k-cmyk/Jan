/* =========================================
   JANSETU OFFICER DASHBOARD
========================================= */


/* =========================================
   CURRENT DATE
========================================= */

const currentDate =
    document.getElementById("currentDate");


if (currentDate) {

    const today = new Date();

    currentDate.textContent =
        today.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

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
   PROFILE
========================================= */

function toggleProfileMenu() {

    const menu =
        document.getElementById(
            "profileDropdown"
        );


    menu.classList.toggle("active");

}


document.addEventListener(
    "click",
    function(event) {

        const menu =
            document.getElementById(
                "profileDropdown"
            );

        const profile =
            document.querySelector(
                ".officer-profile"
            );


        if (
            menu &&
            profile &&
            !profile.contains(event.target) &&
            !menu.contains(event.target)
        ) {

            menu.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================
   SECTION NAVIGATION
========================================= */

const sections = [
    "overview",
    "grievances",
    "priority",
    "evidence",
    "analytics",
    "notifications"
];


function showSection(
    sectionName,
    clickedLink = null
) {

    sections.forEach(
        function(id) {

            const section =
                document.getElementById(id);


            if (section) {

                section.style.display =
                    "none";

            }

        }
    );


    const selected =
        document.getElementById(
            sectionName
        );


    if (selected) {

        selected.style.display =
            "block";

    }


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
   GRIEVANCE DATA
========================================= */

const grievanceData = {

    "JS-20481": {

        title:
            "Major road damage near Unit 4",

        category:
            "Infrastructure",

        priority:
            "Critical",

        location:
            "Unit 4",

        summary:
            "Infrastructure issue detected. High community impact and multiple similar complaints detected nearby."

    },


    "JS-20475": {

        title:
            "Overflowing waste collection point",

        category:
            "Waste Management",

        priority:
            "High",

        location:
            "Saheed Nagar",

        summary:
            "Multiple waste complaints have been submitted from the surrounding area."

    },


    "JS-20469": {

        title:
            "Non-functional street lights",

        category:
            "Street Lighting",

        priority:
            "Medium",

        location:
            "Ward 12",

        summary:
            "Street lighting issue affecting several nearby residents."

    },


    "JS-20462": {

        title:
            "Broken street light",

        category:
            "Street Lighting",

        priority:
            "Medium",

        location:
            "Ward 12",

        summary:
            "Reported street light issue. Resolution evidence has been submitted."

    }

};


/* =========================================
   OPEN GRIEVANCE
========================================= */

function openGrievance(id) {

    const data =
        grievanceData[id];


    if (!data) {

        showToast(
            "Grievance information unavailable."
        );

        return;

    }


    document.getElementById(
        "modalTitle"
    ).textContent =
        data.title;


    document.getElementById(
        "modalId"
    ).textContent =
        "#" + id;


    document.getElementById(
        "modalCategory"
    ).textContent =
        data.category;


    document.getElementById(
        "modalPriority"
    ).textContent =
        data.priority;


    document.getElementById(
        "modalLocation"
    ).textContent =
        data.location;


    document.getElementById(
        "modalAiSummary"
    ).textContent =
        data.summary;


    document.getElementById(
        "grievanceModal"
    ).classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================
   CLOSE GRIEVANCE
========================================= */

function closeGrievance() {

    document.getElementById(
        "grievanceModal"
    ).classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* =========================================
   ASSIGN GRIEVANCE
========================================= */

function assignGrievance() {

    closeGrievance();


    showToast(
        "Grievance assignment panel opened."
    );

}


/* =========================================
   RESOLVE / UPDATE
========================================= */

function resolveGrievance() {

    closeGrievance();


    showToast(
        "Grievance status updated to In Progress."
    );

}


/* =========================================
   EVIDENCE
========================================= */

function approveEvidence(button) {

    const parent =
        button.closest(
            ".evidence-item"
        );


    if (parent) {

        parent.style.opacity =
            "0.55";

    }


    showToast(
        "Resolution evidence approved."
    );

}


function rejectEvidence(button) {

    showToast(
        "Evidence rejected. Officer review required."
    );

}


/* =========================================
   SEARCH
========================================= */

const globalSearch =
    document.getElementById(
        "globalSearch"
    );


if (globalSearch) {

    globalSearch.addEventListener(
        "input",
        function() {

            const query =
                this.value
                    .toLowerCase()
                    .trim();


            const items =
                document.querySelectorAll(
                    ".grievance-item"
                );


            items.forEach(
                function(item) {

                    const text =
                        item.textContent
                            .toLowerCase();


                    if (
                        text.includes(query)
                    ) {

                        item.style.display =
                            "flex";

                    }

                    else {

                        item.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


/* =========================================
   GRIEVANCE SEARCH
========================================= */

const grievanceSearch =
    document.getElementById(
        "grievanceSearch"
    );


if (grievanceSearch) {

    grievanceSearch.addEventListener(
        "input",
        filterTable
    );

}


const statusFilter =
    document.getElementById(
        "statusFilter"
    );


const priorityFilter =
    document.getElementById(
        "priorityFilter"
    );


if (statusFilter) {

    statusFilter.addEventListener(
        "change",
        filterTable
    );

}


if (priorityFilter) {

    priorityFilter.addEventListener(
        "change",
        filterTable
    );

}


function filterTable() {

    const search =
        grievanceSearch
            ? grievanceSearch.value
                .toLowerCase()
                .trim()
            : "";


    const status =
        statusFilter
            ? statusFilter.value
            : "all";


    const priority =
        priorityFilter
            ? priorityFilter.value
            : "all";


    const rows =
        document.querySelectorAll(
            "#grievanceTable tr"
        );


    rows.forEach(
        function(row) {

            const text =
                row.textContent
                    .toLowerCase();


            const rowStatus =
                row.dataset.status;


            const rowPriority =
                row.dataset.priority;


            const matchesSearch =
                text.includes(search);


            const matchesStatus =
                status === "all" ||
                rowStatus === status;


            const matchesPriority =
                priority === "all" ||
                rowPriority === priority;


            if (
                matchesSearch &&
                matchesStatus &&
                matchesPriority
            ) {

                row.style.display =
                    "";

            }

            else {

                row.style.display =
                    "none";

            }

        }
    );

}


/* =========================================
   MAP FILTERS
========================================= */

document
    .querySelectorAll(".map-filter")
    .forEach(
        function(button) {

            button.addEventListener(
                "click",
                function() {

                    document
                        .querySelectorAll(
                            ".map-filter"
                        )
                        .forEach(
                            function(btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                    this.classList.add(
                        "active"
                    );


                    showToast(
                        this.textContent.trim() +
                        " map filter selected."
                    );

                }
            );

        }
    );


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    toastMessage.textContent =
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
   MODAL OUTSIDE CLICK
========================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "grievanceModal"
            );


        if (
            event.target === modal
        ) {

            closeGrievance();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeGrievance();

            closeSidebar();

        }

    }
);