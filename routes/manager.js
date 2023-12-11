const express = require('express');
const Plan = require('../models/plan');

const { isLoggedIn } = require('./helpers');

const router = express.Router();

//자신이 생성한 여행 계획 리스트 확인
router.get('/readList', async (req, res, next) => {
    try {
        const plan = await Plan.findAll({
            where: { name: req.params.name },
            attributes: ['name', 'date', 'peoples', 'perpose', 'place', 'hotel']
        });

        if (plan) res.json(plan);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

//여행 계획 출력
router.get('/readPlan', async (req, res, next) => {
    try {
        const plan = await Plan.findOne({
            where: { name: req.params.name },
            attributes: ['name', 'date', 'peoples', 'perpose', 'place', 'hotel']
        });

        if (plan) res.json(plan);
        else next(`There is no user with ${req.params.name}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 여행 계획 수정
router.post('/update', async (req, res, next) => {
    try {
        const result = await Plan.update({
            name: req.body.name,
            date: req.body.date,
            peoples: req.body.peoples,
            perpose: req.body.perpose,
            place: req.body.place
        }, {
            where: { num: req.body.num }
        });

        if (result) res.redirect('/');
        else next(`There is no plan with ${req.params.num}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 여행 계획 삭제
router.get('/delete/:plan', async (req, res, next) => {
    try {
        const result = await Plan.destroy({
            where: { num: req.params.num }
        });

        if (result) next();
        else next(`There is no plan with ${req.params.num}.`);
    } catch (err) {
        console.error(err);
        next(err);
    }
});


module.exports = router;