import React from 'react';
import Weather from './apiPath.js';

export default function App() {
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
