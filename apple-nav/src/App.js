import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';

import NavWrapper from './components/NavWrapper';
import routes from './routes.js';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavWrapper />
        <Route exact path="/" component={Home}/>
        {routes.map(({ path, name }, index) => ( 
           <Route path={path} render={(props)=> <ProductPage {...props} name={name} />} key={index} />
        ))}
      </div>
    )
  }
}

export default App;
