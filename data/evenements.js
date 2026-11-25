// titre, jour, heure de début, durée en minutes
  const concerts = [
  new Concert("Tayron Kwidan's", "21 juillet 2027", "Scène afro", "16:30", 45, "Afro"),
  new Concert("Kalash", "21 juillet 2027", "Scène afro", "17:30", 45, "Dancehall / rap"),
  new Concert("Aya Nakamura", "21 juillet 2027", "Grande scène", "19:00", 90, "Afro pop"),
  new Concert("Rihanna", "21 juillet 2027", "Scène pop & R&B", "21:00", 60, "Pop / R&B"),
  new Concert("Jolagreen", "22 juillet 2027", "Scène rap", "16:30", 45, "Rap"),
  new Concert("Tyla", "22 juillet 2027", "Scène pop & R&B", "17:30", 60, "R&B"),
  new Concert("Niska", "22 juillet 2027", "Scène rap", "19:00", 75, "Rap"),
  new Concert("Beyoncé", "22 juillet 2027", "Grande scène", "21:00", 105, "R&B / pop"),
];

const activites = [
  new Activite("Stand de strass dentaires", "21 juillet 2027", "Urban Corner", "14h-18h", "Pose de strass dentaires pour ajouter une touche brillante et originale à son sourire."),
  new Activite("Personnalisation de tote bags", "21 juillet 2027", "Chill & Create", "15h-19h", "Personnalisation de tote bags avec des motifs, des dessins et des éléments inspirés de l'univers musical."),
  new Activite("Atelier de création de bijoux", "22 juillet 2027", "Urban Corner", "14h-18h", "Création de bracelets et d'accessoires personnalisés aux couleurs du festival."),
  new Activite("Personnalisation de tote bags", "22 juillet 2027", "Chill & Create", "15h-19h", "Un deuxième atelier pour repartir avec un tote bag unique, personnalisé selon son style."),
];

// Tout le programme du festival dans une seule liste
const programme = concerts.concat(activites);
