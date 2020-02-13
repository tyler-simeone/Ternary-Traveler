/* Here we will have factory functions that return 1) an object to be
posted to JSON DB, and 2) an HTML card that will put JSON obj into 
HTML format to be displayed on the DOM */

// Creating object from user input to be added to JSON DB (POST, PUT)
const json = () => {
    const destName = document.getElementById("name").value
    const destDescription = document.getElementById("description").value
    const destCost = document.getElementById("cost").value
    const destReview = document.getElementById("review").value
    const place = document.querySelector("#places").value

    return `
        {
            "name": "${destName}",
            "description": "${destDescription}",
            "cost": "${destCost}",
            "review": "${destReview}",
            "place": "${place}"
        }
    `
}

// This is used to display JSON obj in the DOM (GET). Will need an obj as argument.
const htmlCard = (jsonData) => {
    return `
        <section>
            <h3>${jsonData.name}</h3>
            <p>${jsonData.description}</p>
            <p>${jsonData.cost}</p>
            <p>${jsonData.review}</p>
            <p>${jsonData.place}</p>
        </section>
        <button id="editBtn--${jsonData.id}">
            Edit
        </button>
        <button id="deleteBtn--${jsonData.id}">
            Delete
        </button>
    `
}

export {json, htmlCard}