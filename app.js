const $ = function(args){ return document.querySelector(args);}
const $$ = function(args){ return document.querySelectorAll(args);}

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
    console.log($$('body .navlink'));
});

import Store from './services/Store.js';
import API from './services/API.js';

window.app = {}
app.store = Store;
