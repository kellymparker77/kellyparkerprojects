function media_slider() {

    $('.media__slider').each(function (idx, item) {
        var controlsID = "#" + item['id'] + "-controls";
         $(this).slick({
            appendArrows: controlsID,
            prevArrow: '<button type="button" data-role="none" class="col-md-1 col-md-pull-1 pull-right text-left btn-link" aria-label="Previous" tabindex="0" role="button"> &larr; </button>',
            nextArrow: '<button type="button" data-role="none" class="col-md-1 col-md-push-1 pull-right text-right btn-link" aria-label="Next" tabindex="0" role="button"> &rarr; </button>',

            centerMode: false,
            centerPadding: '50px',
            cssEase: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
           
            easing: 'linear',
            infinite: false,
            initialSlide: 0,
            slidesPerRow: 1,
            slidesToShow: 1.05,
            slidesToScroll: 1,
            speed: 1500,
            swipe: true,
            swipeToSlide: false,
            touchThreshold: 5,
            useCSS: true,
            useTransform: true,
            variableWidth: false,
            vertical: false,
            verticalSwiping: false,

        });
    });

}

media_slider();