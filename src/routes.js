import React from 'react';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Donates from './pages/Donates';
import NewDonates from './pages/NewDonates';
import Home from './pages/Home';
import Details from './pages/Details'
import PrivateRoute from './auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Routes(){
    return (
        <React.StrictMode>
		<BrowserRouter>
		  <Switch>
				        
          <Route path="/" exact component ={Home} />

<Route path="/logon" exact component ={Logon} />

<Route path="/register" component ={Register} />
    
<PrivateRoute path="/newdonates" component ={NewDonates} />    

<PrivateRoute path="/donates"  component ={Donates} />

<PrivateRoute  path="/details/:id"  component ={Details} />
      </Switch>
		</BrowserRouter>
	</React.StrictMode>
    )
}

