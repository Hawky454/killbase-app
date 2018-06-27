//seed for clients
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins_contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins_contracts').insert([
        {assassins_id: 6, contracts_id: 1},
        {assassins_id: 1, contracts_id: 2},
        {assassins_id: 7, contracts_id: 3},
        {assassins_id: 9, contracts_id: 5},
        {assassins_id: 6, contracts_id: 4},
        {assassins_id: 8, contracts_id: 3},
        {assassins_id: 6, contracts_id: 1},
        {assassins_id: 3, contracts_id: 1}
      ]);
    });
};
