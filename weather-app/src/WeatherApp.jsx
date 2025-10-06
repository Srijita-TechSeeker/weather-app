import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

export default function WeatherApp() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "69dd21f9655a2acde72434dd1beaaa49"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName.trim()}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod !== 200) {
        setError("City not found!");
        setWeather(null);
      } else {
        setWeather(data);
        localStorage.setItem("lastCity", cityName);
      }
    } catch {
      setError("Failed to fetch data!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) fetchWeather(city);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
        🌤 Weather App
      </h1>

      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

      <WeatherDisplay weather={weather} loading={loading} error={error} />
    </div>
  );
}
