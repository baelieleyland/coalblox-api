const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("CoalBlox API is running!");
});

app.post("/signup/v1", (req, res) => {
    console.log(req.body);

    res.json({
        success: true,
        message: "Account created!"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});