import $ from 'jquery';

function compare () {
    if ($('.compare__head').length) {
        //одинаковая высота характеристик

        function setEqualHeight(elems){
            let  tallestElem = 0;
            elems.each(function() {
                let currentHeight = $(this).height();
                if(currentHeight > tallestElem) {
                tallestElem = currentHeight;
                }
            });
        
            elems.height(tallestElem);
        }
        //перебираем характеристики в дефолтном элементе
        // let charMaxHeight = [];

        // $('.compare__content .item.item_default div[data-char]').each(function() {
        //     let char = $(this).attr('data-char');
        //     let charHeight = $(this).height();

        //     charMaxHeight.push({[char] : charHeight})
        // })

        // console.log(charMaxHeight);

        //Перебираем характеристики в остальных элементах и перезаписываем высоты
        // charMaxHeight.forEach(item => {
        //     console.log(item)
        //     let charName = Object.keys(item)[0]
        //     let char = $(`.compare__content .item:not(.item_default) div[data-char="${charName}"]`);

        //     console.log(charName)
        //     // let charHeight = $(`.compare__content .item:not(.item_default) div[data-char="${Object.keys(item)[0]}"]`).height();

        //     char.each(function() {
        //         let charHeight = $(this).height();
        //         console.log(charMaxHeight)
        //         if (charHeight > charMaxHeight[Object.keys(item)[0]]) {
        //             charMaxHeight[Object.keys(item)[0]] = charHeight
        //         }
        //     })

        // })

        // console.log(charMaxHeight)
        // $('.compare__content .item:not(.item_default) div[data-char]').each(function() {
        //     let char = $(this).attr('data-char');
        //     let charHeight = $(this).outerHeight();

        //     let findChar = charMaxHeight.findIndex(item => item[char] == 1);
        // })

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