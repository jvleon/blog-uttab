import React, {Component} from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import {
  Header,
  Footer,
  ArticleView,
  NewPost
} from './components/'
import {
  Home
} from './containers'
import { Client } from 'dsteem'
import sc2 from 'steemconnect'

// init steemconnect
const api = sc2.Initialize({
    app: 'blog-uttab',
    callbackURL: 'http://localhost:3000',
    accessToken: 'access_token',
    scope: ['vote', 'comment'],
});

const link = api.getLoginURL();
const client = new Client('https://api.steemit.com')
const access_token = new URLSearchParams(document.location.search).get('access_token');
const username = new URLSearchParams(document.location.search).get('username');

class App extends Component {
  constructor() {
    super()
    this.state = {
      access_token: '',
      user: ''
    }
    this.closeSession = this.closeSession.bind(this)
  }
  componentWillMount() {
    const access_token = new URLSearchParams(document.location.search).get('access_token')
    const username = new URLSearchParams(document.location.search).get('username')
    access_token && localStorage.setItem('access_token', access_token)
    username && localStorage.setItem('username', username)
    const locatedAccessToken = localStorage.getItem('access_token')
    const locatedUsername = localStorage.getItem('username')
    this.setState({access_token: locatedAccessToken, user: locatedUsername},() =>{
    })
  }
  closeSession () {
    this.setState({access_token: ''})
    localStorage.removeItem('access_token')
    window.location.replace('http://localhost:3000/');
  }
  render() {
    console.log(this.state, 'state')
    return (
      <Router>
      <div style={{height: '100vh'}}>
        <Header link={link} logged={this.state.access_token}  closeSession={this.closeSession}/>
        <Route exact path="/" component={Home} />
        <Route path="/newPost" component={() => <NewPost data={this.state} />} />
        <Route path="/articleView" component={ArticleView} />
        <Footer />
      </div>
    </Router>
    )
  }
}



export default App