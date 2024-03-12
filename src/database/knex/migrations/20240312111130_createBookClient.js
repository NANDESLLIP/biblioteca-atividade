
exports.up = (knex) => {
  return knex.schema.createTable("bookclient", (table) =>{
    table.increments('id').primary();
    table.integer("book_id").unsigned().index().references("id").inTable("books")
    table.integer("client_id").unsigned().index().references("id").inTable("clients")
    table.timestamp("created_at").defaultTo(knex.fn.now());
  })
};


exports.down = (knex) => {
  return knex.schema.dropTableIfExists("bookClient");
};
