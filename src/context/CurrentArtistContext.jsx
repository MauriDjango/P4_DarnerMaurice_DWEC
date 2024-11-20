import { createContext, useState } from 'react'

export const CurrentArtistContext = createContext(null)

export const CurrentArtistProvider = ({children}) => {
  const [currentArtist, setCurrentArtist] = useState(currentArtist)

  return (
    <CurrentArtistContext.Provider value={{ currentArtist, setCurrentArtist }}>
      {children}
    </CurrentArtistContext.Provider>
  )
}