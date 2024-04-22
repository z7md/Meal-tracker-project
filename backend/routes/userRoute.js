import express from "express";
import { User } from "../models/userModel.js";
import { Sub } from "../models/subModel.js";

const router = express.Router();

router.get("/:id", async (request, response) => {
    const { id } = request.params;
    console.log(id)
    try {
      const subs = await Sub.find({
        userId:id
      });
      console.log(subs)
      return response.status(200).json({
        count: subs.length,
        data: subs,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

router.post("/", async (req, res) => {
  const { email, password } = req.body;


    const check = await User.findOne({ email: email });
    console.log(check);
    if (check) {
      res.json(check);
    } else {
      res.json("notexist");
    };
});


router.post("/signup", async (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;

  const newUser = {
    email: email,
    password: password,
  };

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json(true);
    } else {
       const x = await User.insertMany([newUser])
        res.json(x);
    }
  } catch (e) {
    res.json("fail");
  }
});

export default router;
