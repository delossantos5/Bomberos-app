import React from 'react';
import BrandMenu from './components/BrandMenu';
import QRScanner from './components/QRScanner';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrandMenu />
      <QRScanner />
    </div>
  );
}

export default App;
