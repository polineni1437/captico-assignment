import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.connect(url).then(
        console.log("MONGODB CONNECTED")
    )
};

export default connectDB;