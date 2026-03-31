import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
function Test() {
  // eslint-disable-next-line
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      {" "}
      <App />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      className={"test"}
      messages={["terrible", "Bad", "okay", "good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className={"test"}
      messages={["terrible", "Bad", "okay", "good", "Amazing"]}
      defaultRating={3}
    /> */}
    <Test />
    {/* <StarRating maxRating={10} />
    <StarRating maxRating={5} /> */}
  </React.StrictMode>,
);
