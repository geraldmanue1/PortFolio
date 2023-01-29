// Créer une fonction pour sélectionner des éléments

// Ouvrir et fermer la navigation au clic
const menuIcon = document.querySelector(".menu-icons");
menuIcon.addEventListener("click", () => {
    console.log("OK");
    const nav = document.getElementsByTagName("nav")[0];
    nav.classList.toggle("active");
});



// SmartMenus init
$(function() {
    $('#main-menu').smartmenus({
      mainMenuSubOffsetX: -1,
      mainMenuSubOffsetY: 4,
      subMenusSubOffsetX: 6,
      subMenusSubOffsetY: -6
    });
  });
  
  // SmartMenus mobile menu toggle button
  $(function() {
    var $mainMenuState = $('#main-menu-state');
    if ($mainMenuState.length) {
      // animate mobile menu
      $mainMenuState.change(function(e) {
        var $menu = $('#main-menu');
        if (this.checked) {
          $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
        } else {
          $menu.show().slideUp(250, function() { $menu.css('display', ''); });
        }
      });
      // hide mobile menu beforeunload
      $(window).bind('beforeunload unload', function() {
        if ($mainMenuState[0].checked) {
          $mainMenuState[0].click();
        }
      });
    }
  });