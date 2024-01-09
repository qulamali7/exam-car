import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
    model: String,
    year: Number,
    engine: Number
});

export const CarModel = mongoose.model('cars', carSchema);