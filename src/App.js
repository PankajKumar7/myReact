import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './component/NavBar';
import AboutUs from './pages/about';
import Home from './pages/home';
import {
  BrowserRouter, Route, Switch, Redirect, useHistory
} from 'react-router-dom';

function App() {
  return (
    <div className="mainwrapper">

<BrowserRouter>
      <NavBar/>
<Switch>
<Route
            exact
            path="/home"
            component={Home}
          />
<Route
            exact
            path="/AboutUs"
            component={AboutUs}
          />
<Redirect
            from="/"
            to="/home"
          />
    
</Switch>
  
</BrowserRouter>
    </div>
  );
}

export default App;
