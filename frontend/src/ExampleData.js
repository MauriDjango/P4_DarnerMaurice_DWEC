
const user = {
  firstName: 'Maurice',
  lastname: 'Darner',
  userName: 'Django0321',
  email: 'maurice.darner@gmail.com',
  password: 'password123',
  spotifyAccount: null,
}

const spotifyAccount = {
  userId: '1234567890',
  name: 'Maurice Darner',
  email: 'maurice.darner@gmail.com',
  followers: 1000
}

const profileData = (user) => {
  return {
    user: user,
    spotifyAccount: profileData.spotifyAccount
  }
}