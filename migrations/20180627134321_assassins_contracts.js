//creates assassins_contracts tables
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins_contracts', function(table) {
    table.integer('assassin_id').references('assassins.id').onDelete('CASCADE');
    table.integer('contract_id').references('contracts.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins_contracts');
};
