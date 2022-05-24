import $ from 'jquery';

function order() {
    //функция показа полей доставки
    const onDeliveryType = () => {
        let activeDeliveryType = $('.delivery-type a.active').attr('data-delivery-type');
        const hiddenDeliveryTypeInput = $('input[name="order_type_delivery"]');

        //записываем значение типа пользователя в скрытый инпут
        hiddenDeliveryTypeInput.val(activeDeliveryType);

        //скрываем ненужные поля
        $('.form__item[data-delivery-type]').hide().find('input').prop('disabled', true);
        $(`.form__item[data-delivery-type="${activeDeliveryType}"]`).show().find('input').prop('disabled', false);
    }

    //Вызываем при загрузке
    onDeliveryType();

    //клик по табам
    $('.delivery-type a').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        onDeliveryType();
    })
}

export default order;