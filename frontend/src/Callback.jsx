import React, { useContext, useEffect, useRef, useState } from 'react';
import { spotify } from './api/spotify_api/SpotifyApi';
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';
import { LibraryContext } from './context/LibraryContext';

const Callback = () => {
  const hasRun = useRef(false);

  const { userData, setUserData, hasLoaded, setHasLoaded } = useContext(UserContext);
  const { setTopArtists } = useContext(LibraryContext);

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const redirect = () => {
    navigate('/suggestions');
  };

  const authFlow = async () => {
    try {
      console.log('[Auth Flow] Initiating Spotify authorization flow...');
      await spotify.auth.handleAuthorizationFlow(setUserData);
      console.log('[Auth Flow] Authorization flow completed.');
    } catch (error) {
      console.error('[Auth Flow] Error during Spotify authorization flow:', error);
    }
  };

  const loadContext = async (accessToken) => {
    try {
      console.log('[Context Loading] Loading context with access token...');
      await spotify.user.handleLoad(accessToken, setUserData);
      console.log('[Context Loaded] User context successfully loaded:', userData);
    } catch (error) {
      console.error('[Context Loading] Error loading user context:', error);
    }
  };

  const handleLogin = async () => {
    const accessToken = userData.authentication.accessToken;
    console.log('[Login Flow] Checking access token:', accessToken);

    if (accessToken && !hasLoaded) {
      console.log('[Login Flow] Access token found, loading context...');
      await loadContext(accessToken);
      setSuccess(true);
      setIsLoading(false);
      setHasLoaded(true);
      console.log('[Login Flow] Login successful. User data:', userData);

      setTimeout(() => {
        console.log('[Login Flow] Redirecting to suggestions...');
        redirect();
      }, 3000);
    } else {
      console.log('[Login Flow] No access token found or already loaded.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!hasRun.current) {
      authFlow();
      hasRun.current = true; // Prevent subsequent calls
    }
  }, []);

  useEffect(() => {
    handleLogin();
  }, [userData]);

  return (
      <section className={'main'}>
        <h1>Spotify Authorization Callback</h1>
        {isLoading && <span className="loader"></span>}
        {!isLoading && (
            <>
              {success ? (
                  <p>Success! Redirecting...</p>
              ) : (
                  <p>Failure! Please try again.</p>
              )}
            </>
        )}
      </section>
  );
};

export default Callback;
