import './App.css';
import MapCities from './components/MapCities';

function App() {

  const cities = [
    {
      key: "001",
      englishName: "Boston",
      primaryPostalCode: "02108",

      country: {
        id: "US",
        englishName: "United States"
      },

      administrativeArea: {
        id: "MA",
        englishName: "Massachusetts",
        englishType: "State",
      }
    },

    {
      key: "002",
      englishName: "San Francisco",
      primaryPostalCode: "94133",

      country: {
        id: "US",
        englishName: "United States"
      },

      administrativeArea: {
        id: "CA",
        englishName: "California",
        englishType: "State",
      }
    },
  ]

  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="WeatherApp">
      <h1>Weather</h1>

      <label htmlFor="city">City: </label>
      <input id="city" onChange={handleInputChange} />

      <MapCities cities={cities} />
    </div>
  );
}

export default App;
