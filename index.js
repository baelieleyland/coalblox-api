const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));

app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("CoalBlox API is running!");
});

// Signup
app.post("/signup/v1", (req, res) => {
    console.log("Signup:", req.body);

    res.json({
        success: true,
        userId: 1,
        username: req.body.username || "Guest",
        message: "Account created!"
    });
});

// Captcha
app.post("/captcha/validate/signup", (req, res) => {
    res.json({
        success: true,
        message: "Captcha passed"
    });
});

app.post("/captcha/validate/login", (req, res) => {
    res.json({
        success: true,
        message: "Captcha passed"
    });
});

// Username checker
app.get("/UserCheck/checkifinvalidusernameforsignup", (req, res) => {
    const username = req.query.username;

    console.log("Username check:", username);

    res.json({
        success: true,
        isValid: true,
        IsValid: true,
        username: username || "",
        message: "Username is available"
    });
});

// Catch missing routes
app.use((req, res) => {
    console.log("404:", req.method, req.url);

    res.status(404).json({
        success: false,
        message: "Endpoint not found"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});