import $ from "jquery";
import slick from "slick-carousel";

const catalogDetail = () => {
    //Слайдер
    if ($('.catalog-detail .gallery').length) {
        $('.catalog-detail .slider').slick({
            asNavFor: '.catalog-detail .gallery .slider-nav'
        });

        $('.catalog-detail .slider-nav').slick({
            asNavFor: '.catalog-detail .gallery .slider',
            slidesToShow: 5,
            prevArrow: '<button type="button" class="slider-nav__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider-nav__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            focusOnSelect: true
        });
    }
}

export default catalogDetail;