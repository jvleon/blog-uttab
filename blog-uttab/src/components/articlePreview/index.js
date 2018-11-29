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
      const to = `/articleView?article=${this.props.index}`
      return <Redirect to={to} />
    }
    const { author, body, created, title, image, replies} = this.props.blog
    return (
      <MainContainer onClick={() => this.onClick()}>
      <UserData>
        <SmallText>{author}</SmallText>
      </UserData>
      <BlogContent>
        <Title>{title}</Title>
        <Paragraph>
          {body}
        </Paragraph>
      </BlogContent>
      <BlogData>
        <SmallText>{replies.length} comentarios</SmallText>
      </BlogData>
    </MainContainer>
    )
  }
}

export default ArticlePreview