import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StarRating } from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);

function Test() {
  let defaultRating = 3;
  let msg = ["Terrible", "Bad", "Okay", "Good", "Excellent"];
  const [overallRating, setOverallRating] = useState(defaultRating);
  return (
    <>
      <StarRating
        maxRating={5}
        color={"gold"}
        size={25}
        setOverallRating={setOverallRating}
        defaultRating={defaultRating}
        msg={msg}
      />
      <p>The current rating is {overallRating}</p>
    </>
  );
}
