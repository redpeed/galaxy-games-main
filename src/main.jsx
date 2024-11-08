import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Only import BrowserRouter
import App from './App.jsx';
import './index.css';
import posthog from 'posthog-js'

posthog.init('phc_HPTKdXtOr1eHJV1V0SBUmWpGRAgz6rCkDeT55wCKOyK',
    {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
