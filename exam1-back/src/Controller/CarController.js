import { CarModel } from "../Model/CarModel.js"

export const getAll = async (req, res) => {
    const cars = await CarModel.find({})
    res.send(cars)
}

export const getById =async (req, res) => {
    const { id } = req.params
    const car = await CarModel.findbyId(id)
    res.send(car)
}

export const createCar =async (req, res) => {
    const { model, year, engine } = req.body
    const newCar = new CarModel({ model, year, engine })
    await newCar.save()
    res.send('Got a POST request')
}

export const updateCar =async (req, res) => {
    const { id } = req.params
    const { model, year, engine } = req.body
    const car = await CarModel.findByIdAndUpdate(id, { model, year, engine })
    res.send('Got a PUT request at /car')
}

export const deleteCar =async (req, res) => {
    const { id } = req.params
    const car = await CarModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /car')
}