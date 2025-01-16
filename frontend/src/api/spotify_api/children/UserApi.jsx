class UserApi {

  async getProfile(accessToken) {
    console.log('[UserApi] Fetching user profile with access token:', accessToken);

    const response = await fetch(`/api/spotify/me?accessToken=${accessToken}`);
    if (!response.ok) {
      console.error('[UserApi] Error fetching user profile:', response.status);
      throw new Error(`Error getting user profile: ${response.status}`);
    }

    const profileData = await response.json();
    console.log('[UserApi] User profile successfully retrieved:', profileData);
    return profileData;
  }

  async handleLoad(accessToken, setUserData) {
    console.log('[UserApi] Loading user profile...');

    try {
      const userProfile = await this.getProfile(accessToken);
      console.log('[UserApi] Profile obtained:', userProfile);

      setUserData((prevData) => ({
        ...prevData,
        userProfile: userProfile,
      }));

      console.log('[UserApi] User data successfully updated in context');
    } catch (error) {
      console.error('[UserApi] Error while loading user data:', error);
    }
  }
}

export const user = new UserApi();
