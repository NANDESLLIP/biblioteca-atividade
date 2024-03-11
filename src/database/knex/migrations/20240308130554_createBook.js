const { table, increment } = require("..");

exports.up = (knex) => {
  return knex.schema.createTable("books", (table) =>{
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.integer('pages').notNullable();
    table.string('category').notNullable();
    table.date('published').notNullable();
    table.boolean('borrowed').defaultTo('false');
    
  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("books");
};
