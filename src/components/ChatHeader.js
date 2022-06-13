import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

const ChatHeader = ({user}) => {

  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const handleLogout = () => {
    removeCookie('UserId', cookies.UserId)
    removeCookie('AuthToken', cookies.AuthToken)
    navigate('/')
  }
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.profile_photo} alt='Photo'/>
        </div>
          <h3>{user.first_name}</h3>
        </div>
        <i className='log-out-icon' onClick={handleLogout}>←</i>
    </div>
  )
}

export default ChatHeader