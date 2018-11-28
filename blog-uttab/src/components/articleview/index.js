import React, { Component } from 'react'
import { Redirect } from 'react-router'
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
    console.log('mounted')
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
                console.log(i,'indice')
                const Index = parseInt(new URLSearchParams(document.location.search).get('article'))
                console.log(Index, 'index')
                  const json = JSON.parse(post.json_metadata)
                  const image = json.image ? json.image[0] : ''
                  const title = post.title
                  const author = post.author
                  const body = post.body
                  const created = new Date(post.created).toDateString()
                  const {replies } = post
                  if (Index === i) {
                    console.log('mach')
                    this.setState({blog: post})
                  }
              })
          })
          .catch(err => {
              alert('Error occured' + err)
          })
  }

  render() {
    console.log('sate', this.state)
    const { author, body, created, title, image, replies} = this.state.blog
    return (
      <MainContainer>
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