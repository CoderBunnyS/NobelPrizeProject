const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const nobelPrize = new Schema({
    year: String,
    category: String,
    laureates: [
        {
//            "id": "991",
            firstname: String,
            surname: String,
            motivation: String,
            share: Number
        }
    ]})

module.exports = mongoose.model('nobelPrize', nobelPrize)
