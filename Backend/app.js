const express=require("express")

const app=express();
const mongoose=require("mongoose");
const database=require("./db")
const login=require("./model/login")


const details=require("./model/details")

database();

// const router=require("./routes/login")

// app.use("/api",router)


app.use(express.json())

app.get("/",(req,res)=>{


    res.send("jjjjj");

})

app.post("/api/user",async(req,res)=>{
    
     const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const Login = await login.create({
    username,
      email,
      password
     
    });
  
    res.status(201).json(Login);

})




app.post("/api/detalis",async(req,res)=>{
    
    const { username,mobile,email,designation,gender,course } = req.body;
    console.log(req.body)
   if (!username||!mobile||!email||!designation||!gender||!course) {
     res.status(400);
     throw new Error("All fields are mandatory !");
   }
   const Details = await details.create({
   username,
    mobile,
    email,
    designation,
    gender,
    course
  
    
   });

 
   res.status(201).json(Details);

})


app.get("/api/data",async(req,res)=>{
    // res.send("hlo from data")
        const data=await details.find({})
        console.log(data)
        res.status(200).json(data);
    
   

})

app.post("api/updateuser",async(req,res)=>{
         console.log(req.body);
    const data=await details.findById(req.params.id)
    if(!data){
        res.status(404);
        throw new Error("user not find")
    }


    if(details.user.id.toString()!=req.user.id){

        res.status(403)
        throw new Error("enter the wrong id")
    }


    const updateddata = await details.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      console.log(updateddata)

      res.status(200).json(updateddata);
})


app.listen(30002,()=>{
console.log("server is running")    
})


