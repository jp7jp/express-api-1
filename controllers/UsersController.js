const User = require('../models/User');

exports.index = (req, res, next) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(next);
}

exports.create = (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(next);
}

exports.show = (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(next);
}

exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user => {
      res.send(user);
    })
    .catch(next);
}

exports.delete = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      res.send(user);
    })
    .catch(next);
}
