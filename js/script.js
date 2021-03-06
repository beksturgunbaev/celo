// Burger menu:
$('.burger-menu').click(function() {
    $('.mobile-menu').addClass('active');
});
$('.close-menu').click(function() {
    $('.mobile-menu').removeClass('active');
});

// Catalog button:
$('.catalog-btn').click(function() {
    $('.modal').addClass('active');
});
jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $(".modal-content"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
            $('.modal').removeClass('active');
		}
	});
});

$('.modal-btn').click(function() {
    $('.modal-form').css('display', 'none');
    $('.modal-success').css('display', 'block');
    return false;
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
$('#aboutUs').on("click", function(e){
    e.preventDefault();
        var top = $("#about-container").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});
$('#catalogBtn').on("click", function(e){
    e.preventDefault();
        var top = $("#catalog-container").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});
$('#product-mob').on("click", function(e){
    e.preventDefault();
    $('.mobile-menu').removeClass('active');
        var top = $("#product-container").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});
$('#contact-mob').on("click", function(e){
    e.preventDefault();
    $('.mobile-menu').removeClass('active');
        var top = $("#footer").offset().top;
    $('html,body').animate({
    scrollTop: top
    }, 900);
});
$('#about-mob').on("click", function(e){
    e.preventDefault();
    $('.mobile-menu').removeClass('active');
        var top = $("#about-container").offset().top;
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
    infinity: true,
    asNavFor: '.dots-block'
});
$('.dots-block').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinity: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
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
