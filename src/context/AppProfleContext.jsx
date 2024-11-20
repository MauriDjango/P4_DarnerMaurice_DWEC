import { createContext, useState } from 'react'

export const AppProfileContext = createContext(null)

export const AppProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null)

  return (
    <AppProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </AppProfileContext.Provider>
  )
}

