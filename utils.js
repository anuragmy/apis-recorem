const bcrypt = require('bcrypt');


exports.hashPassword = password => bcrypt.hashSync(password, 10);
exports.compareHashedPassword = (password, hash) => bcrypt.compareSync(password, hash);

// sign up validator

exports.signUpValidation = (req, res, next) => {
  req.check('name', 'Name is required').notEmpty();
  req.check('email', 'Email should between 3 to 32 chars')
    .matches(/^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i)
    .isLength({
      min: 4, max: 32
    });
  req.check('password', 'Password is required').notEmpty();
  req.check('password')
    .isLength({
      min: 6
    })
    .withMessage('Must be greater than 5')
    .matches(/\d/)
    .withMessage('Must contain atleast 1 numeric')

  const errors = req.validationResult()
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0];
    return res.status(400).json({
      error: firstError
    });
  }
  next();
}
