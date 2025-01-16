import { useContext } from 'react';
import { PlayerContext } from '../../../../context/PlayerContext';

const Pause = () => {
  const { play } = useContext(PlayerContext);

  return (
    <button
      onClick={play} // Directly pass the function to the onClick handler
      aria-label="Pause music" // Adds accessibility
    >
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 15H15.5V0H10.5M0.5 15H5.5V0H0.5V15Z" fill="#FDFFFC"/>
      </svg>
    </button>
  );
};

export default Pause;
