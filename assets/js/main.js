(function() {
  console.log($( window ));
  $( window ).on('scroll resize', function() {
    if( $( this ).scrollTop() > 80 ) {
      $('body').addClass('scrolled');
      console.log($( this ).scrollTop());
    } else {
      $('body').removeClass('scrolled');
    }
  });
})();
