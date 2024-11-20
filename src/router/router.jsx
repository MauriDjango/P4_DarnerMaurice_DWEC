import {createBrowserRouter} from 'react-router-dom';

import HomePage from '../pages/HomePage'
import HeaderLayout from '../layouts/HeaderLayout'
import FooterLayout from '../layouts/FooterLayout'
import ProfileLayout from '../layouts/ProfileLayout'
import ContactLayout from '../layouts/ContactLayout'
import ErrorLayout from '../layouts/ErrorLayout'
import LibraryLayout from '../layouts/LibraryLayout'
import SuggestionsLayout from '../layouts/SuggestionsLayout'
import NowPlayingFull from '../components/now_playing/NowPlayingFull'
import Profile from '../components/profile/Profile'
import Suggestions from '../components/suggestions/Suggestions'
import NowPlayingMini from '../components/now_playing/NowPlayingMini'
import Library from '../components/Library/Library'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        element: <HeaderLayout />,
      },
      {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
          {
            element: <NowPlayingMini />
          },
          {
            element: <Profile />
          }
        ]
      },
      {
        path: '/contact',
        element: <ContactLayout />,
        children: [
          {
            element: <NowPlayingMini />
          },
          {
            element: <Contact />
          }
        ]
      },
      {
        path: '/error',
        element: <ErrorLayout />
      },
      {
        path: '/library',
        element: <LibraryLayout />,
        children: [
          {
            element: <NowPlayingMini />
          },
          {
            element: <Library />
          }
        ]
      },
      {
        path: '/suggestions',
        element: <SuggestionsLayout />,
        children: [
          {
            element: <NowPlayingFull />
          },
          {
            element: <Suggestions />
          }
        ]
      },
      {
        element: <FooterLayout />
      }
    ]
  }
])

export default router