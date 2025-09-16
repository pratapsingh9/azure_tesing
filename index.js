const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Server is healthy 🚀"
    });
});

const data = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 }
];

app.get("/api/v1/test/:id", (req, res) => {
    const user = data.find((item) => item.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.get("/api/v1/test/:id/:name", (req, res) => {
    res.send(`Hello World ${req.params.id} ${req.params.name}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
