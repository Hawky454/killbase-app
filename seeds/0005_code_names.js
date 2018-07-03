exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('code_names').del()
    .then(function() {
      // Inserts seed entries
      return knex('code_names').insert([{
          assassin_id: 1,
          code_name: 'The Jackal'
        },
        {
          assassin_id: 2,
          code_name: 'Old Man'
        },
        {
          assassin_id: 3,
          code_name: 'Ghost Dog'
        },
        {
          assassin_id: 5,
          code_name: 'Baba Yaga'
        },
        {
          assassin_id: 7,
          code_name: 'The Professional'
        },
        {
          assassin_id: 8,
          code_name: 'Nikita'
        },
        {
          assassin_id: 8,
          code_name: 'La Femme Nikita'
        },
        {
          assassin_id: 9,
          code_name: 'Solenya'
        },
      ]);
    });
};
