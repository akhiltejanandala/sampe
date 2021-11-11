import './App.css'

import {Switch, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Weather from './components/Weather'
import AddUser from './components/AddUser'
import Users from './components/Users'

function App() {
  return (
    <div className="row-container">
      <Switch>
        <Sidebar />
        <div className="column-container">
          <Topbar />
          <Route path="/addusers">
            <AddUser />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </div>
      </Switch>
    </div>
  )
}

export default App
