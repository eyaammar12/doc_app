
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './index.css';  // Import Tailwind CSS and custom styles

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { AuthContextProvider } from "./context/authContext.jsx";

import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer theme='dark' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false}/>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
