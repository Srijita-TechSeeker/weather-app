export default function WeatherDisplay({ weather, loading, error }) {
  if (loading)
    return <p className="text-white text-lg font-semibold">Loading...</p>;
  if (error)
    return <p className="text-red-200 text-lg font-semibold">{error}</p>;
  if (!weather) return null;

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-xl w-80 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg mb-1 capitalize">{weather.weather[0].description}</p>
      <p className="text-xl font-semibold mb-1">
        🌡 Temperature: {weather.main.temp}°C
      </p>
      <p className="text-lg">💧 Humidity: {weather.main.humidity}%</p>
    </div>
  );
}
