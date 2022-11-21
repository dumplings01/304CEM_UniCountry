const mongoose = require("mongoose");

const db='mongodb+srv://YanYee:yanyee0806@cluster0.dyygl0j.mongodb.net/unicountry?retryWrites=true&w=majority';

mongoose.connect(db).then(() =>{
    console.log("Connected to database");
})
.catch(() => {
    console.log("Error connecting to database");
});

const schema = new mongoose.Schema({
    universityName: {type: String},
    webpage: {type: String},
    domain: {type: String},
    country: {type: String},
    //countryTimezone: {type: String},
    //countryCapital: {type: String},
    //countrySubregion: {type: String}
});

const Record = mongoose.model('unis', schema);

module.exports = Record;

