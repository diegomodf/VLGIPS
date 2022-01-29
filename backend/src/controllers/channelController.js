const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { id } = request.params

    if (id) {
      const [channel] = await connection('channel')
        .select('*')
        .where('id_canal', '=', id)
      return response.json(channel)
    } else {
      const channel = await connection('channel').select('*')
      return response.json(channel)
    }
  },

  async create(request, response) {
    const {
      nome,
      descricao,
      permissao,
      criador,
    } = request.body
    
    const [id] = await connection('channel').insert({
      nome,
      descricao,
      permissao,
      criador,
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id_canal } = request.params
    //const ong_id = request.headers.authorization;

    await connection('channel').where('id_canal', id_canal).delete()

    return response.status(204).send()
  },
}
