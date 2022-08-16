const nodeMailer = require("nodemailer");
const sendEmail = async (req, res) => {
  try {
    const mailTransporter = await nodeMailer.createTransport({
      service: process.env.SERVICE,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await mailTransporter.sendMail({
      from: process.env.USER,
      to: "criztiandev@gmail.com",
      subject: "Greetings",
      text: "Test Email using nodeJS",
    });

    console.log("Email Send Successfully");
  } catch (e) {
    res.status(400);
    console.log(e);
  }
};

module.exports = { sendEmail };
