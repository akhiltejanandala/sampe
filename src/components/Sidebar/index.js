import {Link} from 'react-router-dom'

import users from '../Images/users.png'
import adduser from '../Images/add-user.png'
import weather from '../Images/weather.png'
import logo from '../Images/Logo.png'

import './index.css'

const Sidebar = props => {
  const {activeTabId} = props

  const addUserClass =
    activeTabId === 'ADDUSER' ? 'selectedAddUserTab' : 'AddUserTab'

  const usersClass = activeTabId === 'USERS' ? 'selectedUsersTab' : 'UsersTab'

  const weatherClass =
    activeTabId === 'WEATHER' ? 'selectedWeatherTab' : 'WeatherTab'

  return (
    <div className="navigation-section">
      <img className="websiteLogo" src={logo} alt="Basidia logo" />
      <hr className="hrLine" />
      <Link className="LinkItem" to="/add-user">
        <li className={addUserClass}>
          <img className="addUser-image" src={adduser} alt="add user logo" />
          <p className="AddUserTabText">Add User</p>
        </li>
      </Link>

      <Link className="LinkItem" to="/users">
        <li className={usersClass}>
          <img className="users-image" src={users} alt="users-logo" />
          <p className="usersTabText">Users</p>
        </li>
      </Link>

      <Link className="LinkItem" to="/weather">
        <li className={weatherClass}>
          <img className="weather-image" src={weather} alt="weather logo" />
          <p className="weatherTabText">Weather </p>
        </li>
      </Link>
    </div>
  )
}

export default Sidebar
