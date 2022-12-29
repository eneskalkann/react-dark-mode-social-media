import './App.css';
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
export const DarkModeContext = createContext(null);

function App() {

  const [theme , setTheme] = useState("light");
  const Toggle = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }

  return (
    <DarkModeContext.Provider value={{theme,Toggle}}>
    <div className="App" class={theme}>
      <Dashboard/>
      <div className="toggle">
      <h6>Dark Mode</h6>
      <ReactSwitch onChange={Toggle} onColor={'378FE6'} offColor={'378FE6'} checked={theme === "dark"}/>
      </div>
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
