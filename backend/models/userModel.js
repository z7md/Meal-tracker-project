import mongoose from "mongoose";

var UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    totalMeals:{
      type:Number,
      required:true
      },
      mealTime:{
        type:Array,
        required:true
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
