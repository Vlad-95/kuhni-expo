import header from './modules/header';
import all from './modules/all';
import filter from './modules/filter';
import catalogDetail from './modules/catalog-detail';
import contacts from './modules/contacts';

window.addEventListener('DOMContentLoaded', () => {
    header();
    all();
    filter();
    catalogDetail();
    contacts();
});