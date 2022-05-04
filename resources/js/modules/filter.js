import $ from "jquery";
import { Select2 } from "select2";
import { IonRangeSliderEvent } from "ion-rangeslider";

const filter = () => {
    if ($('.js-sort__select').length) {
        $('.js-sort__select').select2({
            width: '170',
            minimumResultsForSearch: Infinity
        });
    }

    //фильтр с диапазоном
    if ($(".js-range-slider").length) {
        $(".js-range-slider").each(function() {
            let inputFrom = $(this).siblings('.filter__range-row').find('.filter__range-input_from');
            let inputTo = $(this).siblings('.filter__range-row').find('.filter__range-input_to');
            // let rangeChangeCount = 0;
    
            $(this).ionRangeSlider({
                hide_from_to: true,
                hide_min_max: false,
                type: 'double',
                skin: "round",
    
                onStart: function (data) {
                    inputFrom.val(data.from);
                    inputTo.val(data.to);
                },
    
                onChange: function (data) {
                    inputFrom.val(data.from);
                    inputTo.val(data.to);
    
                    
                },
            })
        })
    }
    
}

export default filter;