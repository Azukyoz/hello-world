$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});


  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });


function myFunction() {
    document.getElementById("showCode").classList.toggle("show");
}



function lbToKg(valNum) {
  document.getElementById("kgs").value = valNum/2.205;
}

function kgToLb(valNum) {
  document.getElementById("lbs").value = valNum*2.205;
}

function cToF(valNum) {
  document.getElementById("fahrenheit").value = valNum*9/5+32;
}

function fToC(valNum) {
  document.getElementById("celsius").value = (valNum-32)*5/9;
}

function mileToKilometer(valNum) {
  document.getElementById("kilometer").value = valNum*1.609;
}

function kilometerToMile(valNum) {
  document.getElementById("mile").value = valNum/1.609;
}



