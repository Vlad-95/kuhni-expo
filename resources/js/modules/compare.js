import $ from 'jquery';

function compare () {
    if ($('.compare__head').length) {
        //одинаковая высота характеристик
        // function setEqualHeight(elems){
        //     let  tallestElem = 0;
        //     elems.each(function() {
        //         let currentHeight = $(this).height();
        //         if(currentHeight > tallestElem) {
        //         tallestElem = currentHeight;
        //         }
        //     });
        
        //     elems.height(tallestElem);
        // }
        //перебираем характеристики в дефолтном элементе
        let charMaxHeight = [];

        $('.compare__content .item.item_default div[data-char]').each(function() {
            let char = $(this).attr('data-char');
            let charHeight = $(this).height();

            charMaxHeight.push({name: char, height: charHeight})
        })

        console.log(charMaxHeight);

        //Перебираем характеристики в остальных элементах и перезаписываем высоты
        $('.compare__content .item:not(.item_default) div[data-char]').each(function() {
            // let tallestElem = 0;
            let char = $(this).attr('data-char');
            let charHeight = $(this).height();

            // if (charHeight > tallestElem) {
            //     tallestElem = charHeight;
            // }

            // console.log(tallestElem)
            let arrCharElem = charMaxHeight.map(item => {})

            // console.log(elem)

        })
        
        //Смена отображения при скролле
        $(window).scroll(function() {
            let headOffsetTop = ($('.compare__head').offset().top + $('.compare__head').height()) - $(document).scrollTop()
            
            if (headOffsetTop < 0) {
                $('.compare__head').addClass('fixed');
            } else {
                $('.compare__head').removeClass('fixed');

                $('.compare__head-wrap').css({
                    '-webkit-transform': `translateX(0px)`,
                    '-ms-transform': `translateX(0px)`,
                    'transform': `translateX(0px)`
                }) 
            }
            
        })

        //горизонтальный скролл
        $(".scroll-table").on("scroll", function (e) {
            let horizontal = e.currentTarget.scrollLeft;

            //перемещение подписей строк характеристик
            $('.compare__content .label').css({
                '-webkit-transform': `translateX(${horizontal}px)`,
                '-ms-transform': `translateX(${horizontal}px)`,
                'transform': `translateX(${horizontal}px)`
            })

            if ($('.compare__head').hasClass('fixed')) {                
                

                $('.compare__head-wrap').css({
                    '-webkit-transform': `translateX(-${horizontal}px)`,
                    '-ms-transform': `translateX(-${horizontal}px)`,
                    'transform': `translateX(-${horizontal}px)`
                })            
            }
        });

        //Удаление элементов
        $('.btns__delete').click(function() {
            let itemId = $(this).closest('.item').attr('data-id');
        })
        
    }
}

export default compare;