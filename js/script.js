// Burger menu:
$('.burger-menu').click(function() {
    $('.mobile-menu').addClass('active');
});
$('.close-menu').click(function() {
    $('.mobile-menu').removeClass('active');
});

// Scroll menu:
$('#product').on("click", function(e){
    e.preventDefault();
        var top = $("#product-container").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});
$('#contact').on("click", function(e){
    e.preventDefault();
        var top = $("#footer").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});
$('#callback').on("click", function(e){
    e.preventDefault();
        var top = $("#form-container").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});

// Slider:
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    draggable: false,
    asNavFor: '.dots-block'
});
$('.dots-block').slick({
    slidesToShow: 7,
    asNavFor: '.slider',
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
});

// Dots slider
$('.dots-img').click(function() {
    $('.dots-img').removeClass('active_slide');
    $(this).addClass('active_slide');
});

// Click prev btn:
$('.slider .slick-prev').click(function() {
    $('.dots-block .slick-track').css('transform', 'translate(0)');
});
// Click next btn:
$('.slider .slick-next').click(function() {
    $('.dots-block .slick-track').css('transform', 'translate(0)');
});
