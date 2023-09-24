const router = require('express').Router();
const controller = require('../controller/schedule');

router.get('/:id', controller.getOne);
router.get('/', controller.getAll);

module.exports = router;