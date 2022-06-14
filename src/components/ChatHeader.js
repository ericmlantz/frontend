import { useCookies } from "react-cookie"

const ChatHeader = ({user}) => {
  
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const handleLogout = async () => {
    removeCookie('UserId', cookies.UserId)   //WILL NEED TO DO TERENARY FOR THIS FOR RESTAURANT LOGGED IN VERSUS USER
    removeCookie('AuthToken', cookies.AuthToken)

    window.location.reload()
  }
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img className='profile-icon' src={user.profile_photo} alt='Photo'/>
        </div>
          <h3>{user.first_name}</h3>
        </div>
        <i className='log-out-icon' onClick={handleLogout}>Logout</i>
    </div>
  )
}

export default ChatHeader