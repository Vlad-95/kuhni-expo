import $ from 'jquery';

function blogDetail() {
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

export default blogDetail;