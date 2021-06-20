const express = require("express");
const AddStudent = require("../../model/AddStudent");
const router = express.Router();
router.post("/", async (req, res) => {
  const { Email, Password } = req.body;
  let user = await AddStudent.findOne({ email: Email, password: Password });
  if (user) {
    res.json({ status: "success" });
  } else {
    res.json({ status: "Login Failed" });
  }
});

module.exports = router;
