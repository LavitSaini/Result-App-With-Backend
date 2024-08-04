const express = require("express");
const router = express.Router();
const { firstSemesterResult, secondSemesterResult, thirdSemesterResult, fourthSemesterResult } = require("../models/Result");

router.get('/', (req, res, next) => {
    res.render('index');
});

router.post('/result', async (req, res, next) => {
    let rollNo = Number(req.body.rollNo);
    let semester = req.body.semester;
    try {
        let result = await getStudentResult(rollNo, semester);
        if (!result) {
            setTimeout(() => {
                res.render('result', {
                    message: 'no result found'
                });
            }, 300);
        } else {
            setTimeout(() => {
                res.render('result', { result, semester, rollNo});
            }, 300);
        }
    } catch (error) {
        next(error);
    }
});

// function to find student result according to semester
async function getStudentResult(rollNo, semester) {
    if (semester === 'first') {
        let result = await firstSemesterResult.findOne({ rollNo });
        return result;
    } else if (semester === 'second') {
        let result = await secondSemesterResult.findOne({ rollNo });
        return result;
    } else if (semester === 'third') {
        let result = await thirdSemesterResult.findOne({ rollNo });
        return result;
    } else if (semester === 'fourth'){
        let result = await fourthSemesterResult.findOne({ rollNo });
        return result;
    }
}

module.exports = router;
