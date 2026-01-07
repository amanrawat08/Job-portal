import express from "express";
import { registerUser, loginUser} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";


const Router = express.Router();

Router.post('/login', loginUser);
Router.post('/register', registerUser);


// example protected route
Router.get("/me", protect, (req,res)=>{
    res.json(req.user);
})

export default Router;