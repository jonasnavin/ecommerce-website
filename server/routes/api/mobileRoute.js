const express = require('express')
const router = express.Router()
const mobilesController = require('../../controllers/mobilesController')

router.get('/', mobilesController.getAllMobiles)

router.get('/:id', mobilesController.getMobile)

router.post('/', mobilesController.addNewMobile)

router.put('/:id', mobilesController.updateMobile)

router.delete('/:id', mobilesController.deleteMobile)

module.exports = router