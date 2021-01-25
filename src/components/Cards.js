import React from "react";

import "./cards.css";

function Cards(props) {
  console.log("debug", props);
  return (
    <div className="cards-section pt-5">
      <h1 className="text-center">Gallary</h1>
      <div className="row cards justify-content-between p-5">
        {props.cards.map((card) => (
          <div className=" col-lg-3 col-md-6 col-sm-6 col-12  mt-5  ">
            <div className="card  p-3 ">
              <img
                className="img-fluid  "
                style={{ alignSelf: "center" }}
                src={process.env.PUBLIC_URL + "/assets/icons1.png"}
              />
              <h6>{card.title}</h6>
              <p>{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
