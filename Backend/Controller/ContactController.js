const Contact=require("../Module/ContactModel")

const SubmitContact=async (req,res)=>{
    try {
        const {Name, Email, Mobile,Message}=req.body;

        if (!Name || !Email || !Mobile || !Message) {
            return res.status(400).json({
                error: true,
                message: "All fields are required."
            });
        }
        const newContact= new Contact({
            Name,
            Email,
            Mobile,
            Message
        })
        await newContact.save();

        res.status(201).json({
            error:false,
            success:true,
            message:"Form Submitted Succesfully"
        })

        
    } catch (err) {
        res.status(400).json({
            message:err.message || "Internal Server issue",
            error:true,
            success: false
        })
        
    }

}

module.exports=SubmitContact;