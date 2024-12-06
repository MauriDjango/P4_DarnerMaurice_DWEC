

class PlayerApi {

  async getQueue(accessToken) {
    const response = await fetch(`/api/spotify/player/queue?accessToken=${accessToken}`);
    if (!response.ok) {
      throw new Error(`Error getting queue: ${response.status}`);
    }
    return response.json();
  }

  async handleLoad (accessToken, setQueue) {
    const queue = await this.getQueue(accessToken);
    setQueue((prevData) => {
      return {
        ...prevData,
        queue: queue,
      };
    });
    console.log('Queue obtained:', queue)
  }
}

export const player = new PlayerApi();