exports.up = function(knex) {
    return knex.schema.createTable('message', function (table) {
        table.increments('id_mensagem')
        table.int('canal').notNullable()
        table.int('autor').notNullable()
        table.datetime('hora').notNullable()
        table.text('texto').notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('message')
};