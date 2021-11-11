import {Route, Switch} from 'react-router-dom'

import AddUser from './components/AddUser'
import User from './components/Users'
import Weather from './components/Weather'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/add-user" component={AddUser} />
    <Route exact path="/users" component={User} />
    <Route exact path="/weather" component={Weather} />
  </Switch>
)

export default App
