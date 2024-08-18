import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import apiKeys from "./apiKeys";
import ReactAnimatedWeather from "react-animated-weather";
import weatherIcon from "./weatherIcon";

function Forcast(props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});
  const [icon,setIcon]=useState("");

  const search = (city) => {
    axios
      .get(
        `${apiKeys.base}weather?q=${
          city != "[object Object]" ? city : query
        }&units=metric&APPID=${apiKeys.key}`
      )
      .then((response) => {
        setWeather(response.data);

        // console.log("ICON---",weatherIcon(response.data.weather[0].main))

        setIcon(weatherIcon(response.data.weather[0].main));
        setQuery("");
      })
      .catch(() => {
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };

  // lifecycle implementation in functional component ( componentDidMount )
  useEffect(() => {
    search(props.city);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="pt-5">
        <ReactAnimatedWeather
          icon={icon===""?props.icon:icon}
          color="white"
          size={112}
          animate={true}
        />
      </div>
      

      <div className="today-weather">
        <h3>{props.weather}</h3>
        <div className="search-box ">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="img-box">
            {" "}
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              onClick={search}
            />
          </div>
        </div>
        <ul>
          {typeof weather.main != "undefined" ? (
            <div>
              {" "}
              <li className="cityHead my-4">
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                />
              </li>
              <li>
                Temperature{" "}
                <span className="temp">
                  {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                </span>
              </li>
              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility)} mi
                </span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
                </span>
              </li>
            </div>
          ) : (
            <li>
              {error.query} {error.message}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Forcast;
