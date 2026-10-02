/* =========================================
   REDACT AGENT JAVASCRIPT
========================================= */


/* Get elements */

const scanner =
    document.getElementById("scannerLine");

const scannerArea =
    document.getElementById("scannerArea");


const rows = [

    document.getElementById("row1"),

    document.getElementById("row2"),

    document.getElementById("row3"),

    document.getElementById("row4")

];


const status =
    document.getElementById("status");


const protection =
    document.getElementById("protection");


const protectionText =
    document.getElementById("protectionText");


let scanTimers = [];


/* =========================================
   START SCANNER
========================================= */

function startScan() {


    /* Clear previous timers */

    scanTimers.forEach(function(timer) {

        clearTimeout(timer);

    });

    scanTimers = [];


    /* Reset all rows */

    rows.forEach(function(row) {

        row.classList.remove(
            "redacted-row"
        );

    });


    /* Reset protection */

    protection.classList.remove(
        "complete"
    );


    protectionText.textContent =
        "Scanning sensitive information...";


    status.textContent =
        "SCANNING";


    status.style.color =
        "#00e5ff";


    /* Reset scanner */

    scanner.style.transition =
        "none";

    scanner.style.opacity =
        "1";

    scanner.style.top =
        "0px";


    /* Force browser refresh */

    void scanner.offsetHeight;


    /* Calculate scanner movement */

    const scanDistance =
        scannerArea.offsetHeight;


    /*
        Scanner moves from
        TOP → BOTTOM
    */

    scanner.style.transition =
        "top 5s linear";

    scanner.style.top =
        scanDistance + "px";


    /* =====================================
       REDACT WHEN SCANNER PASSES
    ===================================== */


    rows.forEach(function(row, index) {


        const timer =
            setTimeout(function() {


                /*
                    Original content disappears
                    and redacted block appears.
                */

                row.classList.add(
                    "redacted-row"
                );


            }, 1000 + (index * 900));


        scanTimers.push(timer);

    });


    /* =====================================
       SCAN COMPLETE
    ===================================== */


    const finishTimer =
        setTimeout(function() {


            status.textContent =
                "PROTECTED";


            status.style.color =
                "#00e5ff";


            protectionText.textContent =
                "Sensitive information detected & redacted";


            protection.classList.add(
                "complete"
            );


            scanner.style.opacity =
                "0";


        }, 5000);


    scanTimers.push(
        finishTimer
    );

}


/* =========================================
   LAUNCH AGENT
========================================= */

function launchAgent() {


    document
        .getElementById("home")
        .scrollIntoView({
            behavior: "smooth"
        });


    setTimeout(function() {

        startScan();

    }, 700);

}


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(id) {


    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   AUTOMATIC SCAN
========================================= */

window.addEventListener(
    "load",
    function() {


        setTimeout(function() {

            startScan();

        }, 800);


    }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "🛡 Redact Agent Model Initialized"
);