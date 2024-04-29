const mongoose=require("mongoose");

const createSchema=mongoose.Schema({
    // username,mobile,email,designation,gender,course
    username: {
        type: String,
        required: [true, "Please add the user name"],
      },
      mobile: {
        type: String,
        required: [true, "Please add the user mobile"],
        unique: [true, "mobile address already taken"],
      },
      email: {
        type: String,
        required: [true, "Please add the user email"],
      },
      designation: {
        type: String,
        required: [true, "Please add the user designation"],
      },
      gender: {
        type: String,
        required: [true, "Please add the user gender"],
        // unique: [true, "Email address already taken"],
      },
      course: {
        type: String,
        required: [true, "Please add the user course"],
      },
    },
    {
      timestamps: true,
    }

)

module.exports=mongoose.model("details",createSchema);