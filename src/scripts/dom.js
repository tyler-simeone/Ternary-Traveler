import { API } from "./api.js"
import { htmlCard } from "./factory.js"
// Here we will make the functionality to render the JSON data to the DOM

const render = () => {
    const results = document.querySelector("#results-container")
    results.innerHTML = ""

    API.getEntries().then(entries => {
        entries.forEach(entry => {
            results.innerHTML += htmlCard(entry)
        })
    })
}

export {render} 