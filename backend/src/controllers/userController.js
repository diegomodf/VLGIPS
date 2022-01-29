const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { id } = request.params

    if (id) {
      const [user] = await connection('user')
        .select('*')
        .where('id_user', '=', id)
      return response.json(user)
    } else {
      const user = await connection('user').select('*')
      return response.json(user)
    }
  },

  async create(request, response) {
    const {
      nome,
      sobrenome,
      login,
      senha,
      empresa,
      cargo,
    } = request.body
    
    const [id] = await connection('user').insert({
      nome,
      sobrenome,
      login,
      senha,
      empresa,
      cargo,
      inscricoes:'0',
      tipo_usuario: 1,
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id_user } = request.params
    //const ong_id = request.headers.authorization;

    await connection('user').where('id_user', id_user).delete()

    return response.status(204).send()
  },
}
