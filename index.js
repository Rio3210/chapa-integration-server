import express from 'express';
import dotenv from "dotenv";
import productRoute from "./routes/product.js";
import cors from "cors";
import { connectDB } from "./helper.js";

dotenv.config();
const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

//routes
app.use('/api',productRoute );

// db connection
connectDB()
  .then(() => {
    const port = process.env.PORT || 4001;
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });