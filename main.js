$(function() {
  $('.menu').click(function() {
    $('.logo-list').slideToggle();
    return false;
  });

  $('.menu-logo').click(function() {
    $(this).parent().slideUp();
  });

  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if(scroll === 0) {
      $('header').css('background','transparent');
    } else {
      $('header').css('background','white');
    };
  });

  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: 34.4605279, lng: 133.3805433},
  //   zoom: 8
  // });

  $('#page-top').click(function() {
    $('body, html').animate({

    
      scrollTop:0
    },500);
    return false;
  });

  $(window).scroll(function () {
    $('.page-animate').each(function() {
      var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();

      if(scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }


    });

  });

  function ScrollButton(button, place){
  
    var position = $(place).offset().top;  
   
    $(button).click(function(){
      $("html,body").animate({
          scrollTop : position
      }, {
          queue : false
      });
    });
  }

  
  ScrollButton(".team-button", ".logo");
  ScrollButton(".team-button2", ".main-picure");
  ScrollButton(".team-button3", ".group");
  ScrollButton(".team-button4", ".area");
  ScrollButton(".team-button5", ".address");
  ScrollButton(".team-button6", ".map");


});
