const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');

router.post('/create-post', postController.create);
router.get('/get-posts', postController.getAll);

module.exports = router;
