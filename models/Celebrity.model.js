//  Add your code here
const { model, Schema } = require("mongoose");

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
});

const CelebrityModel = model('celebrity', celebSchema)

module.exports = CelebrityModel



// //  test code here
// const { model, Schema } = require('mongoose')

// const CelebritySchema = Schema({
//   name: String,
//   occupation: String,
//   catchPhrase: String,
// })

// const Celebrity = model('Celebrity', CelebritySchema)

// module.exports = Celebrity

