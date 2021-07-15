var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/student.js');


/* GET ALL Students */
router.get('/students', function(req, res, next) {
    Student.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

/* GET SINGLE Student BY ID */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
 // res.json( Student.findById(req.params.id).exec());
  Student.findById(req.params.id, function (err, student) {
    if (err) return next(err);
    res.json(student);
  }); 
});

async function getUser(x) {
  const foundUser = await User.findOne({name: x});
  return foundUser;
};
/* GET SINGLE Student BY ID */
router.get('/:name', function(req, res, next) {  
  const user = getUser(req.params.name);

  console.log(user);
  
  return user;
});

/* SAVE Student */
router.post('/', function(req, res, next) {
  Student.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Student */
router.put('/:id', function(req, res, next) {
  Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Student */
router.delete('/:id', function(req, res, next) {
  Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;