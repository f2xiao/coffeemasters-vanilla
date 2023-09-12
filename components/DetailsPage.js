async function loadCSS(ele) {
    const request = await fetch("/components/DetailsPage.css");
    ele.styles.textContent = await request.text();
}
export default class DetailsPage extends HTMLElement {
    constructor() {
        super();

         // Implement a Shadow DOM on every Custom Elements
         const shadowRoot = this.attachShadow({ mode: "open" });

         const template = document.getElementById("details-page-template");
         const content = template.content.cloneNode(true);
         this.styles = shadowRoot.appendChild(document.createElement('style'));
         shadowRoot.appendChild(content);
    }

    connectedCallback(){
        console.log(this);
        loadCSS(this);
    }
}
customElements.define("details-page", DetailsPage);
