import { createContext, useState } from 'react'


export const LibraryContext = createContext(null)

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState(null)
  const [topArtists, setTopArtists] = useState(null)

  return (
    <LibraryContext.Provider value={{
      library, setLibrary,
      topArtists, setTopArtists
    }}>
      {children}
    </LibraryContext.Provider>
  )
}