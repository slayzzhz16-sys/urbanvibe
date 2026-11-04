class Evenement {
  constructor(nom, date, lieu) {
    this.nom = nom;
    this.date = date;
    this.lieu = lieu;
  }

  carte() {
    return `
      <li class="carte">
        <h3>${this.nom}</h3>
        <p>${this.lieu}</p>
        <p>${this.date}</p>
      </li>`;
  }
}

class Concert extends Evenement {
  constructor(nom, date, lieu, heureDebut, duree, style) {
    super(nom, date, lieu);
    this.heureDebut = heureDebut; // "HH:MM", ex : "21:00"
    this.duree = duree;           // en minutes, ex : 60
    this.style = style;
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
        <p>${this.style}</p>
        <p>${this.lieu}</p>
        <p>${this.date}</p>
        <p>${this.heureDebut} - ${this.heureFin()}</p>
      </li>`;
  }
}

class Activite extends Evenement {
  constructor(nom, date, lieu, horaires, description) {
    super(nom, date, lieu);
    this.horaires = horaires;       // "14h-18h"
    this.description = description;
  }

  carte() {
    return `
      <li class="carte">
        <h3>${this.nom}</h3>
        <p>${this.lieu}</p>
        <p>${this.date}</p>
        <p>${this.horaires}</p>
        <p>${this.description}</p>
      </li>`;
  }
  
}
const programme = document.querySelector("#programme");

