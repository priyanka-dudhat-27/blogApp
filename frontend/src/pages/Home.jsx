// eslint-disable-next-line no-unused-vars
import React from "react"
import Card from "../components/cards/Card"

const Home = () => {
  return (
    <div>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home