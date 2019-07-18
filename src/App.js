import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { WeatherProvider } from './contexts/weather';

function App() {
  return (
    <WeatherProvider>
      <main className="app" >
        <Header />
        <Main />
      </main>
    </WeatherProvider>
  );
}

export default App;