import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {CartContext, CartProvider} from './components/CartProvider';
import {ProductList} from './components/ProductList'
import Product from './components/Product'
import Order from './components/Order'
import {Cart} from './components/Cart'
import Menu from './components/Menu'

ReactDOM.render(

  <Router>
    <CartProvider>
      <Menu />
      <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/:id/:name" exact component={Product}/>
        <Route path="/CheckOut" exact component={Cart}/>
        <Route path="/Order" exact component={Order}/>
      </Switch>
    </CartProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
