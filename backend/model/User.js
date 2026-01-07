//candidate / recruiter / admin
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:"String",
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:true,
            minlength:6,
            select:false, // fide password by default
        },
        role:{
            type:String,
            enum:["jobseeker", "recruiter"],
            default:"jobseeker"
        },
        resume:{
            type:String,
        },
        company:{
            type: String // only for recruiters
        },
        profileCompleted:{
            type:Boolean,
            default:false
        }
         
    }
    ,
    {timestamps:true}
)

export default mongoose.model("User", UserSchema)
/*
🧠 What to understand here

One table for all users
role controls permissions
timestamps automatically adds createdAt
*/