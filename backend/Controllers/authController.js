import User from '../models/UserSchema.js'  
import Doctor from '../models/DoctorSchema.js'  
import jwt from 'jsonwebtoken'   
import bcrypt from 'bcryptjs' 

const generateToken = user =>{
    return jwt.sign({id:user._id , role:user.role}, process.env.JWT_SECRET_KEY,{
        expiresIn:'99999999d'
    })
}
  
export const register = async (req, res) => {  
  const {email, password, name, role, photo, gender} = req.body  
  try {  
    let user = null  


    if(role == 'patient'){  
      user = await User.findOne({email})  
    }else if (role == 'doctor') {
        user = await Doctor.findOne({email}) 
    }  

    //CHECK if user exist 
    if (user) {
        return res.status(400).json({message:'user already exist'})
        
    }

    //hash password 
    const salt = await bcrypt.genSalt(10) //!!!see what this means
    const hashPassword = await bcrypt.hash(password,salt)

    if (role === 'patient') {
        user=new User({
            name,
            email,
            password:hashPassword,
            photo,
            gender,
            role
        })
    }

    if (role === 'doctor') {
        user=new Doctor({
            name,
            email,
            password:hashPassword,
            photo,
            gender,
            role
        })
    }
    await user.save()

    res.status(200).json({success:true , message:"User successfully created"})








  } catch (err) { 
    res.status(500).json({success:false , message:"User fail created"})
 
  }  
};

export const login = async (req, res) => {  
    const {email} = req.body  
    try {  
        let user = null  
        const patient = await User.findOne({email})  
        const doctor = await Doctor.findOne({email})  
        if(patient){  
             user = patient  
        }  
        if(doctor){  
            user = doctor  
        }  

        // check if user not exist
        if (!user) {
            return res.status(404).json({message:'user doesnt exist'})
        }
        
        // compare password
        const isPasswordMatch= await bcrypt.compare(req.body.password,user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({status:false ,message:'wrong password!'}) 
        }

        //get token (see what is token what do )
        const token = generateToken(user);

        const {password, role, appointments, ...rest } = user._doc
        res.status(200).json({status:true ,message:'login success!', token ,data:{...rest},role})



    } catch (err) {
        res.status(500).json({status:false ,message:'failed to login!'})
    }  
};