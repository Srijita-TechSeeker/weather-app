export default function SearchBar({ city, setCity, fetchWeather }) {
  const handleSearch = () => fetchWeather(city);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex w-full max-w-md mb-6 shadow-lg rounded overflow-hidden">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter city name..."
        className="flex-1 px-4 py-3 focus:outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-400 hover:bg-yellow-500 px-6 font-bold text-white transition-colors"
      >
        Search
      </button>
    </div>
  );
}
