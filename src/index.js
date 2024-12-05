import React from 'react';
import { createRoot } from 'react-dom/client';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import SummaryScreen from './components/SummaryScreen';
import InventoryScreen from './components/InventoryScreen';
import MovementsScreen from './components/MovementsScreen';
import PurchaseScreen from './components/PurchaseScreen';

import './styles/WelcomeScreen.css';
import './styles/LoginScreen.css';
import './styles/SummaryScreen.css';
import './styles/InventoryScreen.css';
import './styles/MovementsScreen.css';
import './styles/PurchaseScreen.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = React.useState('welcome');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div>
      {currentScreen === 'welcome' && <WelcomeScreen navigate={navigate} />}
      {currentScreen === 'login' && <LoginScreen navigate={navigate} />}
      {currentScreen === 'summary' && <SummaryScreen navigate={navigate} />}
      {currentScreen === 'inventory' && <InventoryScreen navigate={navigate} />}
      {currentScreen === 'movements' && <MovementsScreen navigate={navigate} />}
      {currentScreen === 'purchase' && <PurchaseScreen navigate={navigate} />}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


