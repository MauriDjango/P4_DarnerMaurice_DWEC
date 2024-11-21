import {createBrowserRouter, Outlet} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import HeaderLayout from '../layouts/HeaderLayout';
import FooterLayout from '../layouts/FooterLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import ContactLayout from '../layouts/ContactLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import LibraryLayout from '../layouts/LibraryLayout';
import SuggestionsLayout from '../layouts/SuggestionsLayout';
import NowPlayingFull from '../components/now_playing/NowPlayingFull';
import Profile from '../components/profile/Profile';
import Suggestions from '../components/suggestions/Suggestions';
import NowPlayingMini from '../components/now_playing/NowPlayingMini';
import Library from '../components/Library/Library';
import ContactLink from "../components/Contact/ContactLink";
import ContactForm from "../components/Contact/ContactForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
          <HeaderLayout />
          <Outlet />
          <FooterLayout />
        </>
    ),
    children: [
      {
        element: <HomePage />,
        children: [
          {
            path: 'profile',
            element: <ProfileLayout />
          },
          {
            path: 'contact',
            element: <ContactLayout />,
          },
          {
            path: 'error',
            element: <ErrorLayout />
          },
          {
            index: true,
            element: <SuggestionsLayout />,
          },
          {
            path: 'library',
            element: <LibraryLayout />
          }
        ]
      }
    ]
  }
]);

export default router;
