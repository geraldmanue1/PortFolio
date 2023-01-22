// Créer une fonction pour sélectionner des éléments

// Ouvrir et fermer la navigation au clic
const menuIcon = document.querySelector(".menu-icons");
menuIcon.addEventListener("click", () => {
    console.log("OK");
    const nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("active");
});
