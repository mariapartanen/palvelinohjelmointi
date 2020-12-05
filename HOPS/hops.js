// Luodaan opintojakso-olio konstruktori
function Opintojakso(nimi, laajuus, ajoitus) {
this.nimi = nimi;
this.laajuus = laajuus;
this.ajoitus = ajoitus;
this.lisaaTaulukkoon = function() {
    // Luodaan rivi
    let uusiRivi = document.createElement('tr');
    // Luodaan nimi-solu
    let uusiSolu = document.createElement('td');
    // Lisätään solulle sisältöä
    uusiSolu.innerHTML = this.nimi;
    // Lisätään solu riville
    uusiRivi = appendChild(uusiSolu);
    // Luodaan laajuus-solu
    uusiSolu = document.createElement('td');
    // Lisätään solu riville
    uusiRivi.appendChild(uusiSolu);
    // Luodaan ajoitus-solu
    uusiSolu = document.createElement('td');
    // Lisätään solulle sisältö
    uusiSolu.innerHTML = this.ajoitus;
    // Lisätään solu riville
    uusiRivi.appendChild(uusiSolu);
    // Lisätään rivi tableen
    document.getElementById('opintojaksoTable').appendChild(uusiRivi);


}
}

// Lisää-painikkeen käsittely
document.getElementById('lisaaKurssi').onclick = function() {
    // Hae kentistä tiedot ja luodaan niiden perusteella uusi olio
    let ajoitusValinta = document.getElementById('ajoitus');
    let uusiOpintojakso = new Opintojakso(document.getElementById('nimi').value,
    document.getElementById('laajuus').value, ajoitusValinta[ajoitusValinta.
    selectedIndex].innerHTML);
    // Kutsutaan luodun olion listaaTaulukkon-metodia
    uusiOpintojakso.lisaaTaulukkoon();
    return false;
}