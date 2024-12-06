import { useContext } from 'react'
import { PlayerContext } from '../../../../context/PlayerContext'


const PreviousSong = () => {

  const { previousSong } = useContext(PlayerContext)

  return (
    <button onClick={() => {previousSong()}}>
      <svg width="13" height="20" viewBox="0 0 13 20" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.65 17.6333L5.01672 10L12.65 2.35L10.3 0L0.300049 10L10.3 20L12.65 17.6333Z"
          fill="#FDFFFC"/>
      </svg>
    </button>
  )
}

export default PreviousSong