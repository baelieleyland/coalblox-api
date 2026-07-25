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
        userId: 1,
        username: req.body.username || "Guest",
        message: "Account created!"
    });
});

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

const port = process.env.PORT || 3000;

app.get("/UserCheck/checkifinvalidusernameforsignup", (req, res) => {
    res.json({
        success: true,
        isValid: true
    });
});
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});