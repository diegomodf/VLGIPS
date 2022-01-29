exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('id_user')
        table.string('nome').notNullable()
        table.string('sobrenome').notNullable()
        table.string('login').notNullable()
        table.string('senha').notNullable()
        table.string('empresa').notNullable()
        table.string('cargo').notNullable()
        table.string('inscricoes').notNullable()
        table.boolean('tipo_usuario').notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user')
};