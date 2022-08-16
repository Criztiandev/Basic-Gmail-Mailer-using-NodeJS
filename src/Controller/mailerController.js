const nodeMailer = require("nodemailer");
const sendEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

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
      to: email,
      subject: subject,
      text: message,
    });
    res.status(200).json({
      message: message,
      to: email,
      status: "successful",
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      error: e.error,
      status: failed,
    });
  }
};

module.exports = { sendEmail };
