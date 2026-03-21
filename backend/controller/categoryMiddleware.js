import CategorySchema from "../model/CategorySchema.js"

export const getAllCategory = async (req, res) => {
    try {

        const categ = await CategorySchema.find();
        
        
        res.status(200).json({
            status: true,
            categ,
            message: "okk",
        })

    } catch (error) {
        console.log("errror");
        
        res.status(500).json({
            status: false,
            message: "Internal Server error"
        })
    }
}