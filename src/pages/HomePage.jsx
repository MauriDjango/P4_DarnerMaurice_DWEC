import react from 'react';


const cssClassName = 'home'

const HomePage = ({children}) => {
  return (
    <div className={cssClassName}>
      {children}
    </div>
  )
}

export default HomePage