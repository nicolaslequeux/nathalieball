$(document).ready(function () {

    if ($('.brands_slider').length) {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel(
            {
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                nav: false,
                dots: false,
                autoWidth: true,
                items: 4,
                margin: 50
            });

        if ($('.brands_prev').length) {
            var prev = $('.brands_prev');
            prev.on('click', function () {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.brands_next').length) {
            var next = $('.brands_next');
            next.on('click', function () {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }


});