const mobiles = require('../models/mobilesSchema')

const getAllMobiles = async (request, response) => {
    const allMobiles = await mobiles.find()
    return response.status(200).json(allMobiles)
}

const getMobile = async (request, response) => {
    const { id } = request.params
    const mobile = await mobiles.findByIdAndUpdate(id)
    return response.status(200).json(mobile)
}

const deleteMobile = async (request, response) => {
    const { id } = request.params
    const mobile = await mobiles.findByIdAndDelete(id)
    return response.status(200).json(mobile)
}

const addNewMobile = async (request, response) => {
    try {
        const newMobile = {
            brand: request.body.brand,
            model: request.body.model,
            price: request.body.price,
            image: request.body.image,
            specifications: request.body.specifications
        }
        const mobile = await mobiles.create(newMobile)
        return response.status(201).json(mobile)
    }
    catch (err) {
        console.log(err.message)
        return response.status(400).json({ error: err.name, errorMessage: err.message })
    }
}
const updateMobile = async (request, response) => {
    try {
        const { id } = request.params
        const updatedMobile = {
            brand: request.body.brand,
            model: request.body.model,
            price: request.body.price,
            image: request.body.image,
            specifications: request.body.specifications
        }
        const mobile = await mobiles.findByIdAndUpdate(id, updatedMobile)
        return response.status(201).json(mobile)
    }
    catch (err) {
        console.log(err.message)
        return response.status(400).json({ error: err.name, errorMessage: err.message })
    }
}

module.exports = {
    getAllMobiles,
    addNewMobile,
    updateMobile,
    getMobile,
    deleteMobile
}