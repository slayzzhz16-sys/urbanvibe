// Afficher la liste qu'on lui donne
function afficher(liste) {
  // Les cartes, comme avant
  const zone = document.querySelector("#programme");
  zone.innerHTML = liste.map((ev) => ev.carte()).join("");

  // Le compteur : un message si la liste est vide, sinon le nombre
  const compteur = document.querySelector("#compteur");
  if (liste.length === 0) {
    compteur.textContent = "Aucun événement ne correspond… essaie un autre mot !";
  } else if (liste.length === 1) {
    compteur.textContent = "1 événement";
  } else {
    compteur.textContent = liste.length + " événements";
  }
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

// Les deux choix du visiteur, retenus en mémoire
let jourChoisi = "tout";
let motCherche = "";

function mettreAJour() {
  // Je pars de tout le programme
  let liste = programme;
  // Filtre 1 : le jour, si un jour est choisi
  if (jourChoisi !== "tout") {
    liste = liste.filter((ev) => ev.date === jourChoisi);
  }
  // Filtre 2 : le mot cherché (tout en minuscules des deux côtés)
  liste = liste.filter((ev) => ev.nom.toLowerCase().includes(motCherche));
  // J'affiche ce qui reste
  afficher(liste);
}

// Au chargement : tout le programme
mettreAJour();

// Les boutons de filtre (chacun porte son jour dans data-jour)
document.querySelectorAll(".filtres button").forEach((bouton) => {
  bouton.addEventListener("click", () => {
    jourChoisi = bouton.dataset.jour;
    activer(bouton);
    mettreAJour();
  });
});

// Chercher : à chaque lettre tapée ou effacée
const recherche = document.querySelector("#recherche");
recherche.addEventListener("input", () => {
  motCherche = recherche.value.toLowerCase();
  mettreAJour();
});

// Trier : quand le visiteur choisit une option du menu
const tri = document.querySelector("#tri");
tri.addEventListener("change", () => {
  if (tri.value === "nom") {
    // Par nom : ordre alphabétique
    programme.sort((a, b) => a.nom.localeCompare(b.nom));
  } else if (tri.value === "heure") {
    // Par heure : du texte au format "09:00", donc localeCompare
    programme.sort((a, b) => a.heureDebut.localeCompare(b.heureDebut));
  } else if (tri.value === "duree") {
    // Par durée : un nombre, donc une soustraction
    programme.sort((a, b) => a.duree - b.duree);
  } else {
    // Ordre du programme : on remet la liste de départ
    programme.splice(0, programme.length, ...concerts.concat(activites));
  }
  // La liste est rangée : je l'affiche (en gardant le jour et le mot choisis)
  mettreAJour();
});
