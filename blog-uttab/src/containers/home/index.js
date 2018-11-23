import React, { Component } from 'react'
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
      blog: 'Hello'
    }
  }
  render() {
    return (
      <Container>
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <FixedBanner />
      </Container>
    )
  }
}