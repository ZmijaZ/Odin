const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.showMainPage);
router.get('/main', controller.showMainPage);
router.get('/about', controller.showAboutPage);
router.get('/allUsers', controller.showAllUsers);

module.exports = router;