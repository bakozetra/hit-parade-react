import React from 'react'
import Header from './component/header'
import { Switch, Route, Link } from 'react-router-dom'
import Cart from './pages/Cart'
import Add from './pages/Add'
import Popular from './pages/popular'
import Style from './pages/Style'
import Lyrucs from './pages/Lyrucs'
import StyleComponent from './component/StyleComponent'
import StyleName from './component/styleName'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Popular />
        </Route>
        <Route path="/style">
          <Style />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path ="/lyrucs">
          <Lyrucs/>
        </Route>
        <Route path="/styleName/:styleNames">
          <StyleName/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
