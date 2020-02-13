/* Here we will have factory functions that return 1) an object to be
posted to JSON DB, and 2) an HTML card that will put JSON obj into 
HTML format to be displayed on the DOM */

const json = () => {
    const destName = document.getElementById("name")
    const destDescription = document.getElementById("description")
    const destCost = document.getElementById("cost")
    const destReview = document.getElementById("review")

    return `
        {
            "name": ${destName},
            "description": ${destDescription},
            "cost": ${destCost},
            "review": ${destReview}
        }
    `
}

const html = () => {
    return `
        <section>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </section>

    `
}