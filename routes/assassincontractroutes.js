
/*eslint-env es6*/
let env = process.env.NODE_ENV || 'development';
let router = require('express').Router();
let config = require('../knexfile.js')[env];
let knex = require('knex')(config);

router.get('/contracts', (req, res, next) => {
  let responseText = 'This is a GET req for the contracts route';
  console.log(responseText);
  res.status(200).send(responseText);
});


router.get('/contracts/:id', (req,res) => {
  let responceText = 'A GET request for contractsid';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.post('/contracts', (req,res) => {
  let responseText = 'A POST request for the contracts route';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.put('/contracts/:id', (req,res) => {
  let responseText = 'A PUT request for the contracts:id';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.delete('/contracts/:id', (req,res) => {
  let responseText = 'A DELETE request for the contracts';
  console.log(responseText);
  res.status(200).send(responseText);
});








module.exports = router;
