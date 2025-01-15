import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Router,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Router';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider  client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
