import axios from "axios"
import Chat from "./Chat"
import ChatInput from "./ChatInput"
import { useState, useEffect } from "react"

const ChatDisplay = ({user, clickedRest}) => {

  const [userMessages, setUserMessages] = useState(null)

  const userId = user?.user_id
  const clickedRestId = clickedRest?.user_id

  const getUserMessages = async () => {
    try {

    const response = await axios.get('http://localhost:8000/messages', {
      params: {userId: userId, correspondingRestId: clickedRestId}
    })
    setUserMessages(response.data)
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    getUserMessages()
  }, [userMessages])
  
  return (
    <div>
      <Chat/>
      <ChatInput/>
    </div>
  )
}

export default ChatDisplay