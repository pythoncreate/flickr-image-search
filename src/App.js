import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Container from './Components/Container.js';
import Clouds from './Components/Clouds.js';
import Flowers from './Components/Flowers.js';
import Sunset from './Components/Sunset.js';



import './App.css';

const App = () => (
    <BrowserRouter>
	    <div>
	    <Route exact path='/' component = {Container} />
	    <Route path='/clouds' component ={Clouds} />
	    <Route path='/sunsets' component = {Sunset} />
	    <Route path='/flowers' component = {Flowers} />
	    </div>
    </BrowserRouter>
);

export default App;
