import { useContext, useState, useEffect } from 'react';
import { spotify } from '../../../api/spotify_api/SpotifyApi';
import { UserContext } from '../../../context/UserContext';

const SuggestionCards = () => {
  const { userData } = useContext(UserContext);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadSuggestions = async () => {
      try {
        const fetchedSuggestions = await spotify.suggestions.getSuggestions(userData.authentication.accessToken);
        setSuggestions(fetchedSuggestions);
      } catch (error) {
        console.error('Failed to load suggestions:', error);
      }
    };

/*    if (userData?.authentication?.accessToken) {
      loadSuggestions();
    }*/
  }, [userData?.authentication?.accessToken]); // Dependency array ensures this runs only when the accessToken changes

  return (
      <section className={'suggestion__cards'}>
        {/* Render suggestion cards here, e.g., suggestions.map() */}
      </section>
  );
};

export default SuggestionCards;
