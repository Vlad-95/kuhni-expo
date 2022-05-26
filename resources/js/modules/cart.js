import $ from 'jquery';

function cart() {
    if ($('.cart').length) {
        //количество товара в заголовке
        $('.page-title_cart h1').attr('data-count', $('.cart__table-item').length);

        //функция подсчета цены
        function totalSum() {
            let total = 0;
            let totalOldPrice = 0;
            let totalSale = 0;
            let totalBonus = 0;

            $('.cart__table-item').each(function() {
                let price = parseInt($(this).find('.price .curr').text().replace(/\s/g,'')) * (+$(this).find('.count__input').val());
                let oldPrice = parseInt($(this).find('.price .old').text().replace(/\s/g,'')) * (+$(this).find('.count__input').val());
                let bonus = parseInt($(this).find('.bonus span').text().replace(/\s/g,''))

                totalBonus += bonus;
                totalOldPrice += oldPrice;
                total += price;
            })

            totalSale = totalOldPrice - total;

            $('.cart__footer .price .sum').text(total);
            $('.cart__footer .price .sale').html(`(Ваша скидка — ${totalSale}&#8381;)`);
            $('.cart__footer .bonus').text(`Начислим ${totalBonus} баллов`);

        }

        // Подсчитываем сумму при загрузке
        totalSum();

        //чекбокс кредита
        $('input[name="credit"]').on('change', function() {
            if ($(this).is(':checked')) {
                $('.btns .order').addClass('js-popup-open btn-credit').attr('data-type', 'credit').text('Отправить запрос');

            } else {
                $('.btns .order').removeClass('js-popup-open btn-credit').removeAttr('data-type').text('Оформить заказ');
            }
        })

        //изменение количества товара
        $('.count__btn.dec').click(function() {
            let curValue = +$(this).siblings('.count__input').val();

            if (curValue > 1) {
                $(this).siblings('.count__input').val(curValue - 1);
            }           
            
            //пересчет суммы
            totalSum();
        });

        $('.count__btn.inc').click(function() {
            let curValue = +$(this).siblings('input').val();

            $(this).siblings('input').val(curValue + 1);   

            //пересчет суммы
            totalSum();
        });

        //Удаление товара
        $('.js-cart-remove').click(function() {
            $(this).closest('.cart__table-item').remove();

            //количество товара в заголовке
            let curValue = +$('.page-title_cart h1').attr('data-count');
            
            $('.page-title_cart h1').attr('data-count', `${curValue - 1}`);

            //пересчет суммы
            totalSum();
        })

        //Удалить всё
        $('.js-cart-remove_all').click(function() {
            $('.cart__table').remove();
            $('.cart__footer .price .bonus, .cart__footer .btns').remove();

            $('.page-title_cart h1').attr('data-count', ``);

            $('.cart__footer .price .result').text('Корзина пуста')            
        })
    }
}

export default cart;