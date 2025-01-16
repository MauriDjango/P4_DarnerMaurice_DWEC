import { createBrowserRouter, Outlet } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import HeaderLayout from '../layouts/HeaderLayout';
import FooterLayout from '../layouts/FooterLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import ContactLayout from '../layouts/ContactLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import LibraryLayout from '../layouts/LibraryLayout';
import SuggestionsLayout from '../layouts/SuggestionsLayout';
import LoginLayout from '../layouts/LoginLayout';
import RegisterLayout from '../layouts/RegisterLayout';
import { UserProvider } from '../context/UserContext';
import { CurrentArtistProvider } from '../context/CurrentArtistContext';
import { LibraryProvider } from '../context/LibraryContext';
import { PlayerProvider } from '../context/PlayerContext';
import MainLayout from '../layouts/MainLayout';
import PlayerFullLayout from '../components/Player/full/PlayerFullLayout';
import PlayerMiniLayout from '../components/Player/mini/PlayerMiniLayout';
import Callback from '../Callback';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <UserProvider>
          <CurrentArtistProvider>
            <LibraryProvider>
              <PlayerProvider>
                <HeaderLayout />
                <Outlet />
                <FooterLayout />
              </PlayerProvider>
            </LibraryProvider>
          </CurrentArtistProvider>
        </UserProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: (
            <MainLayout>
              <PlayerMiniLayout />
              <ProfileLayout />
            </MainLayout>
        ),
      },
      {
        path: 'contact',
        element: (
            <MainLayout>
              <PlayerMiniLayout />
              <ContactLayout />
            </MainLayout>
        ),
      },
      {
        path: 'error',
        element: (
            <MainLayout>
              <ErrorLayout />
            </MainLayout>
        ),
      },
      {
        path: 'suggestions',
        element: (
            <MainLayout>
              <PlayerFullLayout />
              <SuggestionsLayout />
            </MainLayout>
        ),
      },
      {
        path: 'library',
        element: (
            <MainLayout>
              <PlayerMiniLayout />
              <LibraryLayout />
            </MainLayout>
        ),
      },
      {
        path: 'callback',
        element: (
            <MainLayout>
              <Callback />
            </MainLayout>
        ),
      },
      {
        path: 'login',
        element: (
            <MainLayout>
              <LoginLayout />
            </MainLayout>
        ),
      },
      {
        path: 'register',
        element: (
            <MainLayout>
              <RegisterLayout />
            </MainLayout>
        ),
      },
    ],
  },
]);

export default router;
