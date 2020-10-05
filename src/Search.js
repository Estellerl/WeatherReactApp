import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="cityInput"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="button" />
          </div>
        </div>
      </form>
    </div>
  );
}