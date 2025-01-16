import { auth } from './children/AuthApi'
import { user } from './children/UserApi'
import { library } from './children/LibraryApi'
import { player } from './children/PlayerApi'
import {suggestions} from './children/SuggestionsApi';


class SpotifyApi {
  auth
  user
  library
  player
  suggestions

  constructor (auth, user, library, player) {
    this.auth = auth;
    this.user = user;
    this.library = library;
    this.player = player;
    this.suggestions = suggestions;
  }
}

export const spotify = new SpotifyApi(
    auth,
    user,
    library,
    player,
    suggestions
);