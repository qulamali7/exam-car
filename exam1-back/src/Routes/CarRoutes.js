import express from "express";
import { createCar, deleteCar, getAll, getById, updateCar } from "../Controller/CarController.js";
export const carRoute = express.Router()

carRoute.get('/cars', getAll)
    .get('/cars/:id', getById)
    .post('/cars/', createCar)
    .put('/cars/:id', updateCar)
    .delete('/cars/:id', deleteCar)