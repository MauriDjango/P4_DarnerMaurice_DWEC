


class SuggestionsApi {
  getSuggestions(accessToken) {
    return fetch(`/api/spotify/me/suggestions?accessToken=${accessToken}`)
     .then((response) => {
        if (!response.ok) {
          throw new Error(`Error getting suggestions: ${response.status}`);
        }
        return response.json();
      })
     .catch((error) => {
        console.error('Error:', error);
      });
  }
}

export const suggestions = new SuggestionsApi();