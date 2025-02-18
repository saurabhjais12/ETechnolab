const express=require("express");
const SubmitContact = require("../Controller/ContactController");

const router =express.Router();

router.post("/submit",SubmitContact);

module.exports=router;
