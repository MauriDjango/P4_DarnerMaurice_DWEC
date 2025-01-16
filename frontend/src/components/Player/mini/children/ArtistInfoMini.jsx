import ArtistPhotoMini from './ArtistPhotoMini';
import Queue from '../../full/queue/Queue';


const ArtistInfoMini = () => {

  return (
      <section className={'now-playing-mini__artist__info'}>
        <ArtistPhotoMini />
        <Queue />
      </section>
  )
}

export default ArtistInfoMini