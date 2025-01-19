import User from "../models/UserModel.js";
import generateToken from "../utils/jwt.js";
import bcrypt from "bcryptjs"

const register = async(req,res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            throw new Error("All Fields Are Required");
        }

        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ success: false, message: "User Already Exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        user.save();

        return res.status(201).json({ success: true, message: "Registration Successful", token: generateToken(user._id) })
    } catch (error) {
        return res.status(500).json({ success: false, Error: error.message });
    }
}

const login = async(req,res) => {
    try {
        const { email, password } = req.body;

        if(!email, !password) throw new Error("All Fields Are Required");

        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ success: false, message: "Email Id is Invalid" }); 

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched) return res.status(400).json({ success: false, message: "Password is Inavalid" });

        return res.status(200).json({ success: true, message: "Login Successful", token: generateToken(user._id) });

    } catch (error) {
        return res.status(500).json({ success: false, Error: error.message });
    }
}

export { register, login };