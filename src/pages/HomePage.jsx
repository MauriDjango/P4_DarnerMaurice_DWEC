import react from 'react';
import {Outlet} from "react-router-dom";


const HomePage = () => {
  return (
    <div className={'homepage'}>
      <Outlet/>
    </div>
  )
}

export default HomePage