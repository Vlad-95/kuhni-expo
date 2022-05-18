import $ from 'jquery';

function mainCat() {
    if ($('.main-cat').length) {
        
        if ($(window).width() >= 992) {
            // Позиционирование всплывашки
            const items = $('.main-cat__item');
            const itemsHiddenContentWidth = $('.hidden').outerWidth();
    
            items.each(function () {
                const item = $(this);
                const itemWidth = item.width();
                const itemOffsetRight = $(window).width() - (itemWidth + item.offset().left)
    
                if (itemOffsetRight <= itemsHiddenContentWidth) {
                    $(this).find('.hidden').addClass('top_left');
                }
            })

            // показ/скрытие высплывашки
            items.find('.dots').click(function() {
                $('.hidden').fadeOut();
                $(this).next().fadeIn();
            })

            $('.hidden .close').click(function() {
                $('.hidden').fadeOut();
            })
        }

        

        
    }
}

export default mainCat;