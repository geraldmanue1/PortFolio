filterSelection("all-1")
function filterSelection(o) {
  var v, j;
  v = document.getElementsByClassName("column-1");
  if (o == "all-1") o = "";
  for (j = 0; j < v.length; j++) {
    w3RemoveClass(v[j], "show-1");
    if (v[j].className.indexOf(o) > -1) w3AddClass(v[j], "show-1");
  }
}

function w3AddClass(element1, name1) {
  var j, arr3, arr4;
  arr3 = element1.className.split(" ");
  arr4 = name1.split(" ");
  for (j = 0; j < arr4.length; j++) {
    if (arr3.indexOf(arr4[j]) == -1) { element1.className += " " + arr4[j]; }
  }
}

function w3RemoveClass(element1, name1) {
  var j, arr3, arr4;
  arr3 = element1.className.split(" ");
  arr4 = name1.split(" ");
  for (j = 0; j < arr4.length; j++) {
    while (arr3.indexOf(arr4[j]) > -1) {
      arr3.splice(arr3.indexOf(arr4[j]), 1);
    }
  }
  element1.className = arr3.join(" ");
}


// Ajouter la classe active au bouton actuel (le mettre en surbrillance)
var btnContainer1 = document.getElementById("myBtnContainer-1");
var btns1 = btnContainer1.getElementsByClassName("btn-1");
for (var j = 0; j < btns1.length; j++) {
  btns1[j].addEventListener("click", function () {
    var current1 = document.getElementsByClassName("active-1");
    current1[0].className = current1[0].className.replace(" active-1", "");
    this.className += " active-1";
  });
}


