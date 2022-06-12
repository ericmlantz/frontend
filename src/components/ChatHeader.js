const ChatHeader = ({user}) => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          {/* <img src={user.profile_photo} alt={`Photo of ${user.first_name.toUpperCase()}`}/> */}
        </div>
          {/* <h3>{user.first_name}</h3> */}
        </div>
        <i className='log-out-icon'>←</i>
    </div>
  )
}

export default ChatHeader