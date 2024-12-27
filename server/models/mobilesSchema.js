const mongoose = require('mongoose')

const mobileSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    specifications: {
        dimensions: String,
        batteryCapacity: Number,
        camera: {
            rear: Number,
            selfie: Number
        },
        ram: Number,
        rom: Number,
        processor: String,
        weight: Number
    }
})

module.exports = mongoose.model("mobiles", mobileSchema)