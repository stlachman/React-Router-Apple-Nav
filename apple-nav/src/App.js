import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';

import NavWrapper from './components/NavWrapper';
import './App.css';

const routes = [
  {
    path: '/mac',
    name: 'Mac'
  },
  {
    path: '/ipad',
    name: 'iPad'
  },
  {
    path: '/iphone',
    name: 'iPhone'
  },
  {
    path: '/watch',
    name: 'Watch'
  },
  {
    path: '/tv',
    name: 'TV'
  },
  {
    path: '/music',
    name: 'Music'
  },
  {
    path: '/support',
    name: 'Support'
  }
]

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
