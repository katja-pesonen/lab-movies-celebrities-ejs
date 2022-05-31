//  Add your code here
const { model, Schema, default: mongoose } = require("mongoose");

const Celebrity = require('./Celebrity.model')

const movieSchema = new Schema({
    title: { type: String, required: true },
    genre: String,
    plot: String,
    cast: [{type: Schema.Types.ObjectId, ref: Celebrity }]
});

const MovieModel = model('movie', movieSchema)

module.exports = MovieModel


//  test code here 🤫
// const { model, Schema } = require('mongoose')
// const Celebrity = require('./Celebrity.model')

// const MovieSchema = Schema({
//   title: { type: String, required: true },
//   genre: String,
//   plot: String,
//   cast: [{ type: Schema.Types.ObjectId, ref: Celebrity }],
// })

// const Movie = model('Movie', MovieSchema)

// module.exports = Movie
