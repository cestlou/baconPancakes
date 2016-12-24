
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function (table) {
        table.increments();
        table.string('name');
        table.string('link');
        table.string('description');
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
