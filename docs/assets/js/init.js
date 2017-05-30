(function($){
  $(function(){

    // default
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    // add
    $('.dropdown-button').dropdown();
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
