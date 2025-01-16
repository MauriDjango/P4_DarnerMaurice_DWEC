import { useContext } from 'react';
import { PlayerContext } from '../../../../context/PlayerContext';

const NextSong = () => {
  const { nextSong } = useContext(PlayerContext);

  return (
    <button
      onClick={nextSong} // Directly pass the function
      aria-label="Next song" // Adds an accessible label
    >
      <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.216797 17.6333L7.85013 10L0.216797 2.35L2.5668 0L12.5668 10L2.5668 20L0.216797 17.6333Z"
          fill="#FDFFFC"
        />
      </svg>
    </button>
  );
};

export default NextSong;
