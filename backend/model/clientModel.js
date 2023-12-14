import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  mobileNumber: { type: Number },
  project: { type: String },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
