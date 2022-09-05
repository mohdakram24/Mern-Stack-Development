const {model,Schema} = require('../connection')

const mySchema =new Schema({
    username : String,
    email : String,
    password : String,
    //school : String
})

module.exports = model('videoCollection',mySchema)