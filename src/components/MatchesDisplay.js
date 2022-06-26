import axios from "axios"
import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { BACKEND } from "../globals"

const MatchesDisplay = ({matches,setClickedRest}) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(null)

  const matchedRestIds = matches.map(({rest_id}) => rest_id)
  const userId = cookies.UserId

  const getMatches = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get(`${BACKEND}/rests`, {
=======
      const response = await axios.get("https://mydinr.herokuapp.com/rests", {
>>>>>>> ab7d805f24a150dc35322b53fd50d2e0b8bdd9bd
        params: { restIds: JSON.stringify(matchedRestIds) },
      });
      setMatchedProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMatches()
  }, [matches])


  return (
    <div className='matches_display'>
      {matchedProfiles?.map((match, _index) => (
        <div key={_index} className='match-card' onClick={() => setClickedRest((match))}>
          <div className='img-container'>
            <img className='profile-icon' src={match?.rest_logo} alt={match?.rest_name + ' profile'}/>
          </div>
          <h3>{match?.rest_name}</h3>
        </div>
      ))}
    </div>
  )
}
export default MatchesDisplay