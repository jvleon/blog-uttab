import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Client } from 'dsteem'
import {
  MainContainer,
  UserData,
  BlogContent,
  BlogData,
  SmallText,
  Paragraph,
  Title,
  Content
} from './styled'

class ArticleView extends Component {
  constructor() {
    super()
    this.state = {
      blog: {}
    }
  }
  componentDidMount() {
      const query = {
          tag: 'bloguttab',
          limit: 5,
      }
      const client = new Client('https://api.steemit.com')
      client.database
          .getDiscussions('active', query)
          .then(result => {
              var posts = []
              result.map((post, i) => {
                const Index = parseInt(new URLSearchParams(document.location.search).get('article'))
                  if (Index === i) {
                    this.setState({blog: post})
                  }
              })
          })
          .catch(err => {
              alert('Error occured' + err)
          })
  }

  render() {
    const { author, body, created, title, image, replies} = this.state.blog
    return (
      <MainContainer>
      <Link to="/">Regresar</Link>
        <Content>
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
          <SmallText>{replies && replies.length} comentarios</SmallText>
        </BlogData>
        </Content>
    </MainContainer>
    )
  }
}

export default ArticleView