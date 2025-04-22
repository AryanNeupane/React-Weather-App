import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"

function SearchBox({updateInfo}) {

    let [city,setCity]= useState("")

    const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '7122f986e6866adca7562720589bcde0'

    let getWeatherInfo = async (city) => {
      try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error("City not found or API error");
        }
    
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    
        let result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description
        };
    
        console.log(result);
        return result;
      } catch (error) {
        console.error("Error fetching weather info:", error);
        alert("Unable to fetch weather data. Please check the city name.");
        return null;
      }
    };
    
 


    let handleChange=(event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = async (event) => {
      event.preventDefault();
      console.log(city);
      let newinfo = await getWeatherInfo(city);
      setCity("");
    
      if (newinfo) {
        updateInfo(newinfo);
      }
    };
    

  return (
    <div className='SearchBox'>
       <form onSubmit={handleSubmit}>
       <TextField id="city" 
        label="City Name " 
        variant="outlined"
        required 
        value={city}
        onChange={handleChange}/>
        <br/><br/>
        <Button variant="contained" type="submit" >
        Search
      </Button>

       </form>
    </div>
  )
}

export default SearchBox