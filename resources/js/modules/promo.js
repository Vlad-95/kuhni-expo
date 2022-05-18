import $ from 'jquery';
import slick from "slick-carousel";

function promo() {
    //Главная страница - слайдер акций
    if ($('.promo_mainpage').length) {
        $('.promo_mainpage .slider').slick({
            slidesToShow: 1,
            dots: true,
            prevArrow: '<button type="button" class="slider__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
        });

        $('.promo_mainpage .slider .content').matchHeight();
    }
}

export default promo;