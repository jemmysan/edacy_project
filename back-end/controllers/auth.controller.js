import { signUpValidator, signinValidator} from "../middlewares/auth-validator.js";
import { User } from "../models/users.model.js";
import { doHash, doHashValidation } from "../utils/hashing.js";
import jwt from 'jsonwebtoken'


const signup = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const { error, value } = signUpValidator.validate({
            fullname,
            email,
            password
        })

        if (error) return res.status(401).json({success: false, message: error.details[0].message});

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists!' });

        const hashPassword = await doHash(password, 12);
        const newUser = await User.create({
            fullname,
            email, 
            password : hashPassword
        });
        
        const result = await newUser.save();
        result.password = undefined
        res.status(201).json({
            success: true,
            message : 'Your account has been created successfully',
            result
        });

    } catch(err) {
        console.log(err)
        
    }
}


const signin = async (req, res) => {
    const {email, password} = req.body

    try {
        const {error, value} = signinValidator.validate({email,password})

        if (error) return res.status(401).json({success: false, message: error.details[0].message});

        const userExists = User.findOne({email}).select('+password');

        if (!userExists) return res.status(401).json({ message: 'User doesn\'t exists!' });

        const result = doHashValidation(password,userExists.password);
        // return res.status(200).json({ message: result });
        

        if (!result) return res.status(401).json({ message: 'Invalid credentials!' });

        const token = jwt.sign(
            {
            userId : userExists._id,
            email : userExists.email,
            verified : userExists.verified
        },
        process.env.JWT_SECRET,
        {
            expiresIn : '8h'
        }
    );
    
    res.cookie('Authorization','Bearer'+ token, {
        expires : new Date(Date.now()+8*3600000), 
        httpOnly : process.env.NODE_ENV === 'production',
        secure : process.env.NODE_ENV ==='production'
    }).json({
        success :true,
        token,
        message : 'logged successfully'
    })

    } catch (error) {
        console.log(error)
    }
}


const signout = async (req, res) =>{
    res.clearCookie('Authorization')
    .status(200)
    .json({ success: true, message: 'logged out successfully' });
};




export {
    signup,
    signin,
    signout
}
