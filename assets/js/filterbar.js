const datein = ['f1', 'wec', 'dtm', 'nascar', 'wrc', 'motogp'];

async function LadeAlleRennen() {
    const promises = datein.map(d => fetch(`data/${d}.json`).then(r => r.json()));
    const ergebnisse = await Promise.all(promises);
    const alleRennen = ergebnisse.flat();

    alleRennen.sort((a, b) => new Date(a.datum_start) - new Date(b.datum_start));
}