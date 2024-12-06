import React from 'react';
import { useNavigate } from 'react-router-dom'


const HeaderProfile = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login')
  }

  return (
    <button onClick={handleClick} className="logo__button">
      <img src="/img/logo.svg" className="logo" alt="logo" />
    </button>
  );

}

export default HeaderProfile