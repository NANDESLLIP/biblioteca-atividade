
exports.up = (knex) => {
  return knex.schema.createTable("clients", (table)=>{

    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('username').notNullable();
    table.string('telefon').notNullable();
    table.string('email').notNullable();
    table.integer("book_id").unsigned().index().references("id").inTable("books")

  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("clients");
};