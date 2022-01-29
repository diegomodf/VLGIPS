import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'

export default function Canais_publicos() {
  const history = useHistory()
  const [canaisPublicos, setCanaispublicos] = useState('')

  async function getCanaisPublicos() {
    const response = await api
    .get(`canais_publicos/`)
    .then(({ response }) => {
      setCanaispublicos(response.data)
    })
    .catch(console.log)
  }

  getCanaisPublicos()

  return (
    <div className='geral'>
      <div className='meus_canais'>
        {canaisPublicos.map((canal) => {
          return(
            <Button
              variant='primary'
              onClick={() => history.push(`canal/${canal.id_canal}`)}
            >
              ${canal.nome}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
