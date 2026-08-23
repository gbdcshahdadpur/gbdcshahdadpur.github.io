<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <meta name="description"
          content="Class Timetable and Teacher Workload - Government Boys Degree College Shahdadpur">

    <meta name="keywords"
          content="GBDC Shahdadpur, timetable, class timetable, teacher workload, Intermediate, Associate Degree">

    <title>
        Time Table | Government Boys Degree College Shahdadpur
    </title>


    <!-- =====================================================
         GOOGLE FONTS
    ====================================================== -->

    <link rel="preconnect"
          href="https://fonts.googleapis.com">

    <link rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet">


    <!-- =====================================================
         FONT AWESOME
    ====================================================== -->

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">


    <!-- =====================================================
         TIMETABLE CSS
    ====================================================== -->

    <link rel="stylesheet"
          href="css/timetable.css">

</head>


<body>


    <!-- =====================================================
         SHARED HEADER
         College logo + college name + menus are loaded from
         header.html through header-footer.js
    ====================================================== -->

    <div id="header-container"></div>



    <!-- =====================================================
         PAGE HERO
    ====================================================== -->

    <section class="page-hero">

        <div class="hero-overlay"></div>

        <div class="hero-content">

            <span class="hero-label">

                <i class="fas fa-calendar-days"></i>

                ACADEMIC SCHEDULE

            </span>


            <h1>
                Class Time Table
            </h1>


            <p>
                Government Boys Degree College Shahdadpur
            </p>

        </div>

    </section>



    <!-- =====================================================
         MAIN CONTENT
    ====================================================== -->

    <main class="timetable-page">


        <!-- =================================================
             INTRODUCTION
        ================================================== -->

        <section class="intro-section">

            <div class="section-label">

                <i class="fas fa-clock"></i>

                ACADEMIC TIMETABLE

            </div>


            <h2>
                Class Time Table
            </h2>


            <p>

                View the complete class timetable for
                Intermediate and Associate Degree Programs.
                Select your program below to view the
                respective class schedule.

            </p>

        </section>



        <!-- =================================================
             SEARCH + PRINT
        ================================================== -->

        <div class="timetable-tools">


            <div class="search-box">

                <i class="fas fa-search"></i>

                <input
                    type="text"
                    id="timetableSearch"
                    placeholder="Search class, subject or teacher..."
                    autocomplete="off">

            </div>


            <button
                type="button"
                class="print-btn"
                id="printTimetable">

                <i class="fas fa-print"></i>

                Print Timetable

            </button>


        </div>



        <!-- =================================================
             PROGRAM SELECTOR
        ================================================== -->

        <div class="program-selector">


            <button
                type="button"
                class="program-btn active"
                data-target="xiPanel">

                <i class="fas fa-school"></i>

                XI — Intermediate

            </button>


            <button
                type="button"
                class="program-btn"
                data-target="xiiPanel">

                <i class="fas fa-school"></i>

                XII — Intermediate

            </button>


            <button
                type="button"
                class="program-btn"
                data-target="ad1Panel">

                <i class="fas fa-university"></i>

                Associate Degree Part-I

            </button>


            <button
                type="button"
                class="program-btn"
                data-target="ad2Panel">

                <i class="fas fa-university"></i>

                Associate Degree Part-II

            </button>


        </div>



        <!-- =================================================
             XI — INTERMEDIATE
        ================================================== -->

        <section
            class="table-panel active"
            id="xiPanel">


            <div class="table-heading">


                <div>

                    <span class="table-kicker">

                        INTERMEDIATE PROGRAM

                    </span>


                    <h3>

                        <i class="fas fa-school"></i>

                        XI — Intermediate

                    </h3>

                </div>


                <span class="badge">

                    XI Timetable

                </span>


            </div>



            <div class="table-wrapper">

                <table
                    class="timetable"
                    id="xiTimetable">


                    <thead>

                        <tr>

                            <th>
                                Class
                            </th>


                            <th>

                                P-I

                                <span class="period-time">
                                    9:00 – 9:40
                                </span>

                            </th>


                            <th>

                                P-II

                                <span class="period-time">
                                    9:40 – 10:20
                                </span>

                            </th>


                            <th>

                                P-III

                                <span class="period-time">
                                    10:20 – 11:00
                                </span>

                            </th>


                            <th class="break-header">

                                BREAK

                                <span class="period-time">
                                    11:00 – 11:15
                                </span>

                            </th>


                            <th>

                                P-IV

                                <span class="period-time">
                                    11:15 – 11:55
                                </span>

                            </th>


                            <th>

                                P-V

                                <span class="period-time">
                                    11:55 – 12:35
                                </span>

                            </th>


                            <th>

                                P-VI

                                <span class="period-time">
                                    12:35 – 1:15
                                </span>

                            </th>


                            <th class="prayer-header">

                                PRAYER

                                <span class="period-time">
                                    1:15 – 1:45
                                </span>

                            </th>


                            <th>

                                P-VII

                                <span class="period-time">
                                    1:45 – 2:30
                                </span>

                            </th>

                        </tr>

                    </thead>


                    <tbody id="xiTable">

                    </tbody>


                </table>

            </div>


        </section>



        <!-- =================================================
             XII — INTERMEDIATE
        ================================================== -->

        <section
            class="table-panel"
            id="xiiPanel">


            <div class="table-heading">


                <div>

                    <span class="table-kicker">

                        INTERMEDIATE PROGRAM

                    </span>


                    <h3>

                        <i class="fas fa-school"></i>

                        XII — Intermediate

                    </h3>

                </div>


                <span class="badge">

                    XII Timetable

                </span>


            </div>



            <div class="table-wrapper">

                <table
                    class="timetable"
                    id="xiiTimetable">


                    <thead>

                        <tr>

                            <th>
                                Class
                            </th>


                            <th>

                                P-I

                                <span class="period-time">
                                    9:00 – 9:40
                                </span>

                            </th>


                            <th>

                                P-II

                                <span class="period-time">
                                    9:40 – 10:20
                                </span>

                            </th>


                            <th>

                                P-III

                                <span class="period-time">
                                    10:20 – 11:00
                                </span>

                            </th>


                            <th class="break-header">

                                BREAK

                                <span class="period-time">
                                    11:00 – 11:15
                                </span>

                            </th>


                            <th>

                                P-IV

                                <span class="period-time">
                                    11:15 – 11:55
                                </span>

                            </th>


                            <th>

                                P-V

                                <span class="period-time">
                                    11:55 – 12:35
                                </span>

                            </th>


                            <th>

                                P-VI

                                <span class="period-time">
                                    12:35 – 1:15
                                </span>

                            </th>


                            <th class="prayer-header">

                                PRAYER

                                <span class="period-time">
                                    1:15 – 1:45
                                </span>

                            </th>


                            <th>

                                P-VII

                                <span class="period-time">
                                    1:45 – 2:30
                                </span>

                            </th>

                        </tr>

                    </thead>


                    <tbody id="xiiTable">

                    </tbody>


                </table>

            </div>


        </section>



        <!-- =================================================
             ASSOCIATE DEGREE PART-I
        ================================================== -->

        <section
            class="table-panel"
            id="ad1Panel">


            <div class="table-heading">


                <div>

                    <span class="table-kicker">

                        ASSOCIATE DEGREE PROGRAM

                    </span>


                    <h3>

                        <i class="fas fa-university"></i>

                        Associate Degree — Part-I

                    </h3>

                </div>


                <span class="badge">

                    Part-I Timetable

                </span>


            </div>



            <div class="table-wrapper">

                <table
                    class="timetable"
                    id="ad1Timetable">


                    <thead>

                        <tr>

                            <th>
                                Class
                            </th>


                            <th>

                                P-I

                                <span class="period-time">
                                    9:00 – 9:40
                                </span>

                            </th>


                            <th>

                                P-II

                                <span class="period-time">
                                    9:40 – 10:20
                                </span>

                            </th>


                            <th>

                                P-III

                                <span class="period-time">
                                    10:20 – 11:00
                                </span>

                            </th>


                            <th class="break-header">

                                BREAK

                                <span class="period-time">
                                    11:00 – 11:15
                                </span>

                            </th>


                            <th>

                                P-IV

                                <span class="period-time">
                                    11:15 – 11:55
                                </span>

                            </th>


                            <th>

                                P-V

                                <span class="period-time">
                                    11:55 – 12:35
                                </span>

                            </th>


                            <th>

                                P-VI

                                <span class="period-time">
                                    12:35 – 1:15
                                </span>

                            </th>


                            <th class="prayer-header">

                                PRAYER

                                <span class="period-time">
                                    1:15 – 1:45
                                </span>

                            </th>


                            <th>

                                P-VII

                                <span class="period-time">
                                    1:45 – 2:30
                                </span>

                            </th>

                        </tr>

                    </thead>


                    <tbody id="ad1Table">

                    </tbody>


                </table>

            </div>


        </section>



        <!-- =================================================
             ASSOCIATE DEGREE PART-II
        ================================================== -->

        <section
            class="table-panel"
            id="ad2Panel">


            <div class="table-heading">


                <div>

                    <span class="table-kicker">

                        ASSOCIATE DEGREE PROGRAM

                    </span>


                    <h3>

                        <i class="fas fa-university"></i>

                        Associate Degree — Part-II

                    </h3>

                </div>


                <span class="badge">

                    Part-II Timetable

                </span>


            </div>



            <div class="table-wrapper">

                <table
                    class="timetable"
                    id="ad2Timetable">


                    <thead>

                        <tr>

                            <th>
                                Class
                            </th>


                            <th>

                                P-I

                                <span class="period-time">
                                    9:00 – 9:40
                                </span>

                            </th>


                            <th>

                                P-II

                                <span class="period-time">
                                    9:40 – 10:20
                                </span>

                            </th>


                            <th>

                                P-III

                                <span class="period-time">
                                    10:20 – 11:00
                                </span>

                            </th>


                            <th class="break-header">

                                BREAK

                                <span class="period-time">
                                    11:00 – 11:15
                                </span>

                            </th>


                            <th>

                                P-IV

                                <span class="period-time">
                                    11:15 – 11:55
                                </span>

                            </th>


                            <th>

                                P-V

                                <span class="period-time">
                                    11:55 – 12:35
                                </span>

                            </th>


                            <th>

                                P-VI

                                <span class="period-time">
                                    12:35 – 1:15
                                </span>

                            </th>


                            <th class="prayer-header">

                                PRAYER

                                <span class="period-time">
                                    1:15 – 1:45
                                </span>

                            </th>


                            <th>

                                P-VII

                                <span class="period-time">
                                    1:45 – 2:30
                                </span>

                            </th>

                        </tr>

                    </thead>


                    <tbody id="ad2Table">

                    </tbody>


                </table>

            </div>


        </section>



        <!-- =================================================
             TEACHER WORKLOAD
        ================================================== -->

        <section class="workload-section">


            <div class="workload-heading">

                <span>
                    FACULTY WORKLOAD
                </span>


                <h2>
                    Teacher Workload
                </h2>


                <p>
                    Teaching assignments calculated from
                    the timetable.
                </p>

            </div>



            <div
                class="workload-grid"
                id="workloadGrid">

            </div>



            <!-- =============================================
                 SUBJECT LEGEND
            ============================================== -->

            <div class="legend">


                <h3>

                    <i class="fas fa-palette"></i>

                    Subject Colour Legend

                </h3>


                <div
                    class="legend-grid"
                    id="legendGrid">

                </div>


            </div>


        </section>



        <!-- =================================================
             NO SEARCH RESULTS
        ================================================== -->

        <div
            id="noResults"
            class="no-results"
            style="display:none;">

            <i class="fas fa-search"></i>

            <h3>
                No timetable results found
            </h3>

            <p>
                Try searching for another class,
                subject or teacher.
            </p>

        </div>


    </main>



    <!-- =====================================================
         SHARED FOOTER
    ====================================================== -->

    <div id="footer-container"></div>



    <!-- =====================================================
         SHARED HEADER / FOOTER JAVASCRIPT
    ====================================================== -->

    <script src="js/header-footer.js"></script>



    <!-- =====================================================
         TIME TABLE + TEACHER WORKLOAD JAVASCRIPT
    ====================================================== -->

    <script src="js/timetable.js"></script>



    <!-- =====================================================
         SEARCH FUNCTION
    ====================================================== -->

    <script>

        document.addEventListener(
            "DOMContentLoaded",
            function () {


                const searchInput =
                    document.getElementById(
                        "timetableSearch"
                    );


                const noResults =
                    document.getElementById(
                        "noResults"
                    );


                if (!searchInput)
                    return;


                searchInput.addEventListener(
                    "input",
                    function () {


                        const search =
                            this.value
                                .trim()
                                .toLowerCase();


                        const rows =
                            document.querySelectorAll(
                                ".timetable tbody tr"
                            );


                        let found = false;


                        rows.forEach(row => {


                            const text =
                                row.textContent
                                    .toLowerCase();


                            if (
                                !search ||
                                text.includes(search)
                            ) {

                                row.style.display =
                                    "";

                                found = true;

                            } else {

                                row.style.display =
                                    "none";

                            }

                        });


                        if (noResults) {

                            noResults.style.display =
                                (
                                    search &&
                                    !found
                                )
                                    ? "block"
                                    : "none";

                        }

                    });

            });

    </script>



    <!-- =====================================================
         PRINT FUNCTION
    ====================================================== -->

    <script>

        document.addEventListener(
            "DOMContentLoaded",
            function () {


                const printButton =
                    document.getElementById(
                        "printTimetable"
                    );


                if (!printButton)
                    return;


                printButton.addEventListener(
                    "click",
                    function () {

                        window.print();

                    });

            });

    </script>


</body>

</html>