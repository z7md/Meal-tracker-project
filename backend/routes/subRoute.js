import express from "express";
import { Sub } from "../models/subModel.js";
import moment from "moment";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.subname ||
      !request.body.phone ||
      !request.body.meals ||
      !request.body.carb ||
      !request.body.protein
    ) {
      return response.status(400).send({
        message: "Please send all information",
      });
    }
    const newSub = {
      userId:request.body.userId,
      subname: request.body.subname,
      phone: request.body.phone,
      meals: request.body.meals,
      carb: request.body.carb,
      protein: request.body.protein,
      mealsLeft: request.body.meals * 26,
      mealTime: new Array(),
      expirationDate: moment().add(60, 'days').calendar(),
    };
    const sub = await Sub.create(newSub);
    return response.status(201).send(sub);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});



router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const sub = await Sub.findById(id);
    return response.status(200).json(sub);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.subname ||
      !request.body.phone ||
      !request.body.meals ||
      !request.body.carb ||
      !request.body.protein
    ) {
      return response.status(400).send({
        message: "Please send all information",
      });
    }
    const { id } = request.params;
    const result = await Sub.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Sub not found" });
    } else {
      return response.status(200).json({ message: "Sub Updated!" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Sub.findByIdAndDelete(id);
    console.log(result)
    if (!result) {
      return response.status(404).send({ message: "Sub not found" });
    } else {
      return response.status(201).send(result.userId);
    }
  } catch (error) {
    console.log(error.message);
    response.status(505).send({ message: error.message });
  }
});
export default router;
