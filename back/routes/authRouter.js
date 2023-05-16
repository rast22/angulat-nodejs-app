const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');

router.post('/registration', authController.register);
router.post('/login', authController.login);


module.exports = router;
