import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Expenses from './components/Expenses/Expenses'
import Budget from './components/Budget/Budget'
import Reports from './components/Reports/Reports'
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path='/auth/register' exact component={Register}/>
        <Route path='/auth/login' exact component={Login}/>
        <Route path='/' exact component={Home}/>
        <Route path='/expenses' component={Expenses}/>
        <Route path='/budget' component={Budget}/>
        <Route path='/reports' component={Reports}/>
      </Switch>
      
      <Footer/>




    </HashRouter>
    );
  }
}

export default App;
