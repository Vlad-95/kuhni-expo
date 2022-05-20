import $ from "jquery";
import slick from "slick-carousel";
import { Fancybox } from "@fancyapps/ui/src/Fancybox/Fancybox.js";

const catalogDetail = () => {
    //Слайдер
    if ($('.catalog-detail .gallery').length) {
        $('.catalog-detail .slider').slick({
            asNavFor: '.catalog-detail .gallery .slider-nav',
            arrows: false,
            dots: false
        });

        $('.catalog-detail .slider-nav').slick({
            asNavFor: '.catalog-detail .gallery .slider',
            slidesToShow: 5,
            prevArrow: '<button type="button" class="slider-nav__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider-nav__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }

    if ($('.catalog-detail .prices .bonus').length) {
        $('.catalog-detail .prices').addClass('prices_bonus');
    }
}

export default catalogDetail;