$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
      $(".fixed-top").addClass("box-shadow");
      $(".mq-black").css("color","black");

  } else {
      $(".fixed-top").removeClass("box-shadow");
      $(".mq-black").css("color","white");
  }
  if($(window).width() < 992)
  {
    $(".mq-black").css("color","white");
  }
});