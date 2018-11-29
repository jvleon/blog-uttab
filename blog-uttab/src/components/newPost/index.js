import React, {Component} from 'react'
import {
  MainContainer,
  TextBlog,
  TitleBlog,
  SendData,
  ButtonContent,
  Spinner,
  SpinnerContent
} from './styled'
import { Redirect, Link } from 'react-router-dom'
import { Client, PrivateKey } from 'dsteem'
const dsteem = require('dsteem')

export default class NewPost extends Component {
  constructor (props) {
    super(props)
    this.state ={
      title: '',
      text: '',
      Spinner: false,
      password: 'P5JZLKDajVHqqBSPseUGqM9Ccz4XDBWjburJEnwiqQbbZdXqvtHS'
    }
  }
  onClick() {
    if (this.state.title.length > 0 && this.state.text.length > 0) {
      this.setState({Spinner: true})
      const permlink = Math.random().toString(36).substring(2);
      const client = new Client('https://api.steemit.com')
      const key = dsteem.PrivateKey.fromLogin(this.props.data.user,this.state.password, 'posting')
      const tags = 'bloguttab pruebas desarrollo'
      const taglist = tags.split(' ');
      //make simple json metadata including only tags
      const json_metadata = JSON.stringify({ tags: taglist });
      client.broadcast
      .comment(
          {
              author: this.props.data.user,
              body: this.state.text,
              json_metadata: json_metadata,
              parent_permlink: 'bloguttab',
              parent_author: '',
              permlink: permlink,
              title: this.state.title,
          },
          key
      ).then(res => {
        this.setState({Spinner: false})
        alert('post publicado con exito')
        this.setState({Redirect: true})
      }).catch(err =>
        console.log(err)
      )
    } else {
      alert('Complete todos los campos')
    }
  }

  handlechange(e, field) {
    this.setState({[field]: e.target.value});
  }
  render() {
    if (this.state.Redirect === true) {
      return <Redirect to={'/'} />
    }    return (
      <div>
        <MainContainer>
          <SpinnerContent display={this.state.Spinner}>
            <Spinner  src="./img/spinner.gif" />
          </SpinnerContent>
          <Link style={{marginBottom: '20px'}} to="/">Ir a Home</Link>
            <label>Titulo del blog </label>
            <TitleBlog type="text" value={this.state.title} onChange={(e) => this.handlechange(e, 'title')} />
            <label>Contenido del blog</label>
            <TextBlog type="text" value={this.state.text} onChange={(e) => this.handlechange(e, 'text')}/>
            <label>Contraseña</label>
            <TitleBlog type="text" value={this.state.password} onChange={(e) =>this.handlechange(e,'P5JZLKDajVHqqBSPseUGqM9Ccz4XDBWjburJEnwiqQbbZdXqvtHS')}/>
            <ButtonContent type="text" onClick={() => this.onClick()}>
              <SendData>Publicar</SendData>
            </ButtonContent>
        </MainContainer>
      </div>
    )
  }
}
