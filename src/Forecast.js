import React, { useState } from "react";
import axios from "axios";
import FutureForcast from "./Futureforcast";
import "./Forecast.css";

export default function Forecast(props) {
  const [working, setWorking] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setWorking(true);
    setForecast(response.data);
  }

  if (working) {
    return (
      //"working";

      //{forecast.list.slice(0,5)}.map(function(forcastItem)
      //{return} <FutureForcast data={forecastItem[0]} />
      //)}
      <div className="Forecast">
        <FutureForcast data={forecast.list[0]} />
        <FutureForcast data={forecast.list[1]} />
        <FutureForcast data={forecast.list[2]} />
        <FutureForcast data={forecast.list[3]} />
        <FutureForcast data={forecast.list[4]} />
        <FutureForcast data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "b9dcade6ea8b84ffbd9565650e525892";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}`;
    axios.get(url).then(handleForecast);

    return null;
  }
}
