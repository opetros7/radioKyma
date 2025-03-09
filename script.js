document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (!darkModeToggle) {
        console.log("❌ Το κουμπί dark mode δεν βρέθηκε!");
        return;
    }

    console.log("✅ Το κουμπί dark mode βρέθηκε!");

    darkModeToggle.addEventListener("click", function () {
        console.log("🌙 Κουμπί πατήθηκε!");
        
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            darkModeToggle.textContent = "🌙";  // Επιστροφή στη σελήνη
            console.log("🔆 Αλλαγή σε Light Mode!");
        } else {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️";  // Αλλαγή στον ήλιο
            console.log("🌙 Αλλαγή σε Dark Mode!");
        }
    });
});
