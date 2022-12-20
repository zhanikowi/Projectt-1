$(document).ready(function(){
    $("imgintro1").mouseenter(function(){
    $("img").animate();
    });
    $("#show").click(function(){
    $("img").show();
    });
});

$(document).ready(function(){
    $("#gamee").click(function(){
      $("#panel").fadeToggle("slow");
    });
  });