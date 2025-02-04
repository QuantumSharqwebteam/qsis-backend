import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET

const loginUser = async (req, res) => {
    try{
    const { email, password } = req.body
    const user = await User.findOne({ email})
    const hashpass = user.password

    if (!user) {
        res.status(404).json({ message: "user not found" })
    }
    const passwordValid = await bcrypt.compare(password, hashpass)
    if (!passwordValid) {
        res.json({
            message: "Invalid email or Password"
        })
    } else{

        const token = jwt.sign({ _id: user._id, }, secret, { expiresIn: "30d" })
        res.status(200).json({
            message: "Login Successfull",
            token,
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
            }
        })
    }
} catch(err){
    console.log(`you got error ${err}`)
    res.status(404).json({
        message:"Invalid email or Password"
    })
}

}
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        const token = jwt.sign({ _id: newUser._id, }, secret, { expiresIn: "30d" })

        console.log(newUser);
        res.status(201).json({ message: "user created successfully", token })

    } catch (error) {
        console.error('Error creating new user: ', error)
        if (error.code === 11000) {
            return res.status(409).json({ error: 'Duplicate key error', details: 'User already exists' });
        }
    }
}


export { createUser, loginUser }