import React from 'react'
import {
  Container,
  Logo,
  Title,
  ButtonLogin
} from './styled'

const Header = () => (
  <Container>
    <Logo src="./img/logo.png" />
    <ButtonLogin>Iniciar sesión</ButtonLogin>
  </Container>
)

export default Header