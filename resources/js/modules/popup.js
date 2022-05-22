import $ from 'jquery';

function popup() {
    function openPopup(e) {
        e.preventDefault();
        let btnTarget = $(this).attr('data-type');
        
        $('body').addClass('no-scroll');
        $(`.popup.${btnTarget}`).fadeIn();
    }
    
    function closePopup () {
        $('body').removeClass('no-scroll');
        $('.popup').fadeOut();
    }
    
    $('.js-popup-open').click(openPopup);
    $('.js-popup-close').click(closePopup);
}


export default popup;