/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('todos', function(table) {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.boolean('completed').defaultTo(false);
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('todos');
};
