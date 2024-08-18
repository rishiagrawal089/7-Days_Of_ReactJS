const weatherIcon = (main) => {
  switch (main) {
    case "Haze": return "CLEAR_DAY";
    case "Clouds": return "CLOUDY";
    case "Clear":return "CLOUDY";
    case "Rain": return "RAIN";
    case "Snow": return "SNOW";
    case "Dust": return "WIND";
    case "Drizzle": return "SLEET";
    case "Fog": return "FOG";
    case "Smoke": return "FOG";
    case "Tornado": return "WIND";
    case "Thunderstorm":return "WIND";
    case "Atmosphere": return "PARTLY_CLOUDY_DAY";
    default: return "CLEAR_DAY";
  }
};
export default weatherIcon;
