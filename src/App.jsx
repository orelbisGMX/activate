import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import { BrowserRouter, Route } from "react-router-dom";
import About from './Components/About';
import Blog from './Components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Blog} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
