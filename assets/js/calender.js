const datein = ['f1', 'wec', 'dtm', 'nascar', 'wrc', 'motogp'];

async function LadeAlleRennen() {
    const promises = datein.map(d => fetch(`data/${d}.json`).then(r => r.json()));
    const ergebnisse = await Promise.all(promises);
    const alleRennen = ergebnisse.flat();

    alleRennen.sort((a, b) => new Date(a.datum_start) - new Date(b.datum_start));
}


const flags = {
  "Afghanistan":                "af",
  "Albania":                    "al",
  "Algeria":                    "dz",
  "Andorra":                    "ad",
  "Angola":                     "ao",
  "Antigua and Barbuda":        "ag",
  "Argentina":                  "ar",
  "Armenia":                    "am",
  "Australia":                  "au",
  "Austria":                    "at",
  "Azerbaijan":                 "az",

  "Bahamas":                    "bs",
  "Bahrain":                    "bh",
  "Bangladesh":                 "bd",
  "Barbados":                   "bb",
  "Belarus":                    "by",
  "Belgium":                    "be",
  "Belize":                     "bz",
  "Benin":                      "bj",
  "Bhutan":                     "bt",
  "Bolivia":                    "bo",
  "Bosnia and Herzegovina":     "ba",
  "Botswana":                   "bw",
  "Brazil":                     "br",
  "Brunei":                     "bn",
  "Bulgaria":                   "bg",
  "Burkina Faso":               "bf",
  "Burundi":                    "bi",

  "Cabo Verde":                 "cv",
  "Cambodia":                   "kh",
  "Cameroon":                   "cm",
  "Canada":                     "ca",
  "Central African Republic":   "cf",
  "Chad":                       "td",
  "Chile":                      "cl",
  "China":                      "cn",
  "Colombia":                   "co",
  "Comoros":                    "km",
  "Congo":                      "cg",
  "Costa Rica":                 "cr",
  "Croatia":                    "hr",
  "Cuba":                       "cu",
  "Cyprus":                     "cy",
  "Czech Republic":             "cz",

  "Denmark":                    "dk",
  "Djibouti":                   "dj",
  "Dominica":                   "dm",
  "Dominican Republic":         "do",

  "Ecuador":                    "ec",
  "Egypt":                      "eg",
  "El Salvador":                "sv",
  "Equatorial Guinea":          "gq",
  "Eritrea":                    "er",
  "Estonia":                    "ee",
  "Eswatini":                   "sz",
  "Ethiopia":                   "et",

  "Fiji":                       "fj",
  "Finland":                    "fi",
  "France":                     "fr",

  "Gabon":                      "ga",
  "Gambia":                     "gm",
  "Georgia":                    "ge",
  "Germany":                    "de",
  "Ghana":                      "gh",
  "Greece":                     "gr",
  "Grenada":                    "gd",
  "Guatemala":                  "gt",
  "Guinea":                     "gn",
  "Guinea-Bissau":              "gw",
  "Guyana":                     "gy",

  "Haiti":                      "ht",
  "Honduras":                   "hn",
  "Hungary":                    "hu",

  "Iceland":                    "is",
  "India":                      "in",
  "Indonesia":                  "id",
  "Iran":                       "ir",
  "Iraq":                       "iq",
  "Ireland":                    "ie",
  "Israel":                     "il",
  "Italy":                      "it",

  "Jamaica":                    "jm",
  "Japan":                      "jp",
  "Jordan":                     "jo",

  "Kazakhstan":                 "kz",
  "Kenya":                      "ke",
  "Kiribati":                   "ki",
  "Kuwait":                     "kw",
  "Kyrgyzstan":                 "kg",

  "Laos":                       "la",
  "Latvia":                     "lv",
  "Lebanon":                    "lb",
  "Lesotho":                    "ls",
  "Liberia":                    "lr",
  "Libya":                      "ly",
  "Liechtenstein":              "li",
  "Lithuania":                  "lt",
  "Luxembourg":                 "lu",

  "Madagascar":                 "mg",
  "Malawi":                     "mw",
  "Malaysia":                   "my",
  "Maldives":                   "mv",
  "Mali":                       "ml",
  "Malta":                      "mt",
  "Marshall Islands":           "mh",
  "Mauritania":                 "mr",
  "Mauritius":                  "mu",
  "Mexico":                     "mx",
  "Micronesia":                 "fm",
  "Moldova":                    "md",
  "Monaco":                     "mc",
  "Mongolia":                   "mn",
  "Montenegro":                 "me",
  "Morocco":                    "ma",
  "Mozambique":                 "mz",
  "Myanmar":                    "mm",

  "Namibia":                    "na",
  "Nauru":                      "nr",
  "Nepal":                      "np",
  "Netherlands":                "nl",
  "New Zealand":                "nz",
  "Nicaragua":                  "ni",
  "Niger":                      "ne",
  "Nigeria":                    "ng",
  "North Korea":                "kp",
  "North Macedonia":            "mk",
  "Norway":                     "no",

  "Oman":                       "om",

  "Pakistan":                   "pk",
  "Palau":                      "pw",
  "Palestine":                  "ps",
  "Panama":                     "pa",
  "Papua New Guinea":           "pg",
  "Paraguay":                   "py",
  "Peru":                       "pe",
  "Philippines":                "ph",
  "Poland":                     "pl",
  "Portugal":                   "pt",

  "Qatar":                      "qa",

  "Romania":                    "ro",
  "Russia":                     "ru",
  "Rwanda":                     "rw",

  "Saint Kitts and Nevis":      "kn",
  "Saint Lucia":                "lc",
  "Saint Vincent":              "vc",
  "Samoa":                      "ws",
  "San Marino":                 "sm",
  "Saudi Arabia":               "sa",
  "Senegal":                    "sn",
  "Serbia":                     "rs",
  "Seychelles":                 "sc",
  "Sierra Leone":               "sl",
  "Singapore":                  "sg",
  "Slovakia":                   "sk",
  "Slovenia":                   "si",
  "Solomon Islands":            "sb",
  "Somalia":                    "so",
  "South Africa":               "za",
  "South Korea":                "kr",
  "South Sudan":                "ss",
  "Spain":                      "es",
  "Sri Lanka":                  "lk",
  "Sudan":                      "sd",
  "Suriname":                   "sr",
  "Sweden":                     "se",
  "Switzerland":                "ch",
  "Syria":                      "sy",

  "Taiwan":                     "tw",
  "Tajikistan":                 "tj",
  "Tanzania":                   "tz",
  "Thailand":                   "th",
  "Timor-Leste":                "tl",
  "Togo":                       "tg",
  "Tonga":                      "to",
  "Trinidad and Tobago":        "tt",
  "Tunisia":                    "tn",
  "Turkey":                     "tr",
  "Turkmenistan":               "tm",
  "Tuvalu":                     "tv",

  "Uganda":                     "ug",
  "Ukraine":                    "ua",
  "United Arab Emirates":       "ae",
  "Great Britain":              "gb",
  "United States of America":   "us",
  "Uruguay":                    "uy",
  "Uzbekistan":                 "uz",

  "Vanuatu":                    "vu",
  "Vatican City":               "va",
  "Venezuela":                  "ve",
  "Vietnam":                    "vn",

  "Yemen":                      "ye",

  "Zambia":                     "zm",
  "Zimbabwe":                   "zw",

  "Abu Dhabi":                  "ae",
  "Las Vegas":                  "us",
  "Emilia Romagna":             "it",
  "São Paulo":                  "br",
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDate(startStr, endingStr) {
    const start = new Date(startStr);
    const ending = new Date(endingStr);

    const wd = weekdays[start.getDay()];
    const day = start.getDate();
    const mon = months[start.getMonth()];
    const year = start.getFullYear();
    const eDay = ending.getDate();
    const eMon = months[ending.getMonth()];

    if (mon === eMon) {
        return { main: `${day}.-${eDay}. ${mon} ${year}`, sub: wd };
    }
    return {main: `${day}. ${mon} - ${eDay}. ${eMon} ${year}`, sub: wd };
}

function seriesKey(series) {
    const map = {
        "Formula 1": "F1",
        "World Endurance Championship (WEC)": "WEC",
        "DTM": "DTM",
        "Nascar": "NASCAR",
        "World Rally Championship (WRC)": "WRC",
        "MotoGP": "MotoGP",
        "Indycar": "Indycar",
    };
    return map[series] || series;
}

function renderTable(races) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const future = races.filter(r => new Date(r.date_start) >= today);
    const past = races.filter(r => new Date(r.date_start) < today);

    future.sort((a, b) => new Date(a.date_start) - new Date(b.date_start));
    past.sort((a, b) => new Date(b.date_start) - new Date(a.date_start));

    const sort = [...future, ...past];

    const tbody = document.getElementById('rennen-liste');
    tbody.innerHTML = '';

    sort.forEach((r, idx) => {
        const isNext = idx === 0 && future.length > 0;
        const isPast = new Date(r.date_start) < today;
    
        const key = seriesKey(r.series);
        const code   = flags[r.country] || 'unknown';
        const flag = `<img src="assets/media/images/flags/${code}.svg" 
                 alt="${r.country}" 
                 style="width:28px; height:20px; object-fit:cover; border-radius:2px;">`;
        const date = formatDate(r.date_start, r.date_ending);
    
        let statusHtml = '';
        if (isNext) {
        statusHtml = `<span class="status-badge status-next">Next Race</span>`;
        }   else if (isPast) {
        statusHtml = `<span class="status-badge status-past">✓</span>`;
        }   else {
        statusHtml = `<span class="status-badge status-planned">Planned</span>`;
        }

        const tr = document.createElement('tr');
        if (isNext) tr.classList.add('next');
        if (isPast) tr.classList.add('past');

        tr.innerHTML = `
            <td>
                <span class="series-badge series-${key}">
                <span class="series-dot series-dot-${key}"></span>
                ${r.series}
                </span>
            </td>
            <td>
                ${isNext ? '<span class="next-label">▶ Next Race</span>' : ''}
                <span class="race-name">${r.race}</span>
            </td>
            <td>${r.circuit}</td>
          <td>
            <div class="land-cell">
                ${flag}
                <span>${r.country}</span>
            </div>
        </td>
        <td>
            <div class="date-main">${date.main}</div>
            <div class="date-sub">${date.sub}</div>
        </td>
        <td>${statusHtml}</td>
        `;
        tbody.appendChild(tr);
    });
}

async function loadRaces() {
    const files = ['f1', 'wec', 'dtm', 'nascar', 'wrc', 'motogp', "indycar"];
    let all = [];

    const promises = files.map(d =>
        fetch(`assets/data/${d}.json`)
            .then(r => { if (!r.ok) throw new Error(); return r.json(); })
            .catch(() => [])
    );

     const results = await Promise.all(promises);
  all = results.flat();

  renderTable(all);
}

loadRaces();