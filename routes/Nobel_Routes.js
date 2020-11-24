//express is the server name
const express = require('express')
//express uses routers so route requests need to go through it
const router = express.Router();
const nobelController = require('../controllers/nobelController')

router.get('/', nobelController.index)
//must add /year to change url to /year(to tell it what we're looking for) 
//then / w/ number of year
router.get('/year/:year', nobelController.showYear)

router.get('/category/:category', nobelController.showCategory)

router.post('/create/', nobelController.create)
router.put('/year/:year', nobelController.edit)
router.put('/id/:id', nobelController.edit)
//router.delete('/year/:year', nobelController.delete)
router.delete('/id/:id', nobelController.delete)

module.exports = router
