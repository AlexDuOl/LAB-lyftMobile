/*Redireccionar la pagina
function openWin() {
    var myWindow = window.open("", "myWindow", "width=200, height=100");
    setTimeout(function(){ myWindow.open() }, 3000);
}

var myVar;

function myFunction() {
    myVar = setTimeout(function(){ alert("Hello") }, 3000);
}*/


$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

$(".dropdown-trigger").dropdown();