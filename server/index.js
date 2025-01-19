import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db.js";
import userRoutes from "./routes/UserRoutes.js"
import courseRoutes from "./routes/CourseRoutes.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

//ROUTES
app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes);

app.get('/', (req,res) => {
    res.send("App is working");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    connectDB(process.env.MONGODB_URL);
    console.log("SERVER RUNNING ON PORT ", PORT);
})