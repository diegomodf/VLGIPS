exports.up = function(knex) {
    return knex.schema.createTable('channel', function (table) {
        table.increments('id_canal')
        table.string('nome').notNullable()
        table.string('descricao').notNullable()
        table.boolean('permissao').notNullable()
        table.int('criador').notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('channel')
};