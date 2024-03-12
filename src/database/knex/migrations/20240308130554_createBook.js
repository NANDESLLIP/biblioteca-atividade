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
    table.integer('qntdLivro').notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("books");
};
