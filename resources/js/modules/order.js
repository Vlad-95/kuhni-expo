import $ from 'jquery';

function order() {
    //разбиение числа на разряды
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    //функция подсчета цены
    function totalSum() {
        let curr = parseInt($('.order__sidebar-content .curr').text().replace(/\s/g,''))
        let sale = parseInt($('.order__sidebar-content .sale').text().replace(/\s/g,''));
        let delivery = parseInt($('.order__sidebar-content .delivery').text().replace(/\s/g,''))
        let bonus = ($('.order__sidebar-content .bonus').length) ? parseInt($('.order__sidebar-content .bonus .bonus-value').text().replace(/\s/g,'')) : 0;

        let total = curr - sale + delivery - bonus;

        $('.order__sidebar-price .total').html(`${numberWithSpaces(total)} &#8381;`)
    }

    totalSum();

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

    //чекбокс бонусов
    let bonusValue = $('[name="order_bonus"]').closest('.bonus').find('.form__checkbox-text strong').text();
    let sidebarBonus = `<div class="bonus">
                            <p>Оплата бонусными баллами</p>
                            <p class="bonus-value">${bonusValue}</p>
                        </div>`
    
    $('[name="order_bonus"]').change(function() {
        
        
        if ($(this).is(':checked')) {
            $('.order__sidebar-content').append(sidebarBonus)
        } else {
            $('.order__sidebar-content .bonus').remove();
        }

        totalSum();
    })
}

export default order;