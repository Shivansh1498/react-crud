import express from "express";
import dotenv from "dotenv";
import clientRoutes from "./routes/clientRoutes.js";
import connectDb from "./config/db.js";
import cors from "cors";

dotenv.config();

const app = express();
connectDb();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/api/users", clientRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`Serving on port http://localhost:${PORT}`);
});
