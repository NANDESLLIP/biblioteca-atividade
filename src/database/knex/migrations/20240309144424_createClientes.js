
exports.up = (knex) => {
  return knex.schema.createTable("clients", (table)=>{

    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('username').notNullable();
    table.string('telefon').notNullable();
    table.string('email').notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("clients");
};
