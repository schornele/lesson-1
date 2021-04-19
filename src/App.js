import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
