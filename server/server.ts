import { app } from "./app";
import connectDB from "./utils/db";
import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();

//Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDE_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});
//SERVER Connection
app.listen(process.env.PORT, () => {
  console.log(`SERVER is listening on port ${process.env.PORT}`);
  connectDB();
});
