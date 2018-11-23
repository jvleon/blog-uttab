import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
  MainContainer,
  UserData,
  BlogContent,
  BlogData,
  SmallText,
  Paragraph,
  Title
} from './styled'

class ArticlePreview extends Component {
  constructor() {
    super()
    this.state = {
      Redirect: false
    }
  }
  onClick () {
    this.setState({Redirect: true})
  }

  render() {
    if (this.state.Redirect === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <MainContainer onClick={() => this.onClick()}>
      <UserData>
        <SmallText>Jvleon</SmallText>
      </UserData>
      <BlogContent>
        <Title>Bienvenida</Title>
        <Paragraph>
          Hola esta es una preuba hecha para que disfrutes el contenido del blog UTTAB, ejoy it the experience.
          Hola esta es una preuba hecha para que disfrutes el contenido del blog UTTAB, ejoy it the experience.
          Hola esta es una preuba hecha para que disfrutes el contenido del blog UTTAB, ejoy it the experience.
        </Paragraph>
      </BlogContent>
      <BlogData>
        <SmallText>100 comentarios</SmallText>
      </BlogData>
    </MainContainer>
    )
  }
}

export default ArticlePreview