import { useContext, useEffect } from 'react'
import Song from './Song'
import { PlayerContext } from '../../../../context/PlayerContext'

const Queue = () => {
  const { queue } = useContext(PlayerContext)

  useEffect(() => {
  }, []);

  return (
    <section className={'queue'}>
      <h1>Queue</h1>
      <ul>
        {queue.map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </ul>
    </section>
  );
}

export default Queue;