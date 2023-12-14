import mongoose from "mongoose";

async function connectDb(req, res) {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(conn.connection.host);
  } catch (error) {
    console.error("database connection error: " + error.message);
  }
}

export default connectDb;
