import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import routes from "./routes";
import cors from "cors"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/data", (req,res)=>{
  res.status(200).send("Hello from AWS shell");
});
app.use("/", routes);
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
