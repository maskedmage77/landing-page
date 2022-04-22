import React from 'react';
import './App.css';
import RinkebyETH from './components/RinkebyETH';

function App() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      alignContent: 'center',
    }}>
      <RinkebyETH />
    </div>
  );
}

export default App;
