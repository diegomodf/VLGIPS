import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import gerencia_usuarios from '../Usuarios'
import lista_usuarios from '../Chat_usuarios'
import canais_publicos from '../Canais_publicos'
import criar_canal from '../Criar_canal'

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
      <Link target='_blank' to={gerencia_usuarios}>
        Lista de Usuários
      </Link>
      <div className='canais'>
        <Link target='_blank' to={canais_publicos}>
          Procurar Canais Públicos
        </Link>
        <Link target='_blank' to={lista_usuarios}>
          Iniciar Chat Privado com Usuário
        </Link>
        <Link target='_blank' to={criar_canal}>
          Criar Canal
        </Link>
        <div className='meus_canais'>
          {meus_canais.map((meus_canais) => {
            return(
              <Button
                variant='primary'
                onClick={() => history.push(`canal/${meus_canais.id_canal}`)}
              >
                ${meus_canais.nome}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
