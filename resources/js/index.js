import header from './modules/header';
import catalogList from './modules/catalog-list';
import promo from './modules/promo';
import partners from './modules/partners';
import mainCat from './modules/main-cat';
import blogDetail from './modules/blog-detail';
import all from './modules/all';
import filter from './modules/filter';
import catalogDetail from './modules/catalog-detail';
import contacts from './modules/contacts';

window.addEventListener('DOMContentLoaded', () => {
    header();
    catalogList();
    promo();
    partners();
    mainCat();
    blogDetail();
    all();
    filter();
    catalogDetail();
    contacts();
});