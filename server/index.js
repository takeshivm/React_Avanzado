// min 35:06 - 07
const express = require("express");
const cors = require("cors");

// Middleware
const app = express();

app.use(cors());

// Routes
app.get('/', (req, res) => {
    // Your code here
    res.sendStatus(200).json();
});

app.listen(8000, () => console.log("Server listen on port 8000"));