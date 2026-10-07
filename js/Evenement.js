class Evenement {
  constructor() {
  }

  heureFin() {
    const heures = Number(this..slice(0, 2));
    const minutes = Number(this..slice(3, 5));
    const total = heures * 60 + minutes + this.;

    let h = Math.floor(total / 60) % 24;
    let m = total % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    return h + ":" + m;
  }

  carte() {
    return `
      <li class="carte">
        <h3>${}</h3>
      </li>`;
  }
}
