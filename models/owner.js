const mongoose = require ("mongoose")

const ownerSchema = new mongoose.Schema({
    OwnersName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Owner = mongoose.model("Owner", ownerSchema)

module.exports = Owner