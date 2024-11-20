import { createContext, useState } from 'react'


export const NowPlayingContext = createContext(null)

export const NowPlayingProvider = ({ children }) => {
  const [view, setView] = useState('full')

  return (
    <NowPlayingContext.Provider value={{ view, setView }}>
      {children}
    </NowPlayingContext.Provider>
  )
}