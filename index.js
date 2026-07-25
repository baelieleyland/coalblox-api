const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "https://baelieleyland.github.io",
    credentials: true
};

app.use(cors(corsOptions));

app.options("/{*any}", cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("CoalBlox API is running!");
});

// Signup
app.post("/signup/v1", (req, res) => {
    console.log("Signup request:", req.body);

    const username = req.body?.username || "Guest";

    res.json({
        success: true,
        userId: 1,
        username: username,
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

// Temporary users (replace with a database later)
const users = [
    {
        id: 1,
        username: "testaccount1",
        password: "TEST1234"
    }
];

app.post("/login/v1", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Incorrect username or password."
        });
    }

    res.json({
        success: true,
        user: {
            id: user.id,
            username: user.username
        },
        message: "Login successful!"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});