import $ from "jquery";
import slick from "slick-carousel";
import matchHeight from "jquery-match-height";

function all() {
    
    //клик по layer
    if ($('.layer').length) {
        $('.layer').click(function() {
            $(this).fadeOut(100);
            
            $('.dropdown').hide();
            $('.btns__item').removeClass('active');
        })
    }

    
}

export default all;