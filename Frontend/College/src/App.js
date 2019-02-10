import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Link, withRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Admin from './Forms/Admin';
import Home from './Forms/Home';
import Session from './Forms/Session';
import Subscribe from './Forms/Subscribe';

class App extends Component {

  state = {
    loggedIn: false
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} render={() => {
            return (
              <Home />
            )
          }} />

          <Route path="/Session" render={() => {
            return (
              <Session />
            )
          }} />
          <Route path="/Subscribe" render={() => {
            return (
              <Subscribe />
            )
          }} />
          <Route path="/Admin" exact strict component={Admon} render={() => {
            if(this.state.loggedIn === true){
            return (
                (<Admin />)
            )
            }else{
              return(
                (<Redirect to="/"/>)
              )
            }
              
          }} />
        </div>
      </Router>
    );
  }
}

const Admon = ({match}) => {
  return(
    <Admin></Admin>
  )
}

export default App;
