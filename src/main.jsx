import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Router,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Router';
import AuthProvider from './Provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
