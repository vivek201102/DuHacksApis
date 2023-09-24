const router = require('express').Router();
const controller = require('../controller/theme');

router.get('/:id', controller.getOne);
router.get('/', controller.getAll);

module.exports = router;