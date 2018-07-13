(function() {
  // console.log($( window ));

  $( window ).on('scroll resize', function() {
    if( $( this ).scrollTop() > 80 ) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });


  $('#slider1').slick({
    infinite: true,
    slidesToShow: 1,
    centerPadding: '125px',
    dots: true,
    arrows: true,
    cssEase: 'linear',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });
})();


$('#slider1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  // console.log('next ' + nextSlide);
});
$('#slider1').on('afterChange', function(event, slick, currentSlide){
  // console.log('current ' + currentSlide);
});
