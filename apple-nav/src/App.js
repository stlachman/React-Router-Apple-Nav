import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Mac from './components/Mac';
import NavWrapper from './components/NavWrapper';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavWrapper />
        <Route exact path="/" component={Home} />
        <Route path="/mac" component={Mac} />
      </div>
    )
  }
}

export default App;
