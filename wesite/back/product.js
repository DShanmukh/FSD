import mongoose from "mongoose";

const Schema = mongoose.Schema;

let dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  productpic: {
    type: String,
    required: true,
  },
});

// Use a singular noun for the model name (convention in Mongoose)
export default mongoose.model("Data", dataSchema);
