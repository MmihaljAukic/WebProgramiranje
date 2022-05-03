import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import "./card.css";

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorema askfhjasfjaspdj apasjdjaspdjkpasd pasjdppasdop "}
        </p>
    
        <div className="d-flex flex-row mb-3 justify-content-center">
        <div className="p-2" > <Button variant="primary">BUY</Button></div>
        <div className="p-2"> <Button  variant="primary">INFO</Button></div>
      </div>
      

        
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;
