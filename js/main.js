// Afficher la liste qu'on lui donne
function afficher(liste) {
  const zone = document.querySelector("#programme");
  zone.innerHTML = liste.map((ev) => ev.carte()).join("");
}

// Éteindre tous les boutons, puis allumer celui qu'on a touché
function activer(bouton) {
  document.querySelectorAll(".filtres button").forEach((b) => {
    b.classList.remove("actif");
    b.setAttribute("aria-pressed", "false");
  });
  bouton.classList.add("actif");
  bouton.setAttribute("aria-pressed", "true");
}

// Au chargement : tout le programme
afficher(programme);

// Les boutons de filtre (chacun porte son jour dans data-jour)
document.querySelectorAll(".filtres button").forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const jour = bouton.dataset.jour;

    if (jour === "tout") {
      afficher(programme);
    } else {
      afficher(programme.filter((ev) => ev.date === jour));
    }

    activer(bouton);
  });
});
