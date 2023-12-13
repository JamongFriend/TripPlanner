const express = require('express');
const router = express.Router();
const AllPlan = require('../models/allPlan');
const Plan = require('../models/plan');

const { isLoggedIn } = require('./helpers');

// 여행 계획 올리기 [POST]
router.post('/upload',isLoggedIn, async(req, res, next) => {
    try {
        const planData = await Plan.findOne({
            where: {
                name: req.params.name
            }
        });
        await AllPlan.create({
            id: planData.id,
            name: planData.name,
            date: planData.date,
            peoples: planData.peoples,
            perpose: planData.perpose,
            place: planData.place,
            hotel: planData.hotel,
            restaurant: planData.restaurant
        });
        if (planData) res.redirect('/');
        else next(`There is no plan with ${req.params.name}.`);
    } catch (error) {
        console.error(error);
        next(err);
    }
});

// 모든 유저의 공유된 여행 리스트 보기 [GET]
router.get('/sharedlist', async(req, res, next) => {
    try {
        const allUserPlan = await AllPlan.findAll({
            attributes: ['id', 'name', 'place']
        });
        res.json(allUserPlan);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 확인하고픈 계획 보기 [GET]
router.get('/view/:id', async(req, res, next) => {
    try {
        const userPlan = await AllPlan.findOne({
            where: { 
                id: req.params.id,
                name: req.params.name
            },
            attributes: ['id', 'name', 'date', 'peoples', 'perpose', 'place', 'hotel']
        });
        if(userPlan)res.json(userPlan);
        else next(`There is no plan with ${req.params.name}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 계획 가져오기 [POST]
router.post('/getplan', async(req, res, next) => {
    try {
        const planData = await AllPlan.findOne({
            where: {
                id: req.params.id,
                name: req.params.name
            }
        });
        const getPlan = await Plan.create({
            id: planData.id,
            name: planData.name,
            date: planData.date,
            peoples: planData.peoples,
            perpose: planData.perpose,
            place: planData.place,
            hotel: planData.hotel
        });
        if (getPlan) res.redirect('/');
        else next(`There is no plan with ${req.params.name}.`);
    } catch (error) {
        console.error(error);
        next(err);
    }
});

module.exports = router;