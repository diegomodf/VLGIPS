import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom'
import { React, useContext, useLayoutEffect } from 'react'
import { UserContext, UserProvider } from './contexts/user'

import Blog from './pages/Blog'
import CadastroEstudante from './pages/CadastroEstudante'

export default function Routes() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <ScrollToTop>
            {/*o exact é usado para a pagina inicial da plataforma; ele é necessário para assim a pagina pagename só aparecer quando o path for exatamente igual a "/"; dessa forma os outros paths tbm funcionarão normalmente*/}
            <Route path='/' exact component={Home} />
            <Route path='/home-legacy' component={HomeLegacy} />
          </ScrollToTop>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}
