const goose = require("mongoose");

goose.connect("mongodb://localhost:27017/MongooseDashboard", {useNewUrlParser:true}, (errs)=>console.log(errs?errs:"db gucci"));

const MongooseSchema = new goose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: [2, "Your name is too short, a minimum of two characters are required"]
    },
    age: {
        type: Number,
        required: true, 
        minlength: [1, "The age field is empty"]
    }
}, {timestamps:true});

const Mongooses = goose.model('mongoose', MongooseSchema);

module.exports = Mongooses;