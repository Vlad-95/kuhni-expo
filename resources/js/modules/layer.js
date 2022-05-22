import $ from "jquery";

function layer() {
    
    //клик по layer
    if ($('.layer').length) {
        $('.layer').click(function() {
            $(this).fadeOut(100);
            
            $('.dropdown').hide();
            $('.btns__item').removeClass('active');
        })
    }    
}

export default layer;