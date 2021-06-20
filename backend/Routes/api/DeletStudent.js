const express = require("express");
const router = express.Router();
const AddStudent = require("../../model/AddStudent");
router.delete("/", async (req, res) => {
    try{
        const id = req.query.id

        await AddStudent.findByIdAndRemove(id).exec();
        res.json({status: 'Successfully deleted'})
    }catch(err){

    }
});

module.exports = router;
