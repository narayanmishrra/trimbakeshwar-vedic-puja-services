import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Hide the loading screen once React is ready to render
const loadingScreen = document.getElementById('loading-screen');
if (loadingScreen) {
  // Small delay to ensure smooth transition
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    // Remove from DOM after transition completes
    setTimeout(() => {
      loadingScreen.remove();
      // Also remove fouc-guard from body
      document.body.classList.remove('fouc-guard');
    }, 500);
  }, 100);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
