const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

let messages = [
    {
        "id":"1",
        "title":"message 1"
    },
    {
        "id":"2",
        "title":"message 2"
    },
    {
        "id":"3",
        "title":"message 3"
    }
];

let number = messages.length

app.get('/', (req, res) => {
    res.json(messages)
})

app.post("/", (req, res) => {
    number += 1
    let newMessage = {"id": number, "title": "message" + number.toString()}
    messages.push(newMessage)
    res.send(newMessage);
});

app.delete("/", (req, res) => {
    messages = []
    number = 0
    res.send(messages)
});

app.listen(4000, () => {
    console.log('listening for requests on port 4000')
})