import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import cadastrar from '../Login copy'

export default function Chat_usuarios() {
  const history = useHistory()
  const [usuarios, setUsuarios] = useState()

  async function pegar_chat_com_usuarios(user1) {
    const response = await api
    .get(`user/${user1}`)
    .then(({ response }) => {
      setUsuarios(response.data)
    })
    .catch(console.log)
  }

  pegar_chat_com_usuarios()

  return (
    <div className='geral'>
      <div className='meus_canais'>
        {usuarios.map((usuario) => {
          
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
  )
}
