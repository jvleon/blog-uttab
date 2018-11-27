import React from 'react'
import {
  Container,
  Logo,
  Title,
  ButtonLogin,
  Redirect
} from './styled'

const Header = ({link, logged} ) => (
  <Container>
    <Logo src="./img/logo.png" />
    {
      !logged && 
      <div>
        <Redirect href={link}>Iniciar sesión</Redirect>
        <Redirect href="https://signup.steemit.com/">Registrarse</Redirect>
      </div>
    }
  </Container>
)

export default Header