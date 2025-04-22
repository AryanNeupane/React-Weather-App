import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from "./InfoBox"

function WeatherApp() {

 const [weatherInfo,setWeatherInfo]=useState({
  city: "Butwal",
    temp: 29.26, // °C
    feelsLike: 27.57, // °C
    tempMin: 29.26, // °C
    tempMax: 29.26, // °C
    humidity: 15, // %
    weather: "Clear Sky",
 })

  let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo)
  }


  return (
    <div style={{textAlign:"center"}}>
      <h1>Weather App by  Aryan</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp