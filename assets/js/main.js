(function() {
  console.log($( window ));

  $( window ).on('scroll resize', function() {
    if( $( this ).scrollTop() > 80 ) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });

})();
