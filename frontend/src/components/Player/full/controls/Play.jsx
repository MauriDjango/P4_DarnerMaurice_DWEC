import { useContext } from 'react'
import { PlayerContext } from '../../../../context/PlayerContext'

const Play = () => {

  const { pause} = useContext(PlayerContext)

  return (
    <button onClick={pause} >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.2937 6.78884L2.50767 0.692412C1.55005 0.197315 0.0834961 0.677765 0.0834961 1.90232V14.0923C0.0834961 15.1908 1.44626 15.8529 2.50767 15.3022L14.2937 9.20867C15.3451 8.6667 15.3484 7.33081 14.2937 6.78884Z"
          fill="#FDFFFC"/>
      </svg>
    </button>
  )
}

export default Play