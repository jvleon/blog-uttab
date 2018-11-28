import React, {Component} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {
  Header,
  Footer,
  ArticleView
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
  
  render() {
    return (
      <Router>
      <div style={{height: '100vh'}}>
        <Header link={link} />
        <Route exact path="/" component={Home} />
        <Route path="/articleView" component={ArticleView} />
        {/* <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} /> */}
        <Footer />
      </div>
    </Router>
    )
  }
}



export default App