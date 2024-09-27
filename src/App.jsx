import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white');

  const handleWhiteButtonClick = () => {
    setBgColor('white');
  };

  const handleBlackButtonClick = () => {
    setBgColor('black');
  };


  return (
    <>
      <div className="App" style={{ backgroundColor: bgColor, height: '100vh' }}>
      <h1> Background Color</h1>
      <button onClick={handleWhiteButtonClick} style={{ marginRight: '10px' , paddingLeft:'20px'}}>White</button>
      <button onClick={handleBlackButtonClick} style={{ marginRight: '10px' , paddingLeft:'20px'}}>Black</button>
    </div>

      
      
    </>
  )
}

export default App
