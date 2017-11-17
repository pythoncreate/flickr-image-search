import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Clouds from './Components/Clouds.js';
import Flowers from './Components/Flowers.js';
import Sunset from './Components/Sunset.js';
import SearchLayout from './Components/SearchLayout.js';
import Home from './Components/Home.js';
import NotFound from './Components/NotFound.js';



import './App.css';

const App = () => (
    <BrowserRouter>
	    <div>
	    <Switch>
		    <Route exact path='/' component = {Home} />
		    <Route path ='/search' component = {SearchLayout}/>
		    <Route path='/clouds' component ={Clouds} />
		    <Route path='/sunsets' component = {Sunset} />
		    <Route path='/flowers' component = {Flowers} />
		    <Route path='*' component = {NotFound} />
		</Switch>
	    </div>
    </BrowserRouter>
);

export default App;
