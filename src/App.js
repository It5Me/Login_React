import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import {Home , Navbar} from './components'
import {Signin,Signup} from './components/auth'

const App =() =>{
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component ={Signup}></Route>
          <Route path="/signin" component ={Signin}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App;

