import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    O1d: "CLEAR_Day",
    O1n: "CLEAR_Night",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "10d": "SLEET",
    "11d": "WIND",
    "13d": "SNOW",
    "50d": "FOG",
    "03n": "CLOUDY",
    "04n": "CLOUDY",
    "09n": "RAIN",
    "10n": "SLEET",
    "11n": "WIND",
    "13n": "SNOW",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#000"
      size={48}
      animate={true}
    />
  );
}
