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

        //Показ превьюшки логотипа        
        $('.logo__file').change(function () {
            
            if (this.files[0]) {
                const fr = new FileReader();

                fr.onload = function() {
                    $('.logo__text').addClass('active').css({
                        'background-image' : `url(${fr.result})` 
                    })
                }

                fr.readAsDataURL(this.files[0]);
            }
        });
    }
}

export default cabinet;