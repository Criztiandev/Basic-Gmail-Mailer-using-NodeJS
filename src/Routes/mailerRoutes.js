const express = require("express");
const { sendEmail } = require("../Controller/mailerController");
const router = express.Router();

router.post("/", sendEmail);

module.exports = router;
