import $ from "jquery";

function utils() {
    //добавление в корзину
    $('.js-buy:not(.active)').click(function() {
        $(this).addClass('active');
    });

    //добавление в сравнение
    $('.js-compare:not(.active)').click(function() {
        $(this).addClass('active').find('.text').text('В сравнении');
    });
}

export default utils;