// Duyurular Listesi
const duyurular = [
    "Techno Wolves, FTC yarışmasına katılmaya hazırlanıyor!",
    "Limitless Wolves, FLL turnuvasında lig üçüncüsü olarak Türkiye ulusal turuna yükseldi!",
    "TechnoWolves, Fibonacci şampiyonasında jüri özel ödülü ile Avrasya turuna yükseldi!"
];

const duyuruListesi = document.getElementById("duyuruListesi");
duyurular.forEach(duyuru => {
    const li = document.createElement("li");
    li.textContent = duyuru;
    duyuruListesi.appendChild(li);
});

// Yarışma Başarıları Listesi
const basarilar = [
    { yil: 2025, yarisma: "FLL", takim: "Limitless Wolves", odul: "Lig üçünçülüğü" },
    { yil: 2025, yarisma: "Fibonacci", takim: "Techno Wolves", odul: "Jüri özel ödülü" }
];

const basariListesi = document.getElementById("basariListesi");
basarilar.forEach(basari => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${basari.yil}</td>
        <td>${basari.yarisma}</td>
        <td>${basari.takim}</td>
        <td>${basari.odul}</td>
    `;
    basariListesi.appendChild(tr);
});
