// Récupère le bouton
let mybutton = document.getElementById("myBtn-down");

// Lorsque l'utilisateur fait défiler 20px vers le bas à partir du haut du document, affiche le bouton
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Lorsque l'utilisateur clique sur le bouton, défile vers le haut du document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}