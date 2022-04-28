/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import './App.css';
import RinkebyETH from './components/RinkebyETH';
import { css, jsx } from '@emotion/react'

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

      <div>

        <div css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '75px',
          height: '75px',
          backgroundColor: '#660000',
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 1), -5px -5px 10px rgba(255, 255, 255, 0.15)',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          overflow: 'hidden',
          '&:hover': {
            backgroundColor: '#0000',
          }
        }}>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" css={{width: '100%', filter: 'invert(1)'}}/>
        </div>

      </div>

      <RinkebyETH />

    </div>
  );
}

export default App;
