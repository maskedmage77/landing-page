/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import './App.css';
import LinkCollection from './components/LinkCollection';
import RinkebyETH from './components/RinkebyETH';
import StyledLink from './components/StyledLink';
import { work, social, entertainment } from './constants/links';

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

      <LinkCollection links={social} title="Social Media" />
      <LinkCollection links={entertainment} title="Entertainment" />
      <LinkCollection links={work} title="Work" />

    </div>
  );
}

export default App;
