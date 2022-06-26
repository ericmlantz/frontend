
const Nav = ({minimal,setShowModal, showModal, setIsSignUp}) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }
  const authToken = false
  
  return (
    <nav>
      <div className='logo-container'>
        <img className='logo'src={minimal ? 'https://i.imgur.com/WN90kOd.png' : 'https://i.imgur.com/4WGd5VH.png'}/>
      </div>
      {!authToken && !minimal &&
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >Log In</button>}
    </nav>
  )
}

export default Nav