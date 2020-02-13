/* Here we will have factory functions that return 1) an object to be
posted to JSON DB, and 2) an HTML card that will put JSON obj into 
HTML format to be displayed on the DOM */

// Creating object from user input to be added to JSON DB (POST, PUT)
const json = () => {
    const destName = document.getElementById("name").value
    const destDescription = document.getElementById("description").value
    const destCost = document.getElementById("cost").value
    const destReview = document.getElementById("review").value

    return `
        {
            "name": "${destName}",
            "description": "${destDescription}",
            "cost": "${destCost}",
            "review": "${destReview}"
        }
    `
}

// This is used to display JSON obj in the DOM (GET). Will need an obj as argument.
const htmlCard = (jsonData) => {
    return `
        <section>
            <p>${jsonData.name}</p>
            <p>${jsonData.description}</p>
            <p>${jsonData.cost}</p>
            <p>${jsonData.review}</p>
        </section>
    `
}

export {json, htmlCard}