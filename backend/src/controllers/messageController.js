const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { id } = request.params

    if (id) {
      const [message] = await connection('message')
        .select('*')
        .where('id_mensagem', '=', id)
      return response.json(message)
    } else {
      const message = await connection('message').select('*')
      return response.json(message)
    }
  },

  async create(request, response) {
    const {
      canal,
      autor,
      texto,
      hora,
    } = request.body
    
    const [id] = await connection('message').insert({
      canal,
      autor,
      texto,
      hora,
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id_mensagem } = request.params
    //const ong_id = request.headers.authorization;

    await connection('message').where('id_mensagem', id_mensagem).delete()

    return response.status(204).send()
  },
}
