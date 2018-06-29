//seed for clients
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins_contracts').del()
    .then(function() {
      // Inserts seed entries
      return knex('assassins_contracts').insert([{
          assassin_id: 6,
          contract_id: 1
        },
        {
          assassin_id: 1,
          contract_id: 2
        },
        {
          assassin_id: 7,
          contract_id: 3
        },
        {
          assassin_id: 9,
          contract_id: 5
        },
        {
          assassin_id: 6,
          contract_id: 4
        },
        {
          assassin_id: 8,
          contract_id: 3
        },
        {
          assassin_id: 6,
          contract_id: 1
        },
        {
          assassin_id: 3,
          contract_id: 1
        }
      ]);
    });
};
