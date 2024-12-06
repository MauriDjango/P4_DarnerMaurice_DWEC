import { useContext } from 'react'
import { CurrentArtistContext } from '../../../context/CurrentArtistContext'


const Artist = () => {
  const { albumImg, artistName } = useContext(CurrentArtistContext)

  return (
    <div className={'player__artist'}>
      <img src={albumImg || null} alt="Artist currently playing"
      className={'artist__photo'}/>
      <p className={'artist_name'}> {artistName} </p>
    </div>
  )
}

export default Artist

//Todo figure out how to import img