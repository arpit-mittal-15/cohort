import dotenv from "dotenv";
import express from 'express'
import cors from 'cors'

import userRoutes from './routes/userRoutes';
import blogRoutes from './routes/blogRoutes';
import authMiddleware from "./middlewares/auth";

dotenv.config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', authMiddleware, blogRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started at port ${PORT}`);
})