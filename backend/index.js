import express from "express";
import applicationRouter from "./routes/applicationRoutes.js";
import userrouter from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import { protect } from "./middleware/authMiddleware.js";
const app = express();


app.use(express.json());
console.log(process.env.PORT)
//Connect DB
connectDB();
app.get("/",(req,res)=>{
    res.status(200).send("Express Server is Running");
})

app.use("/api/application", applicationRouter);
app.use("/api/users",userrouter);


const PORT = 3000; 

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})