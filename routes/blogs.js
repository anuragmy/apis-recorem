const router = require('express').Router();

const { getBlogs, addBlog, getBlog } = require('../controllers/blogs');


router.get('/blogs', getBlogs);
router.post('/blog', addBlog);


module.exports = router;