

class UserApi {

  async getProfile(accessToken) {
    const response = await fetch(`/api/spotify/me?accessToken=${accessToken}`);
    if (!response.ok) {
      throw new Error(`Error getting user profile: ${response.status}`);
    }
    return response.json();
  }

  async handleLoad (accessToken, setUserData) {
    const userProfile = await this.getProfile(accessToken);
    setUserData((prevData) => {
      return {
        ...prevData,
        userProfile: userProfile,
      };
    });
    console.log('UserApi profile obtained:', userProfile)
  }
}

export const user = new UserApi();