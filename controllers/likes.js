const Likes = require('../models/likes');
const Blogs = require('../models/blogs');

exports.getLikes = (req, res) => {
  const { blog } = req.params;
  Likes.find({ blog }, (err, likes) => {
    if (err || !likes) return res.status(500).json({ error: err })
    return res.status(200).json({ likes });
  });
};


exports.addLike = (req, res) => {
  const { blog, user_id } = req.body
  const like = new Likes({ blog, user_id });
  like.save(err => {
    if (err || !like) return res.status(500).json({ error: err })
    return res.status(200).json({ message: 'ok' });
  })
};




