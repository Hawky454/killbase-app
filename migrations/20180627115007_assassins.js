//table for assassins

exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', function(table) {
    table.increments();
    table.string('photo');
    table.string('fullnames');
    table.string('codenames');
    table.string('weapon');
    table.string('contact');
    table.integer('age');
    table.integer('price');
    table.float('rating', 2, 1);
    table.integer('kills');
  });
};




exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins');
};
