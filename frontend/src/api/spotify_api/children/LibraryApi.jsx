

class LibraryApi {

  async getTopArtists(accessToken) {
    console.log('[LibraryApi] Fetching top artists with access token:', accessToken);

    const response = await fetch(`/api/spotify/me/top/artists?accessToken=${accessToken}`);
    if (!response.ok) {
      console.error('[LibraryApi] Error fetching top artists:', response.status);
      throw new Error(`Error getting top artists: ${response.status}`);
    }

    const topArtists = await response.json();
    console.log('[LibraryApi] Successfully retrieved top artists:', topArtists);
    return topArtists;
  }

  async getMyPlaylists(accessToken) {
    console.log('[LibraryApi] Fetching user playlists with access token:', accessToken);

    const response = await fetch(`http://localhost:5000/api/spotify/me/playlists?accessToken=${accessToken}`);
    if (!response.ok) {
      console.error('[LibraryApi] Error fetching user playlists:', response.status);
      const errorDetails = await response.json();
      console.error('Error details:', errorDetails);
      throw new Error(`Error fetching playlists: ${response.status}`);
    }

    const playlists = await response.json();
    console.log('[LibraryApi] Successfully retrieved user playlists:', playlists);
    return playlists;
  }

}

export const library = new LibraryApi();
