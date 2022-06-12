import axios from 'axios'
import { useCookies } from "react-cookie"
import {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'

const UserDashboard = () => {
  const [user, setUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [lastDirection, setLastDirection] = useState()

  const characters = [
    {
      name: 'Richard Hendricks',
      url: './img/richard.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: './img/erlich.jpg'
    },
    {
      name: 'Monica Hall',
      url: './img/monica.jpg'
    },
    {
      name: 'Jared Dunn',
      url: './img/jared.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: './img/dinesh.jpg'
    }
  ]
  
  const userId = cookies.UserId

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user', {
        params: {userId}
      })
      console.log('response.data',response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  console.log('user', user)

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className='dashboard'>
      <ChatContainer/>
      <div className='swipe-container'>
        <div className='card-container'>
          
          {characters.map((character) =>
            <TinderCard className='swipe' 
            key={character.name} 
            onSwipe={(dir) => swiped(dir, character.name)} 
            onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.profile_photo + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
          <div className='swipe-info'>
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
          </div>


        </div>
      </div>
    </div>
  )
}
export default UserDashboard