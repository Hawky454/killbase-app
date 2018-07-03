exports.up = function(knex, Promise) {
  return knex.schema.createTable('code_names', function(table) {
    table.integer('assassin_id').references('assassins.id');
    table.string('code_name');
  });
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('code_names');
};
