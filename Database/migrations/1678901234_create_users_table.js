exports.up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email').unique().notNullable();
      table.string('password').notNullable(); 
      table.string('role').defaultTo('user'); 
      table.timestamps();
    });
  };
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('users');
  };