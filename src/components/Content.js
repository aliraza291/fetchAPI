import React from "react";

import "./Content.css";

function Content() {
  return (
    <div
      className=" container-fluid home"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/background.jpg"
        })`,
      }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-6 content">
            <h1>Find the best credits Cards</h1>
            <p>
              Now you can compare cards side by side plus gets info about
              rewards oints and interest rates and how to apply all in one
              places Now you can compare cards side by side plus gets info about
              rewards oints and interest rates and how to apply all in one
              placesNow you can compare cards side by side plus gets info about
              rewards oints and interest rates and how to apply all in one
              places
            </p>
          </div>
          <div className="offset-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
