import header from './modules/header';
import catalogList from './modules/catalog-list';
import all from './modules/all';
import filter from './modules/filter';
import catalogDetail from './modules/catalog-detail';
import contacts from './modules/contacts';

window.addEventListener('DOMContentLoaded', () => {
    header();
    catalogList();
    all();
    filter();
    catalogDetail();
    contacts();
});