let router = require('express').Router();
let config = require('../knexfile.js')['production'];
let knex = require('knex')(config);

router.get('/assassins', (req, res, next) => {
  let responseText = 'This is a GET req for the assassins route';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.get('/assassins/:id', (req,res) => {
  let responceText = 'A GET request for assassinsid';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.post('/assassins', (req,res) => {
  let responseText = 'A POST request for the assassins route';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.put('/assassins/:id', (req,res) => {
  let responseText = 'A PUT request for the assassins:id';
  console.log(responseText);
  res.status(200).send(responseText);
});

router.delete('/assassins/:id', (req,res) => {
  let responseText = 'A DELETE request for the assassins';
  console.log(responseText);
  res.status(200).send(responseText);
});








module.exports = router;
