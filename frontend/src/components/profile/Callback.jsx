import React, { useContext, useEffect, useRef, useState } from 'react'
import { spotify } from '../../api/spotify_api/SpotifyApi'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { LibraryContext } from '../../context/LibraryContext'


const Callback = () => {
  const hasRun = useRef(false);
  const { userData,setUserData, hasLoaded, setHasLoaded } = useContext(UserContext)
  const { setTopArtists } = useContext(LibraryContext)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/suggestions')
  }

  const authFlow = async () => {
    await spotify.auth.handleAuthorizationFlow(setUserData);
  }

  const loadContext = async (accessToken) => {
    await spotify.user.handleLoad(accessToken, setUserData);
    await spotify.library.handleLoad(accessToken, setTopArtists);
  }
  const handleLogin = async () => {
    const accessToken = userData.authentication.accessToken;
    if (accessToken && !hasLoaded) {
      await loadContext(accessToken)
      setSuccess(true);
      setIsLoading(true);
      try {
        console.log('Login success');
        setIsLoading(false);
        setHasLoaded(true);
        setTimeout(() => {
          redirect();
        }, 3000);
      } catch (error) {
        console.error('Error loading user data:', error);
        setIsLoading(false);
      }
    }

    if (!userData.authentication.accessToken) {
      console.log('Login error');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!hasRun.current) {
      authFlow()
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
