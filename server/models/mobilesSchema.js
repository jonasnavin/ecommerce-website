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
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    dimensions: String,
    batteryCapacity: String,
    rearCamera: String,
    selfieCamera: String,
    ram: String,
    rom: String,
    processor: String,
    weight: String

})

mobileSchema.pre('save', function (next) {
    this.image = `http://localhost:5000/images/${this.image}`
    next();
});

module.exports = mongoose.model("mobiles", mobileSchema)