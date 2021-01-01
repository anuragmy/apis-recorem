const router = require('express').Router();
const { getUsers, addUser, getUser } = require('../controllers/user');

router.get('/users', getUsers);
router.post('/user', addUser);


module.exports = router;