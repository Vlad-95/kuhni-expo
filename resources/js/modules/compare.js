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
    }
}

export default compare;