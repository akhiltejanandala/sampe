import {Link} from 'react-router-dom'

import users from '../Images/users.png'
import adduser from '../Images/add-user.png'
import weather from '../Images/weather.png'
import logo from '../Images/Logo.png'

import './index.css'

function Sidebar(props) {
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
      <Link className="LinkItem" to="/addusers">
        <li className={addUserClass}>
          <img
            id="adduser"
            className="addUser-image"
            src={adduser}
            alt="add user logo"
          />
          <label htmlFor="adduser" className="AddUserTabText">
            Add User
          </label>
        </li>
      </Link>
      <Link className="LinkItem" to="/users">
        <li className={usersClass}>
          <img
            id="users"
            className="users-image"
            src={users}
            alt="users-logo"
          />
          <label htmlFor="users" className="usersTabText">
            Users
          </label>
        </li>
      </Link>
      <Link className="LinkItem" to="/weather">
        <li className={weatherClass}>
          <img
            id="weather"
            className="weather-image"
            src={weather}
            alt="weather logo"
          />
          <label htmlFor="weather" className="weatherTabText">
            Weather{' '}
          </label>
        </li>
      </Link>
    </div>
  )
}

export default Sidebar
