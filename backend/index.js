import express from "express";
import applicationRouter from "./routes/applicationRoutes.js";
import userrouter from "./routes/userRoutes.js"; 
import connectDB from "./config/db.js";
import cors from "cors"; 
import jobRouter from './routes/JobRoutes.js';
import categRouter from './routes/CategoryRoutes.js';
const app = express();

 
app.use(cors({
  origin: "https://job-portal-web-coral.vercel.app/",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.PORT)
//Connect DB
connectDB();
app.get("/",(req,res)=>{
    res.status(200).send("Express Server is Running");
})

app.use("/api/application", applicationRouter);
app.use("/api/users",userrouter); 
app.use("/api/jobs",jobRouter); 
app.use("/api/category",categRouter); 


const PORT = 3000; 

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})
