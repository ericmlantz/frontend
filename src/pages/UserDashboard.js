import axios from 'axios'
import { useCookies } from "react-cookie"
import {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'

const UserDashboard = () => {
  const [user, setUser] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [lastDirection, setLastDirection] = useState()
  
  const userId = cookies.UserId

  const getUser = async () => {
    try {
        const response = await axios.get('http://localhost:8000/user', {
            params: {userId}
        })
        setUser(response.data)
    } catch (error) {
        console.log(error)
    }
}

  useEffect((userId) => {
    getUser(userId)
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

  console.log('user', user)
  return (
    <div className='dashboard'>
      <ChatContainer user={user}/>
      <div className='swipe-container'>
        <div className='card-container'>
          
          {/* {users.map((user) =>
            <TinderCard className='swipe' 
            key={character.name} 
            onSwipe={(dir) => swiped(dir, character.name)} 
            onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )} */}
          <div className='swipe-info'>
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
          </div>


        </div>
      </div>
    </div>
  )
}
export default UserDashboard