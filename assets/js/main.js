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
    arrows: false,
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




      function openCoord(e) {
        e.style.opacity = '0'
        e.style.display = 'none';
        var elem = e.parentNode.parentNode;
        elem.style.width = '380px';
        elem.style.height = '400px';
        var id = setTimeout(function() {
          elem.classList.add('open')
        }, 800);
      }

      function closeCoord(e) {
        var elem = e.parentNode.parentNode.parentNode;
        var btn= document.getElementById('openCoord');
        elem.classList.remove('open');
        elem.style.width = '50px';
        elem.style.height = '50px';
        var id = setTimeout(function() {
          btn.style.opacity = '1'
          btn.style.display = 'block';
        }, 700);
      }
