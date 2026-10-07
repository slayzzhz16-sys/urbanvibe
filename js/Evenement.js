class Evenement {
  constructor(nom, artiste, scene, date, heureDebut, duree, genre) {
    this.nom = nom;
    this.artiste = artiste;
    this.scene = scene;
    this.date = date;
    this.heureDebut = heureDebut; 
    this.duree = duree;          
    this.genre = genre;
  }

  heureFin() {
    const heures = Number(this.heureDebut.slice(0, 2));
    const minutes = Number(this.heureDebut.slice(3, 5));
    const total = heures * 60 + minutes + this.duree;

    let h = Math.floor(total / 60) % 24;
    let m = total % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    return h + ":" + m;
  }

  carte() {
    return `
      <li class="carte">
        <h3>${this.nom}</h3>
        <p>${this.artiste} - ${this.genre}</p>
        <p>${this.scene}</p>
        <p>${this.heureDebut} - ${this.heureFin()}</p>
      </li>`;
  }
}
