import React, { useState } from "react";

import Cards from "./Cards";
import Content from "./Content";
import Footer from "./Footer";

function Home() {
  const [cards, setCards] = useState([
    {
      title: "heloo",
      body: "something",
    },
    {
      title: "great",
      body: "something",
    },
    {
      title: "oppertunity",
      body: "something",
    },
    {
      title: "Fields",
      body: "something",
    },
    {
      title: "Happy",
      body: "something",
    },
    {
      title: "Command",
      body: "something",
    },
    {
      title: "Command",
      body: "something",
    },
    {
      title: "Command",
      body: "something",
    },
  ]);

  return (
    <div className="container-fluid">
      <div className="row">
        <Content />
      </div>
      <div className="row">
        {/* {cards.map((card) => {
          console.log("d"); */}
        <Cards cards={cards} />
        {/* })} */}
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
