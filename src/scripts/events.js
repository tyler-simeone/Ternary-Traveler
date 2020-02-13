import {json, htmlCard} from "./factory.js"
import {render} from "./dom.js"
import {API} from "./api.js"

/* 
Here is where the meat of our code will be (at least for now).
Will be invoking the dom.js render function, the api.js fetch methods, 
and the factory.js html & json factory functions.
*/ 

// The code works! Main problem was in the fetch POST req I was stringify'ing
// the returned json obj, but the json function already returned it stringified.
const submitEvent = () => {
    const submitBtn = document.getElementById("submitBtn")

    submitBtn.addEventListener("click", () => {
        event.preventDefault()
        API.saveEntry(json())
        console.log(json())
    })
}

export {submitEvent}