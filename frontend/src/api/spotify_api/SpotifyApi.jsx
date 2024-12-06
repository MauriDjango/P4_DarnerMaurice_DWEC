import { auth } from './AuthApi'
import { user } from './UserApi'
import { library } from './LibraryApi'
import { player } from './PlayerApi'


class SpotifyApi {
  auth
  user
  library
  player

  constructor (auth, user, library, player) {
    this.auth = auth;
    this.user = user;
    this.library = library;
    this.player = player;
  }
}

export const spotify = new SpotifyApi(auth, user, library, player);