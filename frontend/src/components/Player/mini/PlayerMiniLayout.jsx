import SuggestionsMini from './children/SuggestionsMini';
import ArtistInfoMini from './children/ArtistInfoMini';
import ControlsLayout from '../../../layouts/ControlsLayout';

const PlayerMiniLayout = () => {
  return (
    <div className="now-playing-mini">
      <ArtistInfoMini />
      <ControlsLayout />
      <SuggestionsMini />
    </div>
  )
}

export default PlayerMiniLayout