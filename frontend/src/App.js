import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Profile from './components/Profile';
import Users from './components/Users';

function App() {
  return (
    <div >
      <Header />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
      <Route path='/profile' component={Profile} />
      <Route path='/users' component={Users} />

      <Footer />
    </div>
  );
}

export default App;
