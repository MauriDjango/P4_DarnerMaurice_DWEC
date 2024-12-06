import Utils from '../../utils/utils'


const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI

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
    const codeChallenge = await Utils.generateCodeChallenge(codeVerifier);     // Hash the code verifier

    // Store the code_verifier in localStorage
    localStorage.setItem('code_verifier', codeVerifier);
    localStorage.setItem('code_challenge', codeChallenge);
    console.log('Local storage code_verifier:', codeVerifier);
  };

// Authorization Redirect ----------------------------------------------------

// Builds and redirects to the Spotify Authorization URL
  redirectToSpotifyAuthorization = () => {
    const scope = `
    user-read-private 
    user-read-email
    user-top-read
    `;

    const codeChallenge = localStorage.getItem('code_challenge');

    console.log('redirect  clientID', clientId)
    // Construct the authorization URL
    const authUrl = new URL("https://accounts.spotify.com/authorize");
    const params = {
      client_id: clientId,
      response_type: 'code',
      redirect_uri: redirectUri,
      scope: scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    };

    authUrl.search = new URLSearchParams(params).toString();

    // Redirect to Spotify's authorization page
    window.location.href = authUrl.toString();
  };

// PKCE + Authorization Flow -------------------------------------------------

// Orchestrates PKCE initialization and redirects to Spotify
  generateCodeChallengeAndRedirect = async () => {
    try {
      await this.initializePKCE(); // Step 1: Initialize PKCE
      this.redirectToSpotifyAuthorization(); // Step 2: Redirect to Spotify
    } catch (error) {
      console.error("Error generating code challenge or redirecting:", error);
    }
  };

// Main Authorization Flow ---------------------------------------------------

// Handles the authorization process based on URL state
   handleAuthorizationFlow = async (setUserData) => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');
    console.log('Obtaining authorization code');

    if (authorizationCode) {
      // Step 1: Authorization code present -> Exchange for token
      await this.exchangeCodeForToken(authorizationCode, setUserData);
      console.log("Authorization code obtained:", authorizationCode);
    } else {
      // Step 2: No code -> Start the PKCE + Authorization Flow
      await this.generateCodeChallengeAndRedirect();
      console.log("No authorization code found, starting authorization flow...");
    }
  };

// Token Exchange ------------------------------------------------------------

// Fetches access token from your backend API
   exchangeCodeForToken = async (code, setUserData) => {
    const codeVerifier = localStorage.getItem('code_verifier'); // Retrieve PKCE verifier
    console.log('Exchanging code for token');

    try {
      const response = await fetch('http://localhost:5000/api/spotify/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: code,
          codeVerifier: codeVerifier,
          redirectUri: redirectUri,
        }),
      });

      const data = await response.json();
      console.log('Received token data:', response, data);
      if (response.ok && data.access_token) {
        setUserData((prevData) => {
          return {
            ...prevData,
            authentication: {
              ...prevData.authentication,
              accessToken: data.access_token,  // Correct key 'accessToken'
            },
          };
        });
        localStorage.setItem('access_token', data.access_token); // Save access token
        console.log("Access token obtained:", data.access_token);
        console.log('User data set');
      } else {
        console.error("Failed to obtain access token:", data);
      }

      return data;
    } catch (error) {
      console.error('Error exchanging code for token:', error);
    }
  };
}


export const auth = new AuthApi(clientId, redirectUri)

