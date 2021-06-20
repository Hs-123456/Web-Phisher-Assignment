const express = require("express");
const router = express.Router();
const AddStudents = require("../../model/AddStudent");
router.get("/", async (req, res) => {
  AddStudents.find({}, function (err, users) {
    console.log("request");
    res.send(users);
  });
});

module.exports = router;
