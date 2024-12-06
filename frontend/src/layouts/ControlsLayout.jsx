import { useContext } from 'react'
import { CurrentArtistContext } from '../context/CurrentArtistContext'
import ControlButtons from '../components/Player/children/controls/ControlButtons'

const ControlsLayout = () => {

  const { songName } = useContext(CurrentArtistContext)

  return (
    <section className={'controls'}>
      <h1>Now Playing</h1>
      <p>{songName || 'Song Name'}</p>
      <ControlButtons />
    </section>
  )
}

export default ControlsLayout