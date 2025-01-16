import { spotify } from '../../api/spotify_api/SpotifyApi';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import PlaylistCard from './playlist/PlaylistCard';
import PlaylistsContainer from './playlist/PlaylistContainer';


const Library = () => {
  const { userData } = useContext(UserContext);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const loadLibrary = async (accessToken) => {
      try {
        console.log('[Library] Fetching playlists with access token:', accessToken);
        const fetchedPlaylists = await spotify.library.getMyPlaylists(accessToken);

        // Transform fetched playlists into an array of titles and images
        const transformedPlaylists = fetchedPlaylists.items
        .filter((item) => item !== null) // Remove null entries
            .map((item) => ({
              title: item.name,
              image: item.images?.[0]?.url || 'No Image Available',
            }));

        setPlaylists(transformedPlaylists);
        console.log('[Library] Transformed playlists:', transformedPlaylists);
      } catch (error) {
        console.error('[Library] Error fetching playlists:', error);
      }
    };

    if (userData?.authentication?.accessToken) {
      loadLibrary(userData?.authentication?.accessToken);
      console.log('[Library] Access token found, starting playlist fetch...', 'accessToken:', userData?.authentication?.accessToken);
    } else {
      console.warn('[Library] No access token found. Unable to fetch playlists.');
    }
  }, [userData?.authentication?.accessToken]);

  return (
      <section className="library">
        <h1>Library</h1>
        <div className="playlists-container">
          { playlists.length > 0 ? (
            <PlaylistsContainer
              playlists={playlists}
            />) :
            (
            <p>No playlists available.</p>
            )
          }
        </div>
      </section>
  );
};

export default Library;
