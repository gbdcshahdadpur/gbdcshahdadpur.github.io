/* =========================================================
   COMMON HEADER & FOOTER LOADER
   GOVERNMENT BOYS DEGREE COLLEGE SHAHDADPUR
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       LOAD COMMON HEADER
       ===================================================== */

    const headerContainer =
        document.getElementById("header-container");

    if (headerContainer) {

        fetch("header.html")
            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        "Unable to load header.html"
                    );
                }

                return response.text();

            })
            .then(data => {

                headerContainer.innerHTML = data;

                initializeMenu();

            })
            .catch(error => {

                console.error(
                    "Header loading error:",
                    error
                );

            });

    }



    /* =====================================================
       LOAD COMMON FOOTER
       ===================================================== */

    const footerContainer =
        document.getElementById("footer-container");

    if (footerContainer) {

        fetch("footer.html")
            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        "Unable to load footer.html"
                    );
                }

                return response.text();

            })
            .then(data => {

                footerContainer.innerHTML = data;

            })
            .catch(error => {

                console.error(
                    "Footer loading error:",
                    error
                );

            });

    }

});



/* =========================================================
   MENU INITIALIZATION
   ========================================================= */

function initializeMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                navMenu.classList.toggle("show");

            }
        );

    }



    /* =====================================================
       DROPDOWN MENUS
       ===================================================== */

    const dropdownToggles =
        document.querySelectorAll(
            ".dropdown-toggle"
        );


    dropdownToggles.forEach(function (toggle) {

        toggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                const parent =
                    this.closest(".dropdown");


                document
                    .querySelectorAll(".dropdown")
                    .forEach(function (dropdown) {

                        if (dropdown !== parent) {

                            dropdown.classList.remove(
                                "open"
                            );

                        }

                    });


                parent.classList.toggle("open");

            }
        );

    });



    /* =====================================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (!event.target.closest(".navbar")) {

                document
                    .querySelectorAll(".dropdown")
                    .forEach(function (dropdown) {

                        dropdown.classList.remove(
                            "open"
                        );

                    });


                if (navMenu) {

                    navMenu.classList.remove(
                        "show"
                    );

                }

            }

        }
    );



    /* =====================================================
       CLOSE MOBILE MENU AFTER NORMAL LINK CLICK
       ===================================================== */

    document
        .querySelectorAll(
            ".nav-menu a:not(.dropdown-toggle)"
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (window.innerWidth <= 850) {

                        if (navMenu) {

                            navMenu.classList.remove(
                                "show"
                            );

                        }

                    }

                }
            );

        });

}