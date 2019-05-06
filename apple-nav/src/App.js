import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Mac from './components/Mac';
import Ipad from './components/Ipad';
import Iphone from './components/Iphone';
import Watch from './components/Watch';
import Tv from './components/Tv';
import Music from './components/Music';
import Support from './components/Support';

import NavWrapper from './components/NavWrapper';
import './App.css';

const routes = [
  {
    path: '/mac',
    component: Mac
  },
  {
    path: '/ipad',
    component: Ipad
  },
  {
    path: '/iphone',
    component: Iphone
  },
  {
    path: '/watch',
    component: Watch
  },
  {
    path: '/tv',
    component: Tv
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/support',
    component: Support
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
        {routes.map(({ path, component: C }, index) => ( 
           <Route path={path} component={C} key={index} />
        ))}
      </div>
    )
  }
}

export default App;
