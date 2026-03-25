const activeFilters = [];
const filterButtons = document.querySelectorAll('[data-filter]');
const driverCards = document.querySelectorAll('[data-series]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const series = button.getAttribute('data-filter');
        
        if (activeFilters.includes(series)) {
            activeFilters.splice(activeFilters.indexOf(series), 1);
            button.classList.remove('active-filter');
        } else {
            activeFilters.push(series);
            button.classList.add('active-filter');
        }

        driverCards.forEach(card => {
            if (activeFilters.length === 0 || activeFilters.includes(card.getAttribute('data-series'))) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
