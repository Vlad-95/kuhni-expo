import $ from "jquery";

function header() {
    //===========Мобильное меню
    const body = $('body')
    const windowWidth = $(window).width();
    const header = $('.header');
    const mobileMenu = $('.mobile-menu');
    const nav = header.find('.nav');
    const contacts = header.find('.contacts');
    const btns = header.find('.btns');
    const searchForm = header.find('.search-form');
    
    const burger = $('.burger');
    const windowHeight = $(window).height();

    //клонируем элементы хедера
    if (windowWidth <= 992) {
        nav.detach().appendTo(mobileMenu.find('.mobile-menu__wrap'));
        contacts.detach().appendTo(mobileMenu.find('.mobile-menu__wrap'));
    }

    if (windowWidth <= 768) {
        mobileMenu.find('.nav').after(searchForm.detach());
    }

    if (windowWidth <= 576) {
        mobileMenu.find('.nav').after(btns.detach());
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

    //выпадашка с брендами и каталогом
    if($('.header .dropdown').length) {
        const btns = $('.header .btns__item');

        btns.click(function() {
            let btnId = $(this).attr('data-id');
            
            $('.layer').fadeIn(100);
            $('.dropdown').hide();
            $(`#${btnId}`).fadeIn();
            $(this).addClass('active');

            if ($(window).width() <= 576) {
                showMenu();
                body.toggleClass('no-scroll');
            }
        });

        if ($(window).width() <= 576) {
            $('.dropdown .close').click(function() {
                $('.layer').hide();
                $('.dropdown').hide();
                body.toggleClass('no-scroll');
            })
        }
    }
}

export default header;