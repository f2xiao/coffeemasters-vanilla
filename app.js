import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from "./services/Menu.js";

window.app = {}
app.store = Store;

app.renderTest = function renderTest(){
    console.log(app.store.menu);
}

window.addEventListener("DOMContentLoaded", () => {
    loadData();
});


