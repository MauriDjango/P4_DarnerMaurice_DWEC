import {createBrowserRouter, Outlet} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import HeaderLayout from '../layouts/HeaderLayout';
import FooterLayout from '../layouts/FooterLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import ContactLayout from '../layouts/ContactLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import LibraryLayout from '../layouts/LibraryLayout';
import SuggestionsLayout from '../layouts/SuggestionsLayout';
import Callback from '../components/profile/Callback'
import LoginLayout from '../layouts/LoginLayout'
import RegisterLayout from '../layouts/RegisterLayout'
import { UserProvider } from '../context/UserContext'
import { CurrentArtistProvider } from '../context/CurrentArtistContext'
import { LibraryProvider } from '../context/LibraryContext'
import { PlayerProvider } from '../context/PlayerContext'
import MainLayout from '../layouts/MainLayout'
import PlayerFullLayout from '../components/Player/PlayerFullLayout'
import PlayerMiniLayout from '../components/Player/PlayerMiniLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <UserProvider>
          <CurrentArtistProvider>
            <LibraryProvider>
              <PlayerProvider >
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
        element:
          <UserProvider>
              <HomePage />
          </UserProvider>
        ,
        children: [
          {
            path: 'profile',
            element: <MainLayout />,
            children: [
              {
                element: <PlayerFullLayout />
              },
              {
                element: <ProfileLayout />
              }
              ]
          },
          {
            path: 'contact',
            element: <MainLayout />,
            children: [
              {
                element: <PlayerFullLayout />
              },
              {
                element: <ContactLayout />
              }
            ]
          },
          {
            path: 'error',
            element: <MainLayout />,
            children: [
              {
                element: <ErrorLayout />
              }
            ]
          },
          {
            index: true,
            path: 'suggestions',
            element: <MainLayout />,
            children: [
              {
                element: <PlayerFullLayout />
              },
              {
                element: <SuggestionsLayout />
              }
            ]
          },
          {
            path: 'library',
            element: <MainLayout />,
            children: [
              {
                element: <PlayerMiniLayout />
              },
              {
                element: <LibraryLayout />
              }
            ]
          },
          {
            path: 'callback',
            element: <MainLayout />,
            children: [
              {
                element: <Callback />
              }
            ]
          },
          {
            path: 'login',
            element: <MainLayout />,
            children: [
              {
                element: <PlayerFullLayout />
              },
              {
                element: <LoginLayout />
              }
            ]
          },
          {
            path: 'register',
            element: <MainLayout />,
            children: [
              {
                element: <PlayerFullLayout />
              },
              {
                element: <RegisterLayout />
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router;
