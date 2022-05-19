import $ from 'jquery';

function cabinet() {
    const historyPage = $('.history');

    if (historyPage.length) {
        const itemToggle = $('.history__item .toggle');

        itemToggle.click(function() {            
            $(this).toggleClass('active').closest('.history__item').toggleClass('open').find('.more').slideToggle();
        })
    }
}

export default cabinet;