import commonElements from "./commonElements.js"
import mainPageElements from "./mainPage.js"

const domController = (function () {
    // these are executes immediately after the DOM has finished loading
    let body = document.querySelector('body');

    function render() {
        // render header inside (body), common for all elements
        commonElements.renderHeader(body);

        // render main page elements inside body
        mainPageElements.renderMain(body);
    }
    
    return { render };
}) ();

export default domController;
