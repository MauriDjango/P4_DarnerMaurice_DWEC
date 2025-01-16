import React from 'react';
import PropTypes from 'prop-types';


const PlaylistCard = ({ title, image }) => {
  return (
      <div className="playlist-card">
        <img
            src={image}
            alt={`${title} cover`}
            className="playlist__img"
            onError={(e) => e.target.src = '/default-image.jpg'} // Fallback image if none is available
        />
        <h3 className="playlist-title">{title}</h3>
      </div>
  );
};

// Prop types to ensure type safety
PlaylistCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PlaylistCard;
