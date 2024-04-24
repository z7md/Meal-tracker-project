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
      return response.status(200).json({
        count: subs.length,
        data: subs,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  router.get("/user/:id", async (request, response) => {
    const { id } = request.params;
    try {
      const user = await User.findById(id)
      return response.status(200).json({
        data:user
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });




router.post("/", async (req, res) => {
  const { email, password } = req.body;
    let check1=null;
    let check = await User.findOne({ email: email });
    if(check==null || check.password!=password){
       check1=false;
    }else{
       check1=true;
    }
    console.log(check.password);
    if (check1) {
      res.json(check);
    } else {
      res.json("notexist");
    };
});


router.post("/signup", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  const newUser = {
    email: email,
    password: password,
    totalMeals: 0,
    mealTime: new Array(),
  };
console.log(newUser);
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json(true);
    } else {
       const x = await User.create(newUser);
       console.log(x);
        res.json(x);
    }
  } catch (e) {
    res.json("fail");
  }
});

export default router;
