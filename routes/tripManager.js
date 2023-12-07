const express = require('express');
const Plan = require('../models/plan');

const { isLoggedIn } = require('./helpers');

const router = express.Router();

//생성한 여행 계획 리스트 확인
router.get('/readList', (req, res) => {
    
});


router.route('/')
    // 계획 출력
    .get(isLoggedIn, (req, res) => {
        res.render('plan', {

        })
        userId: req.user.id;
    })
    // 계획 수정
    .post(async (req, res, next) => {
        const userId = req.user.id;
        if(user){
            if(name)
                user.name = name;
            if(grade)
                user.grade = grade;
        }
        res.send('사용자 정보가 성공적으로 업데이트되었습니다.');
    })

//여행 계획 출력
router.get('/readPlan', (req, res) => {

});


module.exports = router;