import { createContext, useState } from 'react'

export const CurrentArtistContext = createContext(null)

export const CurrentArtistProvider = ({children}) => {
  const [currentArtist, setCurrentArtist] = useState(null)
  const [artistImg, setArtistImg] = useState(null)
  const [album, setAlbum] = useState(null)



  return (
    <CurrentArtistContext.Provider value={
      {
        currentArtist, setCurrentArtist,
        artistImg, setArtistImg,
        album, setAlbum
      }
    }>
      {children}
    </CurrentArtistContext.Provider>
  )
}
