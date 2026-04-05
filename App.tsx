import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './views/Home';
import MapExplorer from './views/MapExplorer';
import Learn from './views/Learn';
import Community from './views/Community';

const App: React.FC = () => {
  // Using simple state-based routing for a lightweight SPA feel
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'map':
        return <MapExplorer />;
      case 'learn':
        return <Learn />;
      case 'community':
        return <Community />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout activeView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;