import $ from "jquery";
import 'jquery-match-height';

function catalogList() {
    
    if ($('.catalog__item').length) {
        //одинаковая высота карточек товаров
        $('.catalog__item .name').matchHeight();

        //добавление в корзину
        $('.btns__buy:not(.active)').click(function() {
            $(this).addClass('active');
        });

        //добавление в сравнение
        $('.btns__compare:not(.active)').click(function() {
            $(this).addClass('active').find('.text').text('В сравнении');
        });
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