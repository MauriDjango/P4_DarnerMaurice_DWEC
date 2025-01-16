import SuggestionCards from './cards/SuggestionCards';
import SuggestionControl from './controls/SuggestionControl';


const Suggestions = () => {
  return (
    <section className={'suggestions'}>
      <SuggestionControl />
      <SuggestionCards />
    </section>
  )
}

export default Suggestions