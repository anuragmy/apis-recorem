const Users = require('../models/users');

exports.getUsers = (req, res) => {
  const { search } = req.query;
  console.log(search)

  Users.find(search ? { name: { $regex: search } } : {}).exec((err, users) => {
    if (err || !users) return res.status(404).json({
      error: `Error ${err}`
    });
    res.status(200).json({ users })

  })
}


exports.addUser = (req, res) => {
  const { name, email, password } = req.body;
  const user = new Users({ name, email, password });
  user.save(err => {
    if (err) return res.status(400).json({ message: err });
    const { id, name, email } = user;
    return res.status(200).json({ message: 'ok', id, name, email })
  })
}
