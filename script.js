document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // ➜ Ελέγχει αν το Dark Mode ήταν ενεργό πριν
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // ➜ Εναλλαγή Dark Mode On/Off
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Αποθηκεύει την επιλογή του χρήστη
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // ➜ Προσθέτει κλάση "live-page" **μόνο αν η σελίδα είναι το live.html**
    if (window.location.pathname.includes("live.html")) {
        body.classList.add("live-page");
    }
});
