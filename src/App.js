import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './containers/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './containers/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import PostSale from './containers/PostSale/PostSale';

function App() {

  const categories=[{name:'A', id:'A'},{name:'B', id:'B'}];

  return <CartProvider>
    <div className="App" >
      <BrowserRouter>
        <NavBar appName="Ecommerce-Gramirez" categories= {categories}/>
        <Switch>

          <Route exact path="/">
            <Home greeting="Welcome Customer!" link="https://reactjs.org" />
          </Route>

          <Route path="/category/:categoryid">
            <Home greeting="Welcome Customer!" link="https://reactjs.org" />
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route path="/cart">
            <CartContainer />
          </Route>

          <Route path="/postSale">
            <PostSale />
          </Route>

        </Switch>
      </BrowserRouter>
    </div >
  </CartProvider>
}

export default App;
