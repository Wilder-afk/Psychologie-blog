const artikelen = [
    {
        titel: "Mindfulness in het dagelijks leven",
        inhoud: "Mindfulness helpt je bewust te zijn van het moment en stress te verminderen. Probeer elke dag 5 minuten rustig te ademen en je gedachten te observeren.",
        link: "artikelen.html#mindfulness",
        afbeelding: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        categorie: "Mindfulness",
        views: 120
    },
    {
        titel: "De kracht van stoïcisme",
        inhoud: "Stoïcisme leert je emoties te beheersen en rust te vinden, ongeacht de omstandigheden.",
        link: "artikelen.html#stoicisme",
        afbeelding: "https://images.unsplash.com/photo-1535905748047-14c8a46c14a2?auto=format&fit=crop&w=800&q=80",
        categorie: "Filosofie",
        views: 95
    },
    {
        titel: "Meditatie voor beginners",
        inhoud: "Een korte meditatie van 10 minuten kan al helpen om je focus en rust te verbeteren.",
        link: "artikelen.html#meditatie",
        afbeelding: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=800&q=80",
        categorie: "Mindfulness",
        views: 80
    },
    {
        titel: "Filosofie van het geluk",
        inhoud: "Wat is echt geluk? Filosofen door de eeuwen heen hebben hierover nagedacht.",
        link: "artikelen.html#filosofie",
        afbeelding: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        categorie: "Filosofie",
        views: 110
    },
    {
        titel: "Positief denken",
        inhoud: "Positief denken helpt je dagelijks gelukkiger en productiever te zijn. Begin met drie dingen waar je dankbaar voor bent.",
        link: "artikelen.html#positief-denken",
        afbeelding: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d2?auto=format&fit=crop&w=800&q=80",
        categorie: "Mindfulness",
        views: 50
    },
    {
        titel: "Dankbaarheid oefenen",
        inhoud: "Dankbaarheid helpt je te focussen op positieve dingen in je leven. Schrijf elke dag drie dingen op waar je dankbaar voor bent.",
        link: "artikelen.html#dankbaarheid",
        afbeelding: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
        categorie: "Mindfulness",
        views: 40
    }
];

function toonArtikelen() {
    const container = document.getElementById("artikelen-container");
    if (!container) return;
    container.innerHTML = "";
    artikelen.forEach(artikel => {
        let div = document.createElement("div");
        div.className = "artikel-preview";
        div.innerHTML = `
            <img src="${artikel.afbeelding}" alt="${artikel.titel}">
            <div class="artikel-content">
                <h3>${artikel.titel}</h3>
                <p class="categorie">${artikel.categorie}</p>
                <p>${artikel.inhoud}</p>
                <a href="${artikel.link}">Lees meer</a>
            </div>
        `;
        container.appendChild(div);
    });
}

function toonArtikelenPagina() {
    const alleArtikelen = document.getElementById("alle-artikelen");
    const sidebarPopulair = document.getElementById("sidebar-populair");
    const sidebarCategorie = document.getElementById("sidebar-categorie");
    if (!alleArtikelen) return;

    alleArtikelen.innerHTML = "";
    artikelen.forEach(artikel => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h2>${artikel.titel}</h2>
            <p class="categorie">${artikel.categorie}</p>
            <img src="${artikel.afbeelding}" alt="${artikel.titel}">
            <p>${artikel.inhoud}</p>
        `;
        alleArtikelen.appendChild(div);
    });

    sidebarPopulair.innerHTML = "";
    const populair = artikelen.sort((a,b) => b.views - a.views).slice(0,3);
    populair.forEach(artikel => {
        let a = document.createElement("a");
        a.href = artikel.link;
        a.textContent = artikel.titel;
        sidebarPopulair.appendChild(a);
    });

    sidebarCategorie.innerHTML = "";
    const categorieën = [...new Set(artikelen.map(a => a.categorie))];
    categorieën.forEach(cat => {
        let div = document.createElement("div");
        div.className = "categorie-item";
        div.textContent = cat;
        sidebarCategorie.appendChild(div);
    });
}

// Artikelen tonen
toonArtikelen();
toonArtikelenPagina();
