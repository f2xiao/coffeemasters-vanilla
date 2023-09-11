export default class MenuPage extends HTMLElement {
    constructor() {
        super();
        // Implement a Shadow DOM on every Custom Elements
        this.root = this.attachShadow({ mode: "open" });

        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);   
    }
}
customElements.define("menu-page", MenuPage);