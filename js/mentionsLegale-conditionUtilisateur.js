
var coll = document.getElementsByClassName("collapsible-coll", "content");
var i;

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    content.style.borderLeft = "2px outset #182154";
    content.style.borderRight = "2px outset #182154";
    content.style.borderBottom = "2px outset #182154";
    content.style.borderBottom = "2px outset #182154";
    content.style.boShadow = "2px outset #182154";
    content.style.boxShadow = "1px 1px 1px 0px rgb(0 0 0 / 20%)";





    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.borderBottom = null;




    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/* javascript responsive
/*
function myFunction(x) {
  if (x.matches) { // If media query matches // téléphone 
    var x = document.getElementById("photo-accueil").src;
    document.getElementById("photo-accueil").style.height = "530px";



 


   
  } else { // ordinateur
    var x = document.getElementById("photo-accueil").src;
    document.getElementById("photo-accueil").style.height = "948px";
    document.getElementById("photo-accueil").style.marginRight = "50px";
    document.getElementById("photo-accueil").style.marginLeft = "50px";
    document.getElementById("photo-accueil").style.marginBottom = "50px";









  }
}

var x = window.matchMedia("(max-width: 100%)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes */