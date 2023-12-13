const express = require('express');
const bcrypt = require('bcrypt');
const Plan = require('../models/plan');

const router = express.Router();
const { isLoggedIn } = require('./helpers');

//생성
router.post('/create',isLoggedIn, async (req, res, next) => {
    const {name, date, peoples, perpose} = req.body;
    const {id} = req.user.id;
    try {
        await Plan.create({
            id,
            name,
            date,
            peoples,
            perpose,
            place,
            hotel
        });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

router.get('/',(req,res,next)=>{
    res.render('index',{
        javascriptkey:process.env.javascriptkey
    });
});

//지도 출력
router.get('/map', async (req, res, next)=> {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 
})

// 장소 입력
router.post('/place', async (req, res, next) => {
    try {
        await Plan.update({
            place: req.body.place
        }, {
            where: { name: req.body.name }
        });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 숙소 입력
router.post('/hotel',(req, res) => {

})


module.exports = router;