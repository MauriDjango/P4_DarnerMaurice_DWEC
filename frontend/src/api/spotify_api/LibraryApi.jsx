

class LibraryApi {

  async getTopArtists(accessToken) {
    const response = await fetch(`/api/spotify/me/top/artists?accessToken=${accessToken}`);
    if (!response.ok) {
      throw new Error(`Error getting top artists: ${response.status}`);
    }
    return response.json();
  }

  async handleLoad (accessToken, setTopArtists) {
    const topArtists = await this.getTopArtists(accessToken);
    setTopArtists((prevData) => {
      return {
        ...prevData,
        topArtists: topArtists,
      };
    });
    console.log('Top artists obtained:', topArtists)
  }
}

export const library = new LibraryApi();