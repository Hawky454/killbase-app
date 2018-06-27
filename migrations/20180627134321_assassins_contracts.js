//table for clients
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins_contracts', function(table) {
    table.integer('assassins_id').references('assassins.id');
    table.integer('contracts_id').references('contracts.id');
  });
};



exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins_contracts');
};
