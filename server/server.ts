import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();

//SERVER Connection
app.listen(process.env.PORT, () => {
  console.log(`SERVER is listening on port ${process.env.PORT}`);
  connectDB();
});
