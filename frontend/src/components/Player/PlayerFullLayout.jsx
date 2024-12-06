import Artist from './children/Artist'
import Queue from './children/queue/Queue'
import ControlsLayout from '../../layouts/ControlsLayout'

const PlayerFullLayout = () => {
  

  return (
    <section className={'player_full'}>
      <Artist />
      <ControlsLayout />
      <Queue />
    </section>
  )
}

export default PlayerFullLayout