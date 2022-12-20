$(document).ready(function(){
  $("#gamee").click(function(){
    $("#panel").fadeToggle("slow");
  });
});


$('.textglitch').hover(function(){
  var eLtext = $(this).text(),
      eLchild = $(this).find('.textglitch-link');
  console.log(eLchild);
  eLchild.attr('data-content', eLtext);
  eLchild.toggleClass('blur');
  $(this).toggleClass('active');
});

$(".textglitch").css({"right":"100px", opacity:'0'}).animate({"right":"0px", opacity:'1'}, "slow");


$(document).ready(function(){
  $("#but").click(function(){
    var div = $("#vpered");  
    div.animate({left: '100px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
});

$(document).ready(function(){
$("#butt").click(function(){
$("#pvp").fadeToggle("slow");
});
});


$(document).ready(function(){
$("#but").click(function(){
$("#vpered").fadeToggle("slow");
});
});
