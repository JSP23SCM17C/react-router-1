import React from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Header from './components/header'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><Header/></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
          {/* <Link activeClassName="jink"className="list-group-item " to="/about">About</Link>
          <Link activeClassName="jink"className="list-group-item " to="/home">Home</Link> */}
          <NavLink className="list-group-item " to="/about">About</NavLink>
          <NavLink className="list-group-item " to="/home">Home</NavLink> {/* //Strict and Loose Matching in Routing */}
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/> */}
            <Switch>
							<Route path="/about" component={About}/>
							<Route path="/home" component={Home}/>
							<Redirect to="/about"/>
						</Switch>

          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default App;
