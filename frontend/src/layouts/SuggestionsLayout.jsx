import PlayerFullLayout from '../components/Player/PlayerFullLayout'
import Suggestions from '../components/suggestions/Suggestions'


const SuggestionsLayout = () => {
  return (
    <section className={'main'}>
      <PlayerFullLayout />
      <Suggestions />
    </section>
  )
}

export default SuggestionsLayout