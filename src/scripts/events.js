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
const events = {
    submitEvent() {
        const submitBtn = document.getElementById("submitBtn")

        submitBtn.addEventListener("click", () => {
            API.saveEntry(json())
        })
    },
    editEvent() {
        const containerEl = document.querySelector("#results-container")
        containerEl.addEventListener("click", event => {
            if (event.target.id.startsWith("editBtn--")) {
                const toEdit = event.target.id.split("--")[1]
                
                // Need to pass in an obj here..
                // TODO: repopulate the DOM when edit btn clicked & 
                // finish edit functionality.. Then delete... Then how
                // to connect the data lists.
                API.getSingleEntry(toEdit)
                    .then(entry => {
                        console.log(entry)
                        // API.editEntry(entry)
                    })
            }
        })
    }
}


// TODO: Look at ch. 14 on relational data and add an id for "places" 
// to be created alongside primary id in the interests DB.

export {events}