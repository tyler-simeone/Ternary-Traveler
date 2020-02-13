// Here we will make the functionality to render the JSON data to the DOM

const render = () => {
    const results = document.querySelector("#results-container")
    results.innerHTML = ""

    results.innerHTML = API.getEntries().then(entries => 
        entries.forEach(entry => htmlCard(entry)))
}

export {render} 