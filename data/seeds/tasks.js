
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {tasks_description: 'making food', tasks_notes: 'cooking with snoop', completed: false, project_id: 1},
        {tasks_description: 'building table', tasks_notes: 'cut and glue wood', completed: false, project_id: 2},
        {tasks_description: 'building chair', tasks_notes: 'cut and glue wood', completed: false, project_id: 3}
      ]);
    });
};
