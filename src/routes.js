import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Donates from './pages/Donates';
import NewDonates from './pages/NewDonates';

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/logon"  component ={Logon} />

        <Route path="/register" component ={Register} />
            
        <Route path="/newdonates" component ={NewDonates} />    

        <Route path="/donates" exact component ={Donates} />

        </Switch>
        </BrowserRouter>
    )
}