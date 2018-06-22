/*Redireccionar la pagina */

$("#splash").fadeOut(2500, function(){
  window.location = "index.html";
});

/*Materialize*/
function myFunction() {
    document.getElementById("signupButtom").
    object.addEventListener("click", myScript);
  }

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

$(".dropdown-trigger").dropdown();


/*Validación de numero telefónico*/
$("#icon_telephone").keyup(function(){
  var valor = $(this).val();
  if((/^\d{9}$/.test(valor))) {
  console.log("valida");
  $("#valida").removeClass("disabled");
} else {
  $("#valida").addClass("disabled");
}
});


/*Validación de numero telefónico*/
document.getElementById("icon_telephone").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("icon_telephone");
    alert("Tu código: LAB-551");
}
