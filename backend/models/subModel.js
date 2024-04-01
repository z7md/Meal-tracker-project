import mongoose from "mongoose";

var SubSchema = new mongoose.Schema({
    subname: {
        type:String ,
        required:true
    },
    email: String,

    phone:{
        type:String,
        required:true
    },
    meals:{
        type:Number,
        required:true
    },
    carb:{
        type:Number,
        required:true
    },
    protein:{
        type:Number,
        required:true
    },
    mealsLeft:{
    type:Number,
    required:true
    },
    mealTime:{
        type:Array,
        required:true
    },
    expirationDate:{
        type:String,
        required:true
    }
  }, {timestamps: true});
  
export const Sub =mongoose.model('Sub', SubSchema);
  