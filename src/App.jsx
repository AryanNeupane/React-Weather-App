import React from 'react'
import WeatherApp from './WeatherApp'


function App() {
  console.log("API Key from env:", import.meta.env.VITE_API_KEY);


  return (
    <div>
      
      <WeatherApp/>
    </div>
  )
}

export default App