// const express=require("express");
const asyncHandler=require("express-async-handler");
const login=require("../model/login");


const loginq=(req,res)=>{


    console.log(req.body);
    res.send("hlo hi")
}

const createLoginUser = (req, res) => {
res.send("hlo")
console.log(req.body)

    // const { name, email, password } = req.body;
    // // if (!name || !email || !password) {
    // //   res.status(400);
    // //   throw new Error("All fields are mandatory !");
    // // }
    // const Login = await login.createOne({
    //   name,
    //   email,
    //   password,
    //   user_id: req.user.id,
    // });
  
    // res.status(201).json(Login);
  };



  module.exports={
    createLoginUser,
    loginq
  }