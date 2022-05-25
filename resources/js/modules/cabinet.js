import $ from 'jquery';

function cabinet() {
    const historyPage = $('.history');
    const profilePage = $('.profile');

    if (historyPage.length) {
        const itemToggle = $('.history__item .toggle');

        itemToggle.click(function() {            
            $(this).toggleClass('active').closest('.history__item').toggleClass('open').find('.more').slideToggle();
        })
    }

    if (profilePage.length) {
        //включение/отключение редактирования
        $('.edit').click(function() {
            $(this).parent().find('input').prop('disabled', false);
        })
    }
}

export default cabinet;