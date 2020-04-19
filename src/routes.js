import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Donates from './pages/Donates';
import NewDonates from './pages/NewDonates';
import Home from './pages/Home';
import Details from './pages/Details'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>

        
        <Route path="/" exact component ={Home} />

        <Route path="/logon"  component ={Logon} />

        <Route path="/register" component ={Register} />
            
        <Route path="/newdonates" component ={NewDonates} />    

        <Route path="/donates"  component ={Donates} />

        <Route  path="/details"  component ={Details} />

        </Switch>
        </BrowserRouter>
    )
}