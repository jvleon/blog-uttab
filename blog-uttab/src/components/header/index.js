import React, {Component} from 'react'
import { Link, Redirect } from 'react-router'
import {
  Container,
  Logo,
  Title,
  ButtonLogin,
  Redirection,
  StyledLink
} from './styled'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      Redirect: false,
      Spinner: true
    }
  }
  render() {
    const {link, logged} = this.props
    if (this.state.Redirect === true) {
      return <Redirect to={'/newPost'} />
    }
    console.log(this.props, 'history')
    return (
      <Container>
        <Logo src="./img/logo.png" />
        {
          logged ? 
          <div>
            <ButtonLogin   onClick={() => this.props.closeSession()} red>Cerrar sesión</ButtonLogin>
            <StyledLink to="/newPost">Crear nuevo post</StyledLink>
          </div>
          :
          <div>
            <Redirection href={link}>Iniciar sesión</Redirection>
            <Redirection href="https://signup.steemit.com/">Registrarse</Redirection>
          </div>
        }
    </Container>     
    )
  }
}

export default Header