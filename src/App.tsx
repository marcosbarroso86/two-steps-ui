import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(() => {
    Aos.init()
  }, [])
  


  return (
    <div >
      <HomeScreen />
    </div>
  );
}

export default App;
