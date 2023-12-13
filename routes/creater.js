const express = require('express');
const Plan = require('../models/plan');
const Suggest = require('../models/suggest')

const router = express.Router();
const { isLoggedIn } = require('./helpers');

//생성
router.post('/create', async (req, res, next) => {
    const {name, date, peoples, perpose} = req.body;
    try {
        await Plan.create({
            id: req.user.id,
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

//여행지 입력
router.post('/place', async (req, res, next) => {
    try {
        const planData = await Suggest.findOne({
            where: {
                place: req.body.place
            }
        });
        if(planData){
            await Plan.update({
                place: planData.place
            }, {
                where: { name: req.body.name }
            });
        }
        else{
            await Plan.update({
                place: req.body.place
            }, {
                where: { name: req.body.name }
            });
            await Suggest.create({
                place: req.body.place
            })
        }
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

//숙소 입력
router.post('/hotel', async (req, res, next) => {
    try {
        const planData = await Suggest.findOne({
            where: {
                hotel: req.body.hotel
            }
        });
        if(planData){
            await Plan.update({
                hotel: planData.hotel
            }, {
                where: { name: req.body.name }
            });
        }
        else{
            await Plan.update({
                hotel: req.body.hotel
            }, {
                where: { name: req.body.name }
            });
            await Suggest.create({
                hotel: req.body.hotel
            })
        }
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

//식당 입력
router.post('/restaurant', async (req, res, next) => {
    try {
        const planData = await Suggest.findOne({
            where: {
                restaurant: req.body.restaurant
            }
        });
        if(planData){
            await Plan.update({
                restaurant: planData.restaurant
            }, {
                where: { name: req.body.name }
            });
        }
        else{
            await Plan.update({
                restaurant: req.body.restaurant
            }, {
                where: { name: req.body.name }
            });
            await Suggest.create({
                restaurant: req.body.restaurant
            })
        }
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;