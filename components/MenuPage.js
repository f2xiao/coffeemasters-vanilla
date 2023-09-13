
export default class MenuPage extends HTMLElement {
    constructor() {
        super();

        // Implement a Shadow DOM on every Custom Elements
        const shadowRoot = this.attachShadow({ mode: "open" });
        
        async function loadCSS() {
            const request = await fetch("/components/MenuPage.css");
            styles.textContent = await request.text();
        }

        const styles = document.createElement('style');

        loadCSS();


        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        content.appendChild(styles);
        shadowRoot.appendChild(content);
    }

    connectedCallback(){
       console.log(this);
    }
}
customElements.define("menu-page", MenuPage);

