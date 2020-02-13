// Here we will access the JSON DB to perform GET, POST, DELETE, and PUT operations

const API = {
    getEntries() {
        return fetch("http://localhost:8088/places")
            .then(resp => resp.json())
            // then render the responses to DOM here using factory.js & dom.js
    },
    // This will post the entry to DB in JSON obj format via factory.js
    saveEntry(entryId) {
        return fetch(`http://localhost:8088/places`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryId)
        })
    },
    editEntry(entry) {
        return fetch(`http://localhost:8088/places/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteEntry(entryId) {
        return fetch(`http://localhost:8088/places/${entryId}`, {
            method: "DELETE"
        })
    }
}