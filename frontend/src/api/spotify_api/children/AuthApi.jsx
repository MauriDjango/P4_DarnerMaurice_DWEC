import Utils from '../../../utils/utils'

const clientId = import.meta.env.VITE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_REDIRECT_URI;


class AuthApi {
  #clientId
  #redirectUri

  constructor (clientId, redirectUri) {
    this.#clientId = clientId;
    this.#redirectUri = redirectUri;
  }

  // PKCE Initialization -------------------------------------------------------

  // Generates and stores the code_verifier and returns the code_challenge
  initializePKCE = async () => {
    const codeVerifier = Utils.generateCodeVerifier(128); // Generate random string for PKCE
    const codeChallenge = await Utils.generateCodeChallenge(codeVerifier); // Hash the code verifier

    // Store the code_verifier in localStorage
    localStorage.setItem('code_verifier', codeVerifier);
    localStorage.setItem('code_challenge', codeChallenge);

    console.log('[PKCE] Code verifier and challenge stored in localStorage.');
  };

  // Authorization Redirect ----------------------------------------------------
  // Builds and redirects to the Spotify Authorization URL
  redirectToSpotifyAuthorization = () => {
    const scope = 'user-read-private user-read-email user-top-read playlist-read-private user-read-playback-state';
    const codeChallenge = localStorage.getItem('code_challenge');

    // Construct the authorization URL
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = {
      client_id: this.#clientId,
      response_type: 'code',
      redirect_uri: this.#redirectUri,
      scope: scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    };

    authUrl.search = new URLSearchParams(params).toString();

    console.log('[Authorization Redirect] Redirecting to Spotify authorization page with params:', params);

    // Redirect to Spotify's authorization page
    window.location.href = authUrl.toString();
  };

  // PKCE + Authorization Flow -------------------------------------------------
  // Orchestrates PKCE initialization and redirects to Spotify
  generateCodeChallengeAndRedirect = async () => {
    try {
      console.log('[Authorization Flow] Initializing PKCE...');
      await this.initializePKCE(); // Step 1: Initialize PKCE
      console.log('[Authorization Flow] Redirecting to Spotify authorization...');
      this.redirectToSpotifyAuthorization(); // Step 2: Redirect to Spotify
    } catch (error) {
      console.error('[Authorization Flow] Error during PKCE initialization or redirect:', error);
    }
  };

  // Main Authorization Flow ---------------------------------------------------
  // Handles the authorization process based on URL state
  handleAuthorizationFlow = async (setUserData) => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    console.log('[Authorization Flow] Checking for authorization code in URL:', authorizationCode);

    if (authorizationCode) {
      // Step 1: Authorization code present -> Exchange for token
      console.log('[Authorization Flow] Authorization code found, proceeding with token exchange.');
      await this.exchangeCodeForToken(authorizationCode, setUserData);
    } else {
      // Step 2: No code -> Start the PKCE + Authorization Flow
      console.log('[Authorization Flow] No authorization code found, starting PKCE flow...');
      await this.generateCodeChallengeAndRedirect();
    }
  };

  // Token Exchange ------------------------------------------------------------
  // Fetches access token from your backend API
  exchangeCodeForToken = async (code, setUserData) => {
    const codeVerifier = localStorage.getItem('code_verifier'); // Retrieve PKCE verifier
    console.log('[Token Exchange] Exchanging code for token with codeVerifier:', codeVerifier);

    try {
      const response = await fetch('http://localhost:5000/api/spotify/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: code,
          codeVerifier: codeVerifier,
          redirectUri: this.#redirectUri,
        }),
      });

      const data = await response.json();
      console.log('[Token Exchange] Response received:', data);

      if (response.ok && data.access_token) {
        console.log('[Token Exchange] Access token successfully obtained:', data.access_token);

        // Update user data
        setUserData((prevData) => ({
          ...prevData,
          authentication: {
            ...prevData.authentication,
            accessToken: data.access_token,
          },
        }));

        // Store access token in localStorage
        localStorage.setItem('access_token', data.access_token);
        console.log('[Token Exchange] User authentication data updated and token stored.');
      } else {
        console.error('[Token Exchange] Failed to obtain access token:', data);
      }

      return data;
    } catch (error) {
      console.error('[Token Exchange] Error during token exchange:', error);
    }
  };
}

export const auth = new AuthApi(clientId, redirectUri)
