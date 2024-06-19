$(document).ready(function () {
  $("#menuOpen").click(function () {
    $(".navbar").css("display", "flex");
    $("#menuOpen").addClass("hidden");

    $("#menuClosed").removeClass("hidden");
  });

  $("#menuClosed").click(function () {
    $(".navbar").css("display", "none");

    $("#menuOpen").removeClass("hidden");

    $("#menuClosed").addClass("hidden");
  });


  $("#menu li a").click(function(){
   $(".navbar").slideToggle(300);
   $("#menuClosed").addClass("hidden");
   $("#menuOpen").removeClass("hidden");

   })

  

  })
  
 

