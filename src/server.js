const express = require("express");
const dotnev = require("dotenv").config();

const app = express();
const port = 5000;

app.use("/api/sendEmail", require("./Routes/sendEmailRoutes"));

app.listen(port, console.log(`Server is Running on ${process.env.BASE_URL}`));
