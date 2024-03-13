import React from 'react';
import { useClient } from 'next/data-client';
import Weather from './apiPath.js';

const App = () => {
    useClient();
    return (
      <>
        <div>
          <h1>Weather Forecast App</h1>
          <Weather />
        </div>
      </>
    );
  };
  
export default App;