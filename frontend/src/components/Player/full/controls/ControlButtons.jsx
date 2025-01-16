import PreviousSong from './PreviousSong'
import { PlayerContext } from '../../../../context/PlayerContext'
import { useContext } from 'react'
import NextSong from './NextSong'
import Play from './Play'
import Pause from './Pause'
import Favourite from '../../Favourite'


const ControlButtons = () => {

  const { isPlaying } = useContext(PlayerContext)

  return (
    <section className={'controls__buttons'}>
      <PreviousSong />
      { isPlaying ? <Play /> : <Pause /> }
      <NextSong />
      <Favourite />
    </section>
  )
}

export default ControlButtons;