document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Έλεγχος αν υπάρχει αποθηκευμένη προτίμηση
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Ήλιος όταν είναι σκοτεινή λειτουργία
    } else {
        darkModeToggle.textContent = '🌙'; // Φεγγάρι όταν είναι φωτεινή λειτουργία
    }

    darkModeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.textContent = '🌙'; // Επιστροφή σε φεγγάρι
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = '☀️'; // Αλλαγή σε ήλιο
        }
    });
});
