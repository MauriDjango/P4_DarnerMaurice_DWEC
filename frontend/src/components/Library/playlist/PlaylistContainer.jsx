import React from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistsContainer = ({ playlists }) => {
  return (
      <div className="playlists-container">
        {playlists.length > 0 ? (
            playlists.map((playlist, index) => (
                <PlaylistCard
                    key={index}
                    title={playlist.title}
                    image={playlist.image}
                />
            ))
        ) : (
            <p>No playlists available.</p>
        )}
      </div>
  );
};

export default PlaylistsContainer;
