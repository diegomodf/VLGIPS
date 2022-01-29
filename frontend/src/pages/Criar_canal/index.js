import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import cadastrar from '../Login copy'

export default function Login() {
  const history = useHistory()

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [permissao, setPermissao] = useState('')

  async function handleCadastrocanal(e) {
    e.preventDefault()

    const response = await api
      .post('channel', {
        nome,
        descricao,
        permissao,
        criador,
      })
      .then(({ data }) => data)
      .catch(console.log)

    alert(
      'Cadastrado com sucesso, aguarde autenticação... Você será avisado por e-mail.'
    )
  }

  return (
    <div className='geral'>
      <form onSubmit={handleCadastrocanal}>
        <h1>Página de Cadastro</h1>
        <div>
          <TextField
            label="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="descricao"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <Form.Group>
            <Form.Label className='form-select-label'>
              Empresa
            </Form.Label>
            <Form.Control as='select' onChange={(e) => setPermissao(e.target.value)}>
              <option value='0'>Privado</option>
              <option value='1'>Público</option>
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
