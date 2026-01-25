

export const authorize = (...roles)=>{
    return (req,res,next)=>{
        // if req.user is not present
        if(!req.user){
            return res.status(401).send({message:"Not Authenticated."})
        }
        // if role is not in the role user role 
        if(!roles.includes(req.user)){
            return res.status(403).send({message:"Access Denied for this role."})
        }
        next();
    }
}