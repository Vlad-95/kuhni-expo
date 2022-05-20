import $ from "jquery";
import 'jquery-match-height';

function catalogList() {
    //одинаковая высота карточек товаров
    if ($('.catalog__item').length) {
        $('.catalog__item .name').matchHeight();
    }

    //фильтр
    if ($('.filter').length) {
        //аккордеон глобальных блоков (БРЕНД, КАТЕГОРИИ, ПАРАМЕТРЫ)
        $('.js-block-filter-toggle').click(function() {
            $(this).toggleClass('active').closest('.filter__block').find('.js-block-filter-content').slideToggle();
        })

        //аккордеон внутренних списков
        $('.js-filter-toggle').click(function() {
            if ($(this).closest('.filter__block').hasClass('cats')) {
                $(this).toggleClass('active').next('.js-filter-content').slideToggle();
            } else {
                $(this).toggleClass('active').parent().next('.js-filter-content').slideToggle();
            }            
        })
        
    }
}

export default catalogList;