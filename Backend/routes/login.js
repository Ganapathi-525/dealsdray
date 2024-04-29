
const express=require('express');

const router=express.Router();

const {loginq}=require("../controller/login")

router.post('/user',loginq);


module.exports=router