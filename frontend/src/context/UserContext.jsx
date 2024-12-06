import { createContext, useState } from 'react'


export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const authentication = {
    accessToken: null,
    tokenType: null,
    expiresIn: null
  }
  const initialUserData = {
    authentication: authentication,
    userProfile: null
  }

  const [userData, setUserData] = useState(initialUserData)
  const [hasLoaded, setHasLoaded] = useState(false)


  return (
    <UserContext.Provider value={{userData, setUserData, hasLoaded, setHasLoaded}}>
      {children}
    </UserContext.Provider>
  )
}