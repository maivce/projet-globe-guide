document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');

    form.addEventListener('submit', function(event) {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const budget = document.getElementById('budget').value;

        // Validate dates
        if (new Date(startDate) > new Date(endDate)) {
            alert('La date de début doit être antérieure à la date de fin.');
            event.preventDefault();
            return;
        }

        // Validate budget
        if (budget <= 500) {
            alert('Le budget doit être supérieur à 500.');
            event.preventDefault();
            return;
        }
    });
});