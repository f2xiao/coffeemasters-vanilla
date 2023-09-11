export default class OrderPage extends HTMLElement {
    constructor() {
        super();

        // Implement a Shadow DOM on every Custom Elements
        this.root = this.attachShadow({ mode: "open" });

        const template = document.getElementById("order-form-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);  
    }
}
customElements.define("order-page", OrderPage);