// import axios from 'axios'
// import { useCookies } from "react-cookie"
// import {useEffect, useState} from 'react'
// import TinderCard from 'react-tinder-card'
// import ChatContainer from '../components/ChatContainer'

// const UserDashboard = () => {
//   const [user, setUser] = useState(null)
//   const [zipcodeUsers, setZipcodeUsers] = useState(null)
//   const [cookies, setCookie, removeCookie] = useCookies(['user'])
//   const [lastDirection, setLastDirection] = useState()

  
  
//   const userId = cookies.UserId

  
//   const getUser = async () => {
//     try {
//         const response = await axios.get('http://localhost:8000/user', {
//             params: {userId}
//         })
//         setUser(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

//   const getZipcodeUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/zipcodeusers', {
//         params: {zipcode: user?.zipcode}
//       })
//       setZipcodeUsers(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     getUser()
//   }, [])

//   useEffect(() => {
//     if (user) {
//       getZipcodeUsers()
//     }
//   }, [user])
  
//   const updateMatches = async (matchedUserId) => {

//     try {
//       await axios.put('http://localhost:8000/addmatch', {
//       userId,
//       matchedUserId
//     })
//     getUser()
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   const swiped = (direction, swipedUser) => {

//     if (direction === 'right') {
//       updateMatches(swipedUser.user_id)
//     }
//     setLastDirection(direction)
//   }

//   const outOfFrame = (name) => {
//     console.log(name + ' left the screen!')
//   }

//   const matchedUserIds = user?.matches.map(({user_id}) => user_id).concat(userId)

//   const filteredZipcodeUsers = zipcodeUsers?.filter(zipcodeUser => !matchedUserIds.includes(zipcodeUser.user_id))

//   return (
//     <>
//     {user &&
//     <div className='dashboard'>
//       <ChatContainer user={user}/>
//       <div className='swipe-container'>
//         <div className='card-container'>
          
//           {filteredZipcodeUsers?.map((zipcodeUser) =>
//             <TinderCard className='swipe'
//             key={zipcodeUser.user_id} 
//             onSwipe={(dir) => swiped(dir, zipcodeUser.user_id)} 
//             onCardLeftScreen={() => outOfFrame(zipcodeUser.first_name)}>
//               <div style={{ backgroundImage: 'url(' + zipcodeUser.profile_photo + ')' }} className='card'>
//               <h3>{zipcodeUser.first_name}</h3>
//               </div>
//             </TinderCard>
//           )}
//           <div className='swipe-info'>
//             {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
//           </div>

//         </div>
//       </div>
//     </div> }
//     </>
//   )
// }
// export default UserDashboard

import axios from 'axios'
import { useCookies } from "react-cookie"
import {useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from '../components/ChatContainer'

const UserDashboard = () => {
  const [user, setUser] = useState(null)
  const [zipcodeRestaurants, setZipcodeRestaurants] = useState(null)
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

  const getZipcodeRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:8000/zipcoderests', {
        params: {zipcode: user?.zipcode}
      })
      setZipcodeRestaurants(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    if (user) {
      getZipcodeRestaurants()
    }
  }, [user])
  
  const updateMatches = async (matchedRestaurantId) => {
    try {
    await axios.put('http://localhost:8000/addrestmatch', {
      userId,
      matchedRestaurantId
    })
    getUser()
    } catch (error) {
      console.log(error)
    }

  }



  const swiped = (direction, swipedRestaurantId) => {
    if (direction === 'right') {
      updateMatches(swipedRestaurantId)
    }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  const matchedRestaurantIds = user?.matches.map(({rest_id}) => rest_id).concat(userId)

  const filteredZipcodeRestaurants = zipcodeRestaurants?.filter(zipcodeRestaurant => !matchedRestaurantIds.includes(zipcodeRestaurant.rest_id))

  console.log(filteredZipcodeRestaurants, 'filteredZipcodeRestaurants')
  console.log(user,'user')
  return (
    <>
    {user &&
    <div className='dashboard'>
      <ChatContainer user={user}/>
      <div className='swipe-container'>
        <div className='card-container'>
          
          {filteredZipcodeRestaurants?.map((zipcodeRestaurant) =>
            <TinderCard
            className='swipe'
            key={zipcodeRestaurant.rest_id}
            onSwipe={(dir) => swiped(dir, zipcodeRestaurant.rest_id)} 
            onCardLeftScreen={() => outOfFrame(zipcodeRestaurant.rest_name)}>
            <div 
              style={{ backgroundImage: 'url(' + zipcodeRestaurant.rest_logo + ')' }}
              className='card'>
              <h3>{zipcodeRestaurant.rest_name}</h3>
            </div>
            </TinderCard>
          )}
          <div className='swipe-info'>
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
          </div>

        </div>
      </div>
    </div> }
  </>
  )
}
export default UserDashboard