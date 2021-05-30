const router = require('express').Router();
const controller = require('../controllers/produtos');

router.get('/insert_produtos', controller.insert);
router.get('/find_produtos', controller.get);
router.get('/update_produtos', controller.update);
router.get('/delete_produtos', controller.delete);

module.exports = router;