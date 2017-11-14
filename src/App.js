import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Container from './Components/Container.js';

import './App.css';

const App = () => (
    <BrowserRouter>
    <div>
    <Route path='/' component = {Container} />
    </div>
    </BrowserRouter>
);

export default App;
