import axios from 'axios'
import { useCookies } from "react-cookie"
import {useEffect, useState} from 'react'

const UserDashboard = () => {
  const [user, setUser] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

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
  return (
    <div>UserDashboard</div>
  )
}
export default UserDashboard