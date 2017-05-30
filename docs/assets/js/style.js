(function($){
  $(function(){

    var options = [
      {selector: '#mercari_boxed', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);



  }); // end of document ready
})(jQuery); // end of jQuery name space
