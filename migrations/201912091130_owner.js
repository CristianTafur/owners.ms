exports.up = knex =>
  knex.schema.createTable('owner', (table) => {
    table.increments('id').unsigned().notNullable();
    table.text('fullname');
    table.text('document').unsigned().notNullable();
    table.text('password').unsigned().notNullable();
    table.boolean('status').unsigned().notNullable().defaultTo(true);
    table.integer('idRoles').unsigned()
    .references('role.id');
  }); 
exports.down = knex => knex.schema.dropTable('owner');