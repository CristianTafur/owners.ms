exports.up = knex =>
  knex.schema.createTable('role', (table) => {
    table.increments('id').unsigned().notNullable();
    table.text('fullname').unsigned().notNullable();
  }); 
exports.down = knex => knex.schema.dropTable('role');