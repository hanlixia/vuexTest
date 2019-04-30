const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/news')

const newsSchema = new mongoose.Schema({
	title: String,
	content: String
})

const Models = {
	News:mongoose.model('News',newsSchema)
}

module.exports = Models