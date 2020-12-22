const mongoose = require('mongoose')

const connection = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9b1df.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

mongoose.set("debug", true)
mongoose.Promise = global.Promise
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })


module.exports.User = require("./user")
module.exports.Nutrient = require("./nutrient")
module.exports.Crop = require("./crop")
module.exports.Fertilizer = require("./fertilizer")
module.exports.Sample = require("./sample")