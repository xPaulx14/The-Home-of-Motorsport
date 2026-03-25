fetch('assets/data/icon.json')
    .then(response => response.json())
    .then(data => {
        const cards = document.querySelectorAll('.driver-card');

        cards.forEach(card => {
            const driverKey = card.getAttribute('data-driver');
            const driver = data[driverKey];

            if (driver) {
                const textDiv = card.querySelector('.driver-text');
                textDiv.innerHTML = `
                    <p>World Championships: <span>${driver.titles}</span></p>
                    <p>Races: <span>${driver.races}</span></p>
                    <p>Race Wins: <span>${driver.poles}</span></p>      
                    <p>Fastest Laps: <span>${driver.fastest_laps}</span></p>
                    <p>Career: <span>${driver.career}</span></p>
                    <p>Teams: <span>${driver.teams.join(', ')}</span></p>
                `;
            }
        });
    });