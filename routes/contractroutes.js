let env = process.env.NODE_ENV || 'development';
let router = require('express').Router();
let config = require('../knexfile.js')[env];
let knex = require('knex')(config);


router.get('/contracts', (req, res, next) => {
  console.log("we got to the route");
  knex('contracts')
    .orderBy('id')
    .then((contracts) => {
      console.log(contracts);
      res.send(contracts);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/contracts/:id', (req, res, next) => {
  knex('contracts')
    .where('id', req.params.id)
    .first()
    .then((contracts) => {
      if (!contracts) {
        return next();
      }

      res.send(contracts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/contracts', (req, res, next) => {
  knex('contracts')
    .insert({
      full_name: req.body.full_name,
      weapon: req.body.weapon,
      contact_info: req.body.contact_info,
      age: req.body.age,
      price: req.body.price,
      rating: req.body.rating,
      kills: req.body.kills
    }, '*')
    .then((contracts) => {
      res.send(contracts[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/contracts/:id', (req, res, next) => {
  knex('contracts')
    .where('id', req.params.id)
    .first()
    .then((assassin) => {
      if (!assassin) {
        return next();
      }

      return knex('contracts')
        .update({
          full_name: req.body.full_name,
          weapon: req.body.weapon,
          contact_info: req.body.contact_info,
          age: req.body.age,
          price: req.body.price,
          rating: req.body.rating,
          kills: req.body.kills
        }, '*')
        .where('id', req.params.id);
    })
    .then((contracts) => {
      res.send(contracts[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/contracts/:id', (req, res, next) => {
  let assassin;

  knex('contracts')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        return next();
      }

      assassin = row;

      return knex('contracts')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete assassin.id;
      res.send(assassin);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
