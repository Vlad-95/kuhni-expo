import $ from "jquery";
import 'jquery-match-height';

function catalogList() {
    //одинаковая высота карточек товаров
    if ($('.catalog__item').length) {
        $('.catalog__item .name').matchHeight();
    }
}

export default catalogList;