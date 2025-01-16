import {useContext} from 'react';
import {CurrentArtistContext} from '../../../../context/CurrentArtistContext';
import Queue from '../../full/queue/Queue';

const QueueMini = () => {
  const { artistName } = useContext(CurrentArtistContext)

  return (
      <section className={'now-playing-mini__queue-container'}>
        <h1>
          {artistName}
        </h1>
        <Queue></Queue>
      </section>
  )
}

export default QueueMini