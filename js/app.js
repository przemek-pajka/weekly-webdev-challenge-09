(function() {

     var n = {
        origin: "bottom",
        viewFactor: .15,
        duration: 1100,
        distance: "20px",
        scale: .8,
        reset: !0
    };
    
window.sr = new ScrollReveal(n), sr.reveal(".banner__section .container"), sr.reveal(".our-works__row__item"),sr.reveal(".video__section"),sr.reveal(".contact__section .container");


    $('.toggle-menu').jPushMenu();
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('overflow-hidden');
  });

  $(window).click(function() {
    if($('.hamburger').hasClass('is-active')) {
      $('.hamburger').removeClass('is-active');
      $('body').removeClass('overflow-hidden');
    }
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    $('#showhide1').click(function() {
        $(this).html($(this).text() == 'LOAD LESS' ? 'LOAD MORE' : 'LOAD LESS');
        $('.our-works__row__plus').toggleClass('active');
    });


    // Select all links with hashes // SMOOTH SCROLLING SCRIPT
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  })
  


  
// sticky function 
var stickyNavTop = $('.navbar-top__section').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.navbar-top__section').addClass('fixed');
} else {
    $('.navbar-top__section').removeClass('fixed'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});

})();


//navbar-top__section
//fixed