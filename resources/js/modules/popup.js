import $ from 'jquery';

function popup() {

    function openPopup(e) {
        
        if ($(e.target).hasClass('js-popup-open')) {
            e.preventDefault();

            let btnTarget = $(e.target).attr('data-type');
        
            $('body').addClass('no-scroll');
            $(`.popup.${btnTarget}`).fadeIn();
        }        
        
    }
    
    function closePopup () {
        $('body').removeClass('no-scroll');
        $('.popup').fadeOut();
    }
    
    $(document).click(openPopup);
    $('.js-popup-close').click(closePopup);
}


export default popup;