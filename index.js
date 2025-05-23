const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

const data = [
    {
        id: 1,
        name: "John",
        age: 20
    },
    {
        id: 2,
        name: "Jane",
        age: 21
    }
];


app.get("/api/v1/test/:id", (req, res) => {
    res.send(`Hello World ${req.params.id}`);
});

app.get("/api/v1/test/:id/:name", (req, res) => {
    res.send(`Hello World ${req.params.id} ${req.params.name}`);
});

app.get("/api/v1/test/:id", (req, res) => {
    const data = data.find((item) => item.id === parseInt(req.params.id));
    res.send(data);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
