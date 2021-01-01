const Comments = require('../models/comments');

exports.getComments = (req, res) => {
  const { blog } = req.params;
  Comments.find({ blog }, (err, comments) => {
    if (err || !comments) return res.status(500).json({ error: err })
    return res.status(200).json({ comments });
  });
};


exports.getAllComments = (req, res) => {
  Comments.find((err, comments) => {
    if (err || !comments) return res.status(500).json({ error: err })
    return res.status(200).json({ comments });
  });
};

exports.addComment = (req, res) => {
  const { blog, user_id, text } = req.body
  const comment = new Comment({ blog, text, user_id });
  comment.save(err => {
    if (err || !comment) return res.status(500).json({ error: err })
    return res.status(200).json({ comment });
  })
};

exports.addComment = (req, res) => {
  const { blog, user_id, text } = req.body;
  const comment = new Comments({ blog, user_id, text });
  comment.save(err => {
    if (err) return res.status(400).json({ message: err });
    return res.status(200).json({ message: 'ok', comment })
  })
}


