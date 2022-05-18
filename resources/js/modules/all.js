import $ from "jquery";
import slick from "slick-carousel";
import matchHeight from "jquery-match-height";

function all() {
    
    //клик по layer
    if ($('.layer').length) {
        $('.layer').click(function() {
            $(this).fadeOut(100);
            
            $('.dropdown').hide();
            $('.btns__item').removeClass('active');
        })
    }

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
    
    //Главная страница - слайдер партнеров
    if ($('.partners').length) {
        $('.partners .slider').slick({
            slidesToShow: 4,
            dots: false,
            prevArrow: '<button type="button" class="slider__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
        });
    }

    //Новость детальная - слайдер
    if ($('.blog-detail .slider').length) {
        $('.slider').slick({
            arrows: true,
            dots: false,
            prevArrow: '<button type="button" class="slider__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
        })

        $('.slider .slider__item .image').matchHeight();
    }
}

export default all;