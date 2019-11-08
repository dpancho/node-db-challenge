
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', t => {
    t.increments();

    t.string('project_name').notNullable();
    t.string('project_description');
    t
    .boolean('project_completed')
    .notNullable()
    .defaultTo(0);
  })
  .createTable('tasks', t => {
      t.increments();

      t.string('tasks_description').notNullable();
      t.string('tasks_notes');
      t.boolean('completed').notNullable().defaultTo(false);
      t
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
  .createTable('resources', t => {
      t.increments();

      t.string('resource_name').notNullable().unique();
      t.string('resource_description');
  })
  .createTable('project_resources', t => {
      t.increments();

      t
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      t
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects');
};
