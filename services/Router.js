const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                // disable the default link behaviour to send request to a server or refresh page
                event.preventDefault();
                const href = event.target.getAttribute("href");
                Router.go(href);
            });
        });  
        // Process initial URL   
        Router.go(location.pathname);

        // popstate is triggered when the user presses the back or forward button in the browser 
        // or when JavaScript code explicitly calls methods like history.back(), history.forward(), or history.go()
        window.addEventListener('popstate',  event => {
            Router.go(event.state.route, false);
        });
        
    },    
    go: (route, addToHistory=true) => {
        // console.log(`Going to ${route}`)
        if (addToHistory) {
            // pushes a new state onto the history stack, updates the URL of the current page without triggering a full page refresh.
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page");
                
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                
                break;
            default:
                if (route.startsWith("/product-")) {                
                    pageElement = document.createElement("details-page");
                    
                    pageElement.dataset.productId = route.substring(route.lastIndexOf("-")+1);
                }
                break;   
        }
        if (pageElement) {
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageElement);
        }
        // reset the scroll
        window.scrollX = 0;
        window.scrollY = 0;

    }
}

export default Router;
