// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/killbase2'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: "postgres://tsnqvlpyygrron:4cc8d09ad27798c88357d247a4f8101a706f637c12b138cc5d0b096e70e4f9d4@ec2-54-163-236-188.compute-1.amazonaws.com:5432/d18los8ol5uttc"
  }

};
