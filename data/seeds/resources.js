
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {resource_name: 'a', resource_description: 'aaa'},
        {resource_name: 'b', resource_description: 'bbb'},
        {resource_name: 'c', resource_description: 'ccc'},
      ]);
    });
};
