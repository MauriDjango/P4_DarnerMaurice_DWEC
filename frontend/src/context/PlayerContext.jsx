import { createContext, useState } from 'react'


export const PlayerContext = createContext(null)

export const PlayerProvider = ({ children }) => {
  const [view, setView] = useState('full')
  const [ queue, setQueue ] = useState([])
  const [ currentTrack, setCurrentTrack ] = useState(null)
  const [ isPlaying, setIsPlaying ] = useState(false)
  const play = () => {setIsPlaying(true)}
  const pause = () => {setIsPlaying(false)}
  const previousSong = () => {
    // Implement this function
  }
  const nextSong = () => {
    // Implement this function
  }
  return (
    <PlayerContext.Provider value={{
      view, setView,
      queue, setQueue,
      currentTrack, setCurrentTrack,
      isPlaying, setIsPlaying,
      play,
      pause,
      previousSong,
      nextSong,
    }}>
      {children}
    </PlayerContext.Provider>
  )
}