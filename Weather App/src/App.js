import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [wDetails, setWdetails] = useState(null);
  let [counter, setCounter]=useState(1)

  const getData = (event) => {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finalRes) => {
        if (finalRes.cod=="404"){
          setWdetails((undefined))
        }else{
          setWdetails(finalRes);
        }
      });
    console.log(city);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  let changeCounter=()=>{
    setCounter(counter+1)
  }
  useEffect(()=>{
    console.log("Welcome to Shreyas Weather App")
  },[counter])
  return (
    <div className="app-container">
      {counter}
      <button onClick={changeCounter}>Count</button>
      <div className="weather-wrapper">
        <h1 className="app-title">Simple Weather App</h1>

        <form className="search-form" onSubmit={getData}>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            className="city-input"
            placeholder="City Name"
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        <div className="weather-card">
          {wDetails ? (
            <>
              <h3 className="city-name">
                {wDetails.name} <span className="country-code">{wDetails.sys.country}</span>
              </h3>
              <h2 className="temperature">{wDetails.main.temp}ºC</h2>
              <img
                src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                alt="Weather Icon"
                className="weather-icon"
              />
              <p className="weather-description">{wDetails.weather[0].description}</p>
            </>
          ) : (
            "No Data"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
