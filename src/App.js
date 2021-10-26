import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import Contact from './views/Contact';
import Detail from './views/Detail';
import Category from './views/Category';
import Cart from './views/Cart';
import Confirmation from './views/Confirmation';
import { CartProvider } from './CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:categoryId" component={Category} />
          <Route exact path="/item/:id" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart/confirmation" component={Confirmation} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
