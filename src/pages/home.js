import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import {
    BrowserRouter, Route, Switch, Redirect, useHistory 
  } from 'react-router-dom';

function Home() {

    const history = useHistory();
    const navigateTo = () => history.push('/AboutUs');



  return (<div>
    <h1>home page</h1>
    <button   onClick={navigateTo}>
       about
    </button>
    </div>

  );
}

export default Home;