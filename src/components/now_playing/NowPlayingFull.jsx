import ArtistPhoto from './subComponents/ArtistPhoto'
import SongPlayer from './subComponents/SongPlayer'
import SongList from './subComponents/SongList'

const NowPlayingFull = () => {

  return (
    <section className={'nowplaying_full'}>
      <ArtistPhoto />
      <SongPlayer />
      <SongList />
    </section>
  )
}

export default NowPlayingFull