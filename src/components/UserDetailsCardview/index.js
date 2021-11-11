import userIcon from '../Images/user-icon.png'

import './index.css'

const UserDetailsCardview = props => {
  const {user, onClickCardItem, currentCardId} = props
  const {username, DOB, id, state} = user

  const onClickCard = () => {
    onClickCardItem(id)
  }

  const today = new Date()
  const birthDate = new Date(DOB)
  const age = today.getFullYear() - birthDate.getFullYear()

  const cardClass = id === currentCardId ? 'selectedCardItem' : 'cardItem'

  return (
    <li className={cardClass} onClick={onClickCard}>
      <img className="profileIcon" src={userIcon} alt="usericon" />
      <div className="profileDetails">
        <p>{username}</p>
        <p>{age}</p>
        <p>{state}</p>
      </div>
    </li>
  )
}

export default UserDetailsCardview
