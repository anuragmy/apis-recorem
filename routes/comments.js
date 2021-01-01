const router = require('express').Router();

const { addComment, getComments } = require('../controllers/comments');


router.post('/comment', addComment);
router.get('/comments/:blog', getComments);


module.exports = router;