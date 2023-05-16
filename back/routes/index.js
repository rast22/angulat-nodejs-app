const Router = require('express');
const router = new Router();
const authRouter = require('./authRouter');
const postRouter = require('./postRouter');

router.use('/auth', authRouter);
router.use('/posts', postRouter);

module.exports = router;
