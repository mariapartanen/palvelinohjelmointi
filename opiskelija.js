// Konstruktorifunktio
function Opiskelija(etunimi, sukunimi, aloitusvuosi, sahkoposti) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.aloitusvuosi = aloitusvuosi
    this.sahkoposti = sahkoposti;
    this.palautaTiedot = function() {
        return this.etunimi + ' ' + this.sukunimi + ', aloittanut ' + this.
        aloitusvuosi + ' (sahkoposti: ' + this.sahkoposti + ')';
    }
}
let opiskelija1 = new Opiskelija('Maija', 'Mallikas', 2010);
opiskelija1.sahkoposti = 'maija.mallikas@joku.fi';
console.log(opiskelija1.palautaTiedot());
let opiskelija2 = new Opiskelija('Matti', 'Meikäläinen', 2011, 'matti@gmail.com');
opiskelija1.sahkoposti = 'maija.mallikas@joku.fi';
console.log(opiskelija2.palautaTiedot());