import PlayerFullLayout from '../components/Player/full/PlayerFullLayout'
import Suggestions from '../components/suggestions/Suggestions'
import NavBar from '../components/main/NavBar';


const SuggestionsLayout = () => {
  return (
    <section className={'main'}>
      <Suggestions />
      <NavBar />
    </section>
  )
}

export default SuggestionsLayout