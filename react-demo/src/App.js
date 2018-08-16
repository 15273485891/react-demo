import React, { Component } from 'react';
import AppHome from './components/pages/Home'
import AppContcat from './components/pages/Contcat/'
import AppTwly from './components/pages/Twly/'
import AppNoFound from './components/pages/NoFound/'

import {Route , Switch ,Redirect} from 'react-router-dom'
class App extends Component {
  render() {
    
    return (
  <div className="App">
  <Switch>
     <Route exact path="/" component ={AppHome}/>
     <Route path="/Contcat"component ={AppContcat}/>
    <Route path="/Twly"component ={AppTwly}/>
    <Route path="/NoFound" component = {AppNoFound}/>
    <Redirect from="*" to="/NoFound"/>
    </Switch>
  </div>
    );
  }
}

App.defaultProps={

}
export default App;
