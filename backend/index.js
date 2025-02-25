import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Sub } from "./models/subModel.js";
import subRouter from "./routes/subRoute.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js"

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Hello");
});

app.use("/subs", subRouter);
app.use("/",userRouter)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log("Hello");
    });
  })
  .catch((error) => {
    console.log(error);
  });
