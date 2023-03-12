import './App.css';
import React, { useState , useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ReactSwitch from 'react-switch';
import Cookies from 'js-cookie';


function App() {

  const [theme , setTheme] = useState("light");

  useEffect(() =>{
    const cookieTheme = Cookies.get('theme');
    if(cookieTheme){
      setTheme(cookieTheme);
    }
  },[]);

  const handleCookieTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookies.set('theme' , newTheme)
  }

  return (
    <div className="App" class={`App ${theme}`}>
      <Dashboard/>
      <div className="toggle">
      <h6>Dark Mode</h6>
      <ReactSwitch onChange={handleCookieTheme} onColor={'378FE6'} offColor={'378FE6'} checked={theme === "dark"}/>
      </div>
    </div>
  );
}

export default App;
