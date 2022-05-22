import $ from 'jquery';

function cart() {
    if ($('.cart').length) {
        //чекбокс кредита
        $('input[name="credit"]').on('change', function() {
            if ($(this).is(':checked')) {
                $('.btns .order').addClass('js-open-popup btn-credit').attr('data-type', 'credit').text('Отправить запрос');

            } else {
                $('.btns .order').removeClass('js-open-popup btn-credit').removeAttr('data-type').text('Оформить заказ');
            }
        })
    }
}

export default cart;