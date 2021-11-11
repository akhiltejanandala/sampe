import './index.css'
import usersIcon from '../Images/users.png'

const UserDetailsListView = props => {
  const {user, currentListId, onClickListItem} = props
  const {username, id, DOB, state} = user

  const onClickList = () => {
    onClickListItem(id)
  }

  const today = new Date()
  const birthDate = new Date(DOB)
  const age = today.getFullYear() - birthDate.getFullYear()

  const listClass = id === currentListId ? 'selectedlistItem' : 'listItem'

  return (
    <li onClick={onClickList} className={listClass}>
      <div className="listProfileDetails">
        <img className="listProfileIcon" src={usersIcon} alt="profileIcon" />
        <p className="listProfileInfo">{`${username}--${age}--${state}`}</p>
      </div>
    </li>
  )
}

export default UserDetailsListView
