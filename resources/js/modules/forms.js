import $ from 'jquery';
import Inputmask from "inputmask";

function forms() {
    //маска телефона
    Inputmask({"mask": "+7 (999) 999-9999"}).mask($('.js-phone'))
}

export default forms;