exports.seed = async (knex) => {
    await knex('users').insert([
      { email: 'admin@example.com', password: 'admin123', role: 'admin' }, // Replace with hashed password
      { email: 'user1@example.com', password: 'user123' }, 
    ]);
  };