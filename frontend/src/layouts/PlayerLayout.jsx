import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import PlayerFullLayout from '../components/Player/PlayerFullLayout'
import PlayerMiniLayout from "../components/Player/PlayerMiniLayout";


const PlayerLayout = () => {

  return (
    <div className={'now-playing'}>
      <h4>Now Playing</h4>
    </div>
  )
}

export default PlayerLayout