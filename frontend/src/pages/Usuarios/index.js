import './styles.css'
import { TextField, Grid, Button, Container } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import api from '../../services/api'
import cadastrar from '../Login copy'

export default function Usuarios() {
  const history = useHistory()
  const [usuarios, setUsuarios] = useState()

  async function pegar_usuarios() {
    const response = await api
    .get(`user`)
    .then(({ response }) => {
      setUsuarios(response.data)
    })
    .catch(console.log)
  }
  pegar_usuarios()

  return (
    <div className='geral'>
      <div className='usuario'>
        {usuarios.map((usuario) => {
          return(
            <Button
              variant='primary'
              onClick={() => toggleModerador()}
            >
              ${usuario.nome}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
