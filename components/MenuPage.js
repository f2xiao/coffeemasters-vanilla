
export default class MenuPage extends HTMLElement {
    constructor() {
        super();

        // Implement a Shadow DOM on every Custom Elements
        this.root = this.attachShadow({ mode: "open" });
        
        async function loadCSS() {
            const request = await fetch("/components/MenuPage.css");
            styles.textContent = await request.text();
        }

        const styles = document.createElement('style');

        loadCSS();


        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        content.appendChild(styles);
        this.root.appendChild(content);
    }

    render() {
        console.log(app.store.menu)
        if (app.store.menu) {
            this.root.querySelector("#menu").innerHTML = "";
            for (let category of app.store.menu) {
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class='category'>
                    </ul>`;
                this.root.querySelector("#menu").appendChild(liCategory);
    
                // create the products for each category
                const products = category.products;
                if (products.length) {
                    products.forEach(product => {
                        const liProduct = document.createElement("product-item");
                        liProduct.dataset.product = JSON.stringify(product);
                        liCategory.querySelector(".category").appendChild(liProduct);
                    });
                }

            }  
        } else {
            this.root.querySelector("#menu").innerHTML = `Loading...`;
        }
    }

    connectedCallback(){
       console.log(this.root);
        // the menupage re-render if the "appmenuchange" event is fired
        window.addEventListener("appmenuchange", () => {
            this.render();
        });
        // initial render
        this.render();
    }
}
customElements.define("menu-page", MenuPage);

