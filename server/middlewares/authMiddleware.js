import jwt from "jsonwebtoken"

// const JWT_SECRET = process.env.JWT_SECRET;

const authMiddlware = (req,res,next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token) return res.status(400).json({ message: "No token, Authorization Needed" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) return res.status(400).json({ message: "Invalid Token" });
        req.user = decoded;
        // console.log(decoded);
        next();
    } catch (error) {
        return res.status(500).json({ message: "Invalid Token!" });
    }
}

export default authMiddlware;