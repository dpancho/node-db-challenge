
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {project_name: 'food', project_description: 'cook food', project_completed: false},
        {project_name: 'table', project_description: 'make table', project_completed: false},
        {project_name: 'chair', project_description: 'sit in chair', project_completed: false}
      ]);
    });
};
