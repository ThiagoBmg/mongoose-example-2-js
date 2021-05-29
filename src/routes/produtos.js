const router = require('express').Router();
const controller = require('../controllers/produtos');

router.post('/insert_produtos', controller.insert);
router.get('/find_produtos', controller.get);
router.post('/update_produtos', controller.update);
router.delete('/delete_produtos', controller.delete);

module.exports = router;