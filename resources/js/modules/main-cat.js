import $ from 'jquery';
import 'jquery-match-height';

function mainCat() {
    if ($('.main-cat').length) {
        $('.main-cat__item .text').matchHeight();
        
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
            items.find('.hidden').fadeOut();
            $(this).next().fadeIn();
        })

        $(document).click( function(e) {
            const target = e.target;
            
            if (!$(target).is('.dots') && !$(target).parents().is('.dots')) {
                items.find('.hidden').fadeOut();
            }
        });
    }
}

export default mainCat;