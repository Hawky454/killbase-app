//table for assassins

exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', function(table) {
    table.increments();
    table.string('fullnames');
    table.string('weapon');
    table.integer('age');
    table.integer('price');
    table.float('rating', 2, 1); 
    table.integer('kills');
  });
};




exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins');
};
