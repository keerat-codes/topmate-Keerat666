const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
mentorName : { type:  String, description: "Required Field", required: true },
mentorExperience : { type:  Number, description: "Required Field", required: true },
});

module.exports = mongoose.model('mentor', mentorSchema);