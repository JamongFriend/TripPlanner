const express = require('express');
const Plan = require('../models/plan');
const Suggest = require('../models/suggest')

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
            hotel,
            restaurant
        });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 추천목록에 있는 여행지 입력
router.post('/inSugPlace', async (req, res, next) => {
    try {
        const planData = await Suggest.findOne({
            where: {
                place: req.params.place
            }
        });
        await Plan.update({
            place: req.body.place
        }, {
            where: { name: req.body.name }
        });
        if(planData) res.redirect('/');
        else next(`There is no place with ${req.params.place}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 여행지 직접 입력
router.post('/place', async (req, res, next) => {
    try {
        await Plan.update({
            place: req.body.place
        }, {
            where: { name: req.body.name }
        });
        await Suggest.create({
            place: req.body.place
        })

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 추천목록에 있는 숙소 입력
router.post('/inSugHotel', async (req, res, next) => {
    try {
        const planData = await Suggest.findOne({
            where: {
                hotel: req.params.hotel
            }
        });
        await Plan.update({
            hotel: req.body.hotel
        }, {
            where: { name: req.body.name }
        });
        if(planData) res.redirect('/');
        else next(`There is no place with ${req.params.hotel}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 숙소 직접 입력
router.post('/hotel', async (req, res, next) => {
    try {
        await Plan.update({
            hotel: req.body.hotel
        }, {
            where: { name: req.body.name }
        });
        await Suggest.create({
            hotel: req.body.hotel
        })

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 추천목록에 있는 식당 입력
router.post('/inSugRestaurant', async (req, res, next) => {
    try {
        const planData = await Suggest.findOne({
            where: {
                restaurant: req.params.restaurant
            }
        });
        await Plan.update({
            restaurant: req.body.restaurant
        }, {
            where: { name: req.body.name }
        });
        if(planData) res.redirect('/');
        else next(`There is no place with ${req.params.restaurant}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 식당 직접 입력
router.post('/restaurant', async (req, res, next) => {
    try {
        await Plan.update({
            restaurant: req.body.restaurant
        }, {
            where: { name: req.body.name }
        });
        await Suggest.create({
            restaurant: req.body.restaurant
        })

        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;