fetch('./assets/data/wc_winner.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('winners');
        data.forEach(item => {
            container.innerHTML += `
                <div class="winner-card">
                    <h5>${item.series}</h5>
                    <span>Name: ${item.winner}</span>
                    <span>Team: ${item.team}</span>
                </div>
            `;
        });
    });