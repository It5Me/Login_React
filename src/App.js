import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import {Home , Navbar} from './components'
import {Signin,Signup} from './components/auth'

const App =() =>{
  const reducer=()=>{
    return 
  }
  const store = createStore(reducer)
  return(
    <Provider store={store}>
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
    </Provider>
  )
}
export default App;

