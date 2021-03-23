import React, { useState } from 'react';

// API Key
const apiKey = 'fa3be221e8c80ee36c495e739a53dd7b';

// Initial weather info
var initWeather;
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${apiKey}`)
  .then(res => {
    return res.json();
  })
  .then(data => {
    initWeather = data;
  })
  .then(() => {
    console.log(initWeather);
  })


// App Component
function App() {
  const [city, setCity] = useState('Kolkata');
  const [weather, setWeather] = useState(initWeather);

  const handleSearch = (e) => {    
    e.preventDefault();    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setWeather(data);
      })      
  }

  return (
    <div className="App">
      <h1>React Weather</h1>
      <form>
        <input 
          type="text"
          value={ city }
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>      
      <h2>{ weather && `${weather['main']['temp']}` }</h2>     
    </div>
  );
}

export default App;
