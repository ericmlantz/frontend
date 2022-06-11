import {useState} from "react";
import Nav from '../ components/Nav'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const OnboardingUser = () => {

//States
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [personFormData, setPersonFormData] = useState({
    user_id: cookies.user_id,
    first_name: '',
    email: '',
    hashed_password: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    zipcode: '',
    profile_photo: '',
    matches: [],
  })

//Uses


//Handles
const handleChange = (e) => {
  const value = e.target.value
  const name = e.target.name
  setPersonFormData((prevState) => ({
    ...prevState, [name]: value
  }))
}

  return (
    <div>
      
    </div>
  )
}
export default OnboardingUser