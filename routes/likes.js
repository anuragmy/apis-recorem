
const router = require("express").Router();
const { getLikes, addLike } = require("../controllers/likes");

router.get("/likes/:blog", getLikes);
router.post("/like", addLike);

module.exports = router;
