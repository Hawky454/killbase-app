exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('code_names').del()
    .then(function () {
      // Inserts seed entries
      return knex('code_names').insert([
        {assassins_id: 1, code_name: 'The Jackal'},
        {assassins_id: 2, code_name: 'Old Man'},
        {assassins_id: 3, code_name: 'Ghost Dog'},
        {assassins_id: 5, code_name: 'Baba Yaga'},
        {assassins_id: 7, code_name: 'The Professional'},
        {assassins_id: 8, code_name: 'Nikita'},
        {assassins_id: 8, code_name: 'La Femme Nikita'},
        {assassins_id: 9, code_name: 'Solenya'},
      ]);
    });
};
