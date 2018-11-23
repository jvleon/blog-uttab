import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {
  Header,
  Footer
} from './components/'
import {
  Home
} from './containers'

const App = (props) => (
  <Router>
    <div style={{height: '100vh'}}>
    {console.log(props)}
      <Header />
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
      <Footer />
    </div>
  </Router>
)


export default App