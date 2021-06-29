import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const text =
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
