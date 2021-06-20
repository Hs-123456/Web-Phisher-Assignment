const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const AddStudent = require("../../model/AddStudent");
router.post("/", async (req, res) => {
  const { FirstName, LastName, Email, phone_number, Password } = req.body;
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

  try {
    const Add_students = new AddStudent({
      id: Math.floor(Math.random() * (1000 - 100)) + 100,
      name: FirstName,
      last_name: LastName,
      email: Email,
      phone: phone_number,
      password: Password,
    });
    const post = await Add_students.save();
    res.json({
      status: "Add Student Sucessfully",
      Post: post,
    });

    const mailOptions = {
      from: "sainiharkesh336@gmail.com",
      to: Email,
      subject: "Add account successfully",
      text: `Login id ${Email} Password ${Password}`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email send", info.response);
      }
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
