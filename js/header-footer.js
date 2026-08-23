document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       COMMON HEADER + MENU
    ====================================================== */

    const headerContainer =
        document.getElementById("header-container");

    if (headerContainer) {

        headerContainer.innerHTML = `

        <!-- TOP BAR -->
        <div class="top-bar">

            <div class="container top-bar-content">

                <div class="top-bar-left">

                    <span>
                        <i class="fas fa-landmark"></i>
                        Government of Sindh
                    </span>

                    <span class="separator">|</span>

                    <span>
                        College Education Department
                    </span>

                    <span class="separator">|</span>

                    <span>
                        Shahdadpur, District Sanghar, Sindh
                    </span>

                </div>

            </div>

        </div>


        <!-- COLLEGE TITLE BAR -->
        <div class="college-title-bar">

            <div class="container college-title-content">

                <div class="college-brand">

                    <img
                        src="photos/college logo.jpg"
                        alt="College Logo"
                        class="college-logo">

                    <div class="college-name">

                        <h1>
                            Government Boys Degree College
                        </h1>

                        <h2>
                            Shahdadpur
                        </h2>

                    </div>

                </div>

            </div>

        </div>


        <!-- MAIN NAVIGATION -->
        <nav class="navbar">

            <div class="container nav-container">


                <!-- MOBILE MENU BUTTON -->
                <button
                    class="menu-toggle"
                    id="menuToggle"
                    aria-label="Toggle Menu">

                    <i class="fas fa-bars"></i>

                </button>


                <!-- MENU -->
                <ul class="nav-menu" id="navMenu">


                    <!-- HOME -->
                    <li>

                        <a href="index.html">
                            <i class="fas fa-home"></i>
                            HOME
                        </a>

                    </li>


                    <!-- ABOUT COLLEGE -->
                    <li class="has-submenu">

                        <a href="#">

                            ABOUT COLLEGE

                            <i class="fas fa-chevron-down submenu-arrow"></i>

                        </a>


                        <ul class="submenu">

                            <li>
                                <a href="college-overview.html">
                                    College Overview
                                </a>
                            </li>

                            <li>
                                <a href="vision-mission.html">
                                    Vision & Mission
                                </a>
                            </li>

                            <li>
                                <a href="principal-message.html">
                                    Principal's Message
                                </a>
                            </li>

                            <li>
                                <a href="facilities.html">
                                    Facilities
                                </a>
                            </li>

                        </ul>

                    </li>


                    <!-- ACADEMICS -->
                    <li class="has-submenu">

                        <a href="#">

                            ACADEMICS

                            <i class="fas fa-chevron-down submenu-arrow"></i>

                        </a>


                        <ul class="submenu">

                            <!-- INTERMEDIATE -->
                            <li class="has-submenu">

                                <a href="#">

                                    Intermediate Programs

                                    <i class="fas fa-chevron-right submenu-arrow"></i>

                                </a>


                                <ul class="submenu submenu-right">

                                    <li>
                                        <a href="pre-medical.html">
                                            Pre-Medical
                                        </a>
                                    </li>

                                    <li>
                                        <a href="pre-engineering.html">
                                            Pre-Engineering
                                        </a>
                                    </li>

                                    <li>
                                        <a href="computer-science.html">
                                            Computer Science
                                        </a>
                                    </li>

                                    <li>
                                        <a href="commerce.html">
                                            Commerce
                                        </a>
                                    </li>

                                    <li>
                                        <a href="humanities.html">
                                            Humanities
                                        </a>
                                    </li>

                                </ul>

                            </li>


                            <!-- ASSOCIATE DEGREE -->
                            <li class="has-submenu">

                                <a href="#">

                                    Associate Degree Programs

                                    <i class="fas fa-chevron-right submenu-arrow"></i>

                                </a>


                                <ul class="submenu submenu-right">

                                    <li>
                                        <a href="associate-science.html">
                                            Associate Degree in Science
                                        </a>
                                    </li>

                                    <li>
                                        <a href="associate-commerce.html">
                                            Associate Degree in Commerce
                                        </a>
                                    </li>

                                    <li>
                                        <a href="associate-arts.html">
                                            Associate Degree in Arts
                                        </a>
                                    </li>

                                </ul>

                            </li>


                            <!-- FACULTY -->
                            <li>
                                <a href="faculty.html">
                                    Faculty
                                </a>
                            </li>

                        </ul>

                    </li>


                    <!-- ADMISSIONS -->
                    <li class="has-submenu">

                        <a href="#">

                            ADMISSIONS

                            <i class="fas fa-chevron-down submenu-arrow"></i>

                        </a>


                        <ul class="submenu">

                            <li>
                                <a href="eligibility.html">
                                    Eligibility
                                </a>
                            </li>

                            <li>
                                <a href="fee-structure.html">
                                    Fee Structure
                                </a>
                            </li>

                            <li>
                                <a href="admission-process.html">
                                    Admission Process
                                </a>
                            </li>

                        </ul>

                    </li>


                    <!-- STUDENTS -->
                    <li class="has-submenu">

                        <a href="#">

                            STUDENTS

                            <i class="fas fa-chevron-down submenu-arrow"></i>

                        </a>


                        <ul class="submenu">

                            <li>
                                <a href="time-table.html">
                                    Time Table
                                </a>
                            </li>

                            <li>
                                <a href="examinations.html">
                                    Examinations
                                </a>
                            </li>

                            <li>
                                <a href="results.html">
                                    Results
                                </a>
                            </li>

                        </ul>

                    </li>


                    <!-- LIBRARY -->
                    <li>

                        <a href="library.html">
                            LIBRARY
                        </a>

                    </li>


                    <!-- NEWS & EVENTS -->
                    <li>

                        <a href="news-events.html">
                            NEWS & EVENTS
                        </a>

                    </li>


                    <!-- DOWNLOADS -->
                    <li class="has-submenu">

                        <a href="#">

                            DOWNLOADS

                            <i class="fas fa-chevron-down submenu-arrow"></i>

                        </a>


                        <ul class="submenu">

                            <li>
                                <a href="prospectus.html">
                                    Prospectus
                                </a>
                            </li>

                            <li>
                                <a href="forms.html">
                                    Forms
                                </a>
                            </li>

                            <li>
                                <a href="notices.html">
                                    Notices
                                </a>
                            </li>

                        </ul>

                    </li>


                    <!-- GALLERY -->
                    <li>

                        <a href="gallery.html">
                            GALLERY
                        </a>

                    </li>


                    <!-- CONTACT -->
                    <li>

                        <a href="contact.html">
                            CONTACT US
                        </a>

                    </li>


                </ul>

            </div>

        </nav>

        `;


        /* =================================================
           MOBILE MENU
        ================================================== */

        const menuToggle =
            document.getElementById("menuToggle");

        const navMenu =
            document.getElementById("navMenu");


        if (menuToggle && navMenu) {

            menuToggle.addEventListener("click", function () {

                navMenu.classList.toggle("active");

            });

        }


        /* =================================================
           SUBMENU CLICK
        ================================================== */

        const submenuParents =
            document.querySelectorAll(
                ".nav-menu .has-submenu > a"
            );


        submenuParents.forEach(function (link) {

            link.addEventListener("click", function (event) {

                event.preventDefault();

                const parent =
                    this.parentElement;

                parent.classList.toggle("submenu-open");

            });

        });

    }



    /* =====================================================
       COMMON FOOTER
    ====================================================== */

    const footer =
        document.getElementById("footer");


    if (footer) {

        footer.innerHTML = `

        <footer class="site-footer">

            <div class="container">

                <div class="footer-content">

                    <div>

                        <h3>
                            Government Boys Degree College Shahdadpur
                        </h3>

                        <p>
                            Government Boys Degree College
                            Shahdadpur, District Sanghar, Sindh.
                        </p>

                    </div>


                    <div>

                        <h3>
                            Quick Links
                        </h3>

                        <a href="index.html">
                            Home
                        </a>

                        <a href="college-overview.html">
                            College Overview
                        </a>

                        <a href="faculty.html">
                            Faculty
                        </a>

                        <a href="contact.html">
                            Contact Us
                        </a>

                    </div>


                    <div>

                        <h3>
                            Contact
                        </h3>

                        <p>
                            Shahdadpur,
                            District Sanghar,
                            Sindh, Pakistan
                        </p>

                    </div>

                </div>


                <div class="footer-bottom">

                    <p>
                        © 2026 Government Boys Degree College
                        Shahdadpur. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>

        `;

    }

});