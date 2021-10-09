import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import Contact from './views/Contact';
import Detail from './views/Detail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={Detail} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
