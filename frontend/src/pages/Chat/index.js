import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import cadastrar from '../Login copy'

export default function Login() {
  const history = useHistory()

  const [mensagem, setMensagem] = useState('')

  async function handleMensagem(e) {
    e.preventDefault()

    const response = await api
      .post('message', {
        canal,
        autor: id_user,
        texto: mensagem,
        hora: new Date(),
      })
      .then(({ data }) => data)
      .catch(console.log)
  }

  return (
    <div className='geral'>
      <h1>Página de Login</h1>
      <div className='mensagens'>
      </div>
      <form onSubmit={handleMensagem}>
        <div>
          <TextField
            label="mensagem"
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </div>
  )
}
