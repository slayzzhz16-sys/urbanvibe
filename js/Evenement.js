class Evenement {
  constructor(nom, date, lieu) {
    this.nom = nom;
    this.date = date;
    this.lieu = lieu;
  }

  carte() {
    return `
      <li class="carte" data-lieu="${this.lieu}">
        <h3>${this.nom}</h3>
        <p class="lieu">${this.lieu}</p>
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
      <li class="carte" data-lieu="${this.lieu}">
        <h3>${this.nom}</h3>
        <p>${this.style}</p>
        <p class="lieu">${this.lieu}</p>
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

    // Pour pouvoir trier les activités comme les concerts,
    // on calcule aussi une heure de début ("14:00") et une durée en minutes.
    const debut = Number(horaires.split("-")[0].replace("h", "")); // 14
    const fin = Number(horaires.split("-")[1].replace("h", ""));   // 18
    this.heureDebut = (debut < 10 ? "0" + debut : debut) + ":00";
    this.duree = (fin - debut) * 60;
  }

  carte() {
    return `
      <li class="carte" data-lieu="${this.lieu}">
        <h3>${this.nom}</h3>
        <p class="lieu">${this.lieu}</p>
        <p>${this.date}</p>
        <p>${this.horaires}</p>
        <p>${this.description}</p>
      </li>`;
  }
  
}

