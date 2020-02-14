// Here we will access the JSON DB to perform GET, POST, DELETE, and PUT operations

const API = {
    getEntries() {
        return fetch("http://localhost:8088/interests")
            .then(resp => resp.json())
            // then render the responses to DOM here using factory.js & dom.js
    },
    // This gets a single entry obj to then get passed into editEntry()
    getSingleEntry(entryId) {
        return fetch(`http://localhost:8088/interests/${entryId}`)
            .then(resp => resp.json())
    },
    // This will post the entry to DB in JSON obj format via factory.js
    saveEntry(entry) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: entry
        })
    },
    // This will find the DB entry via passed-in obj's ID, and then it will replace it with updated values via events.js, factory.js, dom.js
    editEntry(entry) {
        return fetch(`http://localhost:8088/interests/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteEntry(entryId) {
        return fetch(`http://localhost:8088/interests/${entryId}`, {
            method: "DELETE"
        })
    }
}

export {API}