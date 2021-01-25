import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid pt-5 ">
      <div className="row">
        <div className="col-12">
          <Jumbotron>
            <div className="container">
              <h1>Information :</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>

              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </div>
            <div className="company container ">
              <div className=" d-flex   ">
                <h3>phone: </h3>
                <p className="p-2">+9234537483832</p>
              </div>
              <div className=" d-flex   ">
                <h3>Address: </h3>
                <p className="p-2">Lahore</p>
              </div>
              <div className=" d-flex   ">
                <h3>Email: </h3>
                <p className="p-2">Raza@gmail.com</p>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
}

export default Footer;
