import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Hide the loading screen once React is ready to render
const hideLoadingScreen = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (!loadingScreen) return;
  loadingScreen.classList.add('hidden');
  setTimeout(() => loadingScreen.remove(), 500);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Hide the splash on the very next frame after React commits — no artificial delay.
requestAnimationFrame(hideLoadingScreen);
