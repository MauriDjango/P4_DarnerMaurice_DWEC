import React from 'react';
import { useNavigate } from 'react-router-dom'


const HeaderLogo = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/suggestions')
  }

  return (
    <button onClick={handleClick} className="logo__button">
      <img src="/img/logo.svg" className="logo" alt="logo" />
    </button>
  );
}

export default HeaderLogo