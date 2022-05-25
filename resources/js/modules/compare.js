import $ from 'jquery';

function compare () {
    if ($('.compare__head').length) {
        //Смена отображения при скролле
        $(window).scroll(function() {
            let headOffsetTop = $('.compare__head').offset().top - $(document).scrollTop()
            
            if (headOffsetTop < 0) {
                $('.compare__head').addClass('fixed');
            } else {
                $('.compare__head').removeClass('fixed');
            }
            
        })

        //горизонтальный скролл
        $(".scroll-table").on("scroll", function (e) {
            if ($('.compare__head').hasClass('fixed')) {                
                let horizontal = e.currentTarget.scrollLeft;

                $('.compare__head-wrap').css({
                    '-webkit-transform': `translateX(-${horizontal}px)`,
                    '-ms-transform': `translateX(-${horizontal}px)`,
                    'transform': `translateX(-${horizontal}px)`
                })            
            }
        });
        
    }
}

export default compare;