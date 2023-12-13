const express = require('express');
const Suggest = requlre('../modules/suggest');

const router = express.Router();

// 여행지 추천
router.get('/suggestpl', async (req, res, next) => {
    try {
        const place = await Suggest.findAll({
            attributes: ['place']
        });
        res.json(place);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 숙박시설 추천
router.get('/suggestht', async (req, res, next) => {
    try {
        const hotel = await Suggest.findAll({
            attributes: ['hotel']
        });
        res.json(hotel);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 식당 추천
router.get('/suggestrr', async (req, res, next) => {
    try {
        const restaurant = await Suggest.findAll({
            attributes: ['restaurant']
        });
        res.json(restaurant);
    } catch (err) {
        console.error(err);
        next(err);
    }
});