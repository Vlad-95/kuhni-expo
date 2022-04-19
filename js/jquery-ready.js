$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let time = header.find('.nav__item.time');
    let mail = header.find('.nav__item.mail');
    let address = header.find('.nav__item.address');
    let phone = header.find('.nav__item.phone')
    let burger = $('.burger');
    let windowHeight = $(window).height();

    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = $(document.createElement('div'));
        let nav = $(document.createElement('div'));
        mobileMenu.addClass('mobile-menu');
        nav.addClass('nav');

        headerWrap.append(mobileMenu)
        mobileMenu.append(nav)

        //клонируем элементы хедера
        let mobileTime = time.clone();
        let mobileMail = mail.clone();
        let mobileAddress = address.clone();
        let mobilePhone = phone.clone();
        
        nav.append(mobilePhone); 
        nav.append(mobileMail);  
        nav.append(mobileAddress);  
        nav.append(mobileTime);   
              
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
        console.log(1)
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

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

    //клик по layer
    if ($('.layer').length) {
        $('.layer').click(function() {
            $(this).fadeOut(100);
            
            $('.dropdown').hide();
            $('.btns__item').removeClass('active')
        })
    }

    //Главная страница - слайдер акций
    if ($('.promo_mainpage').length) {
        $('.promo_mainpage .slider').slick({
            slidesToShow: 1,
            dots: true,
            prevArrow: '<button type="button" class="slider__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
        });

        $('.promo_mainpage .slider .content').matchHeight();
    }
    
    //Главная страница - слайдер партнеров
    if ($('.partners').length) {
        $('.partners .slider').slick({
            slidesToShow: 4,
            dots: false,
            prevArrow: '<button type="button" class="slider__prev"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
            nextArrow: '<button type="button" class="slider__next"><svg><use xlink:href="img/icons/sprite.svg#chevron"></use></svg></button>',
        });
    }
});
