import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from "./services/Menu.js";
import Router from './services/Router.js';

window.app = {}
app.store = Store;
app.router = Router;

app.renderTest = function renderTest(){
    app.store.menu.forEach(ele => {
        console.log(ele.name);
    });
    
}

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    loadData();
});


