import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import cadastrar from '../Login copy'

export default function Login() {
  const history = useHistory()

  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [cargo, setCargo] = useState('')

  async function handleCadastro(e) {
    e.preventDefault()

    const response = await api
      .post('user', {
        nome,
        sobrenome,
        login,
        senha,
        empresa,
        cargo,
      })
      .then(({ data }) => data)
      .catch(console.log)

    /*const response = await api
      .post('canal_privado', {
        nome,
      })
      .then(({ data }) => data)
      .catch(console.log)
      */
    alert(
      'Cadastrado com sucesso, aguarde autenticação... Você será avisado por e-mail.'
    )

    history.replace('/')
  }

  return (
    <div className='geral'>
      <form onSubmit={handleCadastro}>
        <h1>Página de Cadastro</h1>
        <div>
          <TextField
            label="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="sobrenome"
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>
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
        <div>
          <Form.Group>
            <Form.Label className='form-select-label'>
              Empresa
            </Form.Label>
            <Form.Control as='select' onChange={(e) => setEmpresa(e.target.value)}>
              <option value='vlginvestimentos'>VLG Investimentos</option>
              <option value='vlgseguros'>VLG Seguros</option>
              <option value='vlgcorporate'>VLG Corporate</option>
              <option value='mercadoemumminuto'>Mercado em 1 Minuto</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div>
          <Form.Group>
            <Form.Label className='form-select-label'>
              Cargo
            </Form.Label>
            <Form.Control as='select' onChange={(e) => setCargo(e.target.value)}>
              <option value='diretor'>Diretor</option>
              <option value='gerente'>Gerente</option>
              <option value='analista'>Analista</option>
              <option value='desenvolvedor'>desenvolvedor</option>
            </Form.Control>
          </Form.Group>
        </div>
        <Button
          variant="contained"
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
