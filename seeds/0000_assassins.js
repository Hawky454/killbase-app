//seed for assassins
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins').insert([
        {fullnames: 'Alexander Duggan', weapon:'Sniper rifle', age: 31, price: 45, rating: 7.5, kills: 28 },
        {fullnames: 'Anton Chigurh', weapon: 'Pneumatic Bolt Gun', age: 52, price: 40, rating: 9, kills: 72},
        {fullnames: null, weapon: 'Pistol', age: 28, price: 20, rating: 6.5, kills: 35},
        {fullnames: 'Jason Bourne', weapon: 'Parkour', age: 27, price: 25, rating: 7, kills: 48},
        {fullnames: 'John Wick', weapon: 'Lots of guns', age: 35, price: 50, rating: 9.5, kills: 433},
        {fullnames: 'Jules Winnfield', weapon:'Pistol', age: 26, price: 15, rating: 6.5, kills: 13},
        {fullnames: 'Leon', weapon:'Everything', age: 41, price: 30, rating: 8.5, kills: 87},
        {fullnames: 'Nikita Mears' , weapon: 'Silenced Pistols', age: 28, price: 30, rating: 7, kills: 32},
        {fullnames: 'Pickle Rick', weapon: 'Lasers and Office Supplies', age: 60, price: 0, rating: 8, kills: 24}
      ]);
    });
};
