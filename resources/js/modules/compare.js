import $ from 'jquery';
import 'jquery-match-height';

function compare () {
    if ($('.compare').length) {
        //количество товара в заголовке
        function countItems() {
            $('.page-title_cart h1').attr('data-count', $('.compare__head-wrap .item').length);
        }

        countItems();
        

        //==================одинаковая высота характеристик
        let charNames = [];

        //подставляем какие-нибудь рандомные атрибуты к характеристикам
        $('.compare__content .item').each(function() {
            $(this).find('> div').each(function(i) {
                $(this).attr('data-char', i);
            })
        })

        //перебираем характеристики в дефолтном элементе
        $('.compare__content .item.item_default div[data-char]').each(function() {
            let char = $(this).attr('data-char');

            charNames.push(char);
        })

        //Перебираем характеристики и подставляем высоты
        charNames.forEach(item => {
            $(`.compare__content .item div[data-char="${item}"]`).matchHeight();
        })
        // ===============================
        
        //Смена отображения при скролле
        $(window).scroll(function() {
            if($('.compare__head').length) {
                let headOffsetTop = ($('.compare__head').offset().top + $('.compare__head').height()) - $(document).scrollTop();
                let contentOffsetTop = ($('.compare__content').offset().top + $('.compare__content').height() - 140) - $(document).scrollTop()
            
                if (headOffsetTop < 0) {
                    $('.compare__head').addClass('fixed');

                    if (contentOffsetTop < 0) {
                        $('.compare__head').removeClass('fixed');
                    } else {
                        $('.compare__head').addClass('fixed');
                    }

                } else {
                    $('.compare__head').removeClass('fixed');
    
                    $('.compare__head-wrap').css({
                        '-webkit-transform': `translateX(0px)`,
                        '-ms-transform': `translateX(0px)`,
                        'transform': `translateX(0px)`
                    }) 
                }
            }
        })

        //горизонтальный скролл
        $(".scroll-table").on("scroll", function (e) {
            let horizontal = e.currentTarget.scrollLeft;

            //перемещение подписей строк характеристик
            $('.compare__content .label').css({
                '-webkit-transform': `translateX(${horizontal}px)`,
                '-ms-transform': `translateX(${horizontal}px)`,
                'transform': `translateX(${horizontal}px)`
            })

            if ($('.compare__head').hasClass('fixed')) {                
                

                $('.compare__head-wrap').css({
                    '-webkit-transform': `translateX(-${horizontal}px)`,
                    '-ms-transform': `translateX(-${horizontal}px)`,
                    'transform': `translateX(-${horizontal}px)`
                })            
            }
        });

        //Удаление элементов
        function removeAll() {
            $('.compare__head').remove();
            $('.compare__btns').remove();
            $('.compare__content').remove();
        }


        $('.btns__delete').click(function() {
            let itemId = $(this).closest('.item').attr('data-id');

            $(`div[data-id="${itemId}"]`).remove();

            //количество товара в заголовке
            countItems();

            if (!$('.item:not(.item_default)').length) {
                removeAll();
            }
        })

        //Удалить всё
        $('.compare__btns .delete').click(function() {
            removeAll(); 
                  
            //количество товара в заголовке
            countItems();
        })
        
    }
}

export default compare;