import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';


import Login  from './Login';
import Dashboard  from './Dashboard';




class App extends React.Component{
  render(){
  return (
      <Router>
        <div className="App">
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
       </div>

    </Router>
  );
 }
}
export default App;
