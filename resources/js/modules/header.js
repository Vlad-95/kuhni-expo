import $ from "jquery";

function header() {
    //выпадашка с брендами и каталогом
    if($('.header .dropdown').length) {
        const btns = $('.header .btns__item');

        btns.click(function() {
            let btnId = $(this).attr('data-id');
            
            $('.layer').fadeIn(100)
            $('.dropdown').hide();
            $(`#${btnId}`).fadeIn();
            $(this).addClass('active')
        })
    }
}

export default header;