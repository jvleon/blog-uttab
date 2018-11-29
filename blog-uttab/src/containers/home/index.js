import React, { Component } from 'react'
import { Client } from 'dsteem'
import {
  Container,
  Left,
  Right
} from './styled'
import {
  ArticlePreview,
  FixedBanner
} from '../../components'
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      blog: []
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
              result.forEach(post => {
                const json = JSON.parse(post.json_metadata)
                const image = json.image ? json.image[0] : ''
                const title = post.title
                const author = post.author
                const body = post.body
                const created = new Date(post.created).toDateString()
                const {replies } = post
                posts.push({created, body, author, title, image, replies})
              })
              this.setState({blog: posts})
          })
          .catch(err => {
              alert('Error occured' + err)
          })
  }
  render() {
    var {blog} = this.state
    return (
      <Container>
      {
        blog.map((article, i) => {
          return (
            <ArticlePreview key={i} index={i} blog={article}/>
          )
        })
      }
        <FixedBanner />
      </Container>
    )
  }
}