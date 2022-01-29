import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import cadastrar from '../Login copy'

export default function Login() {
  const history = useHistory()

  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    const response = await api
      .post('login', {
        login,
        senha,
      })
      .then(({ data }) => data)
      .catch(console.log)

    alert(
      'Cadastrado com sucesso, aguarde autenticação... Você será avisado por e-mail.'
    )

    history.replace('/')
  }

  return (
    <div className='geral'>
      <form onSubmit={handleLogin}>
        <h1>Página de Login</h1>
        <div>
          <TextField
            label="login"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Senha"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          type="submit"
        >
          Login
        </Button>
        <Button
          variant="contained"
        >
          <Link target='_blank' to={cadastrar}>
            Cadastrar
          </Link>
        </Button>
      </form>
    </div>
  )
}
