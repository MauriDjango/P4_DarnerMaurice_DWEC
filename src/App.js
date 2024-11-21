import './App.css';
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import HeaderLayout from "./layouts/HeaderLayout";
import FooterLayout from "./layouts/FooterLayout";


function App() {
  return (
    <div className="app-container">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
