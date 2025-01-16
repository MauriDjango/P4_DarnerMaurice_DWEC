import {useContext} from 'react';
import {CurrentArtistContext} from '../../../../context/CurrentArtistContext';


const ArtistPhotoMini = () => {
  const { albumImg } = useContext(CurrentArtistContext)

  return (
        <img src={albumImg || null} alt="Artist currently playing"
             className={'now-playing-mini__artist-img'}/>
  )
}

export default ArtistPhotoMini