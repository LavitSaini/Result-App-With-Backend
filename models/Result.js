const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    rollNumber:{
        type: Number,
        required: true
    },
    name: String,
    cgpa: Number,
    credits: Number,
    resultStatus: String,
    fatherName: String,
    subjects: [{}]
});

const firstSemesterResult = mongoose.model('firstSemesterResult', resultSchema);
const secondSemesterResult = mongoose.model('secondSemesterResult', resultSchema);
const thirdSemesterResult = mongoose.model('thirdSemesterResult', resultSchema);
const fourthSemesterResult = mongoose.model('fourthSemesterResult', resultSchema);

module.exports = {
    firstSemesterResult,
    secondSemesterResult,
    thirdSemesterResult,
    fourthSemesterResult
}