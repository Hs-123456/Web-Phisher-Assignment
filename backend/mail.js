const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: "587",
  secure: false,
  requireTLS: true,
  auth: {
    user: "sainiharkesh336@gmail.com",
    pass: "kusum@$971890",
  },
});

const mailOptions = {
  from: "sainiharkesh336@gmail.com",
  to: "rameshkumarsaini275@gmail.com",
  subject: "Add account successfully",
  text: "welcome to coding world",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email send", info.response);
  }
});
