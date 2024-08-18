import React from "react";
import apiKeys from "./apiKeys";
import Clock from "react-live-clock";
import Forcast from "./forcast";
import loader from "./images/WeatherIcons.gif";
import ReactAnimatedWeather from "react-animated-weather";
import dateBuilder from "./dateBuilder";
import weatherIcon from "./weatherIcon";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: undefined,
      lon: undefined,
      temperatureC: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      icon: "CLEAR_DAY",
      main: undefined,
    };
  }

  getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();

    this.setState(
      {
        lat: lat,
        lon: lon,
        temperatureC: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        main: data.weather[0].main,
      },
      () => {
        // Callback function to update icon after state update
        const icon=weatherIcon(this.state.main);
        this.setState({ icon: {icon}});

        
      }
    );
  };

  componentDidMount() {
    if (navigator.geolocation) {
      // We will see 2 time object printed on console becoz 1 will be for getting current location and 2 for open api data.

      const currentLocation = new Promise(async (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      //If user allow location service then will fetch data & send it to get-weather function.
      currentLocation
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          //If user denied location permission or off the location access then alert
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert("Geolocation Not Available");
    }
  }

  render() {
    if (this.state.temperatureC) {
      return (
        <React.Fragment>
          <div className="col-md-7 city">
            <div className="title">
              <h2 className="fs-1 fw-bold">{this.state.city}</h2>
              <h3 className="fs-3 fw-semibold" style={{ textAlign: "right" }}>
                {this.state.country}
              </h3>
            </div>
            <div className="position-absolute bottom-0 px-4 py-5">
              <div className="float-left position-absolute ">
                <div
                  className="fw-semibold mb-1"
                  style={{ fontSize: "40px", letterSpacing: "4px" }}
                >
                  <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </div>
                <div className="fw-medium" style={{ fontSize: "20px" }}>
                  {dateBuilder(new Date())}
                </div>
              </div>
              <div className="temperature ">
                <p>
                  {this.state.temperatureC}°<span>C</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 part2 mb-5">
            <Forcast icon={this.state.icon} weather={this.state.main} city={this.state.city}/>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="col-md-12 text-center px-0">
            <div className="mx-auto d-block">
              <img src={loader} />
            </div>

            <h5 className="fs-4" style={{ color: "white", fontWeight: "600" }}>
              Detecting your location
            </h5>
            <h4 className="mt-3 mb-5 fs-5" style={{ color: "white" }}>
              Your current location wil be displayed on the App <br></br> & used
              for calculating Real time weather.
            </h4>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Weather;
