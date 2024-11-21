import { useContext } from 'react'
import { NowPlayingContext } from '../context/NowPlayingContext'
import NowPlayingFull from '../components/now_playing/NowPlayingFull'
import NowPlayingMini from "../components/now_playing/NowPlayingMini";


const NowPlayingLayout = () => {

  return (
    <div className={'now-playing'}>
      <h4>Now Playing</h4>
    </div>
  )
}

export default NowPlayingLayout