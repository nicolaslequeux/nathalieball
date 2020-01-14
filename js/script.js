

$('.carousel').carousel({
    interval: 2500,
})


// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
});


// Reveal Animations When Scrolling
new WOW().init();


// Close navbar on click outside hamburger button
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


//set active navigation after click
$(".nav-link").on("click", (event) => {
    $(".navbar-nav").find(".active").removeClass('active');
    $(event.target).parent().addClass('active');
  });

