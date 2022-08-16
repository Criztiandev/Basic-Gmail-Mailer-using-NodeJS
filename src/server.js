const express = require("express");
const dotnev = require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/sendEmail", require("./Routes/mailerRoutes"));
app.listen(port, console.log(`Server is Running on ${process.env.BASE_URL}`));
