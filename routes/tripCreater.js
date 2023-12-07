const express = require('express');
const bcrypt = require('bcrypt');
const Plan = require('../models/plan');

const router = express.Router();

//생성
router.post('/create', async (req, res, next) => {
    const {name, date, peoples, perpose} = req.body;
    try {
        await Plan.create({
            name,
            date,
            peoples,
            perpose
        });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 장소 입력
router.post('/place',(req, res) => {
    const {place} = req.body;

    //카카오맵
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options);
})

// 숙소 입력
router.post('/hotel',(req, res) => {

})


module.exports = router;