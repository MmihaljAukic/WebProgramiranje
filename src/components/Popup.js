import { Button } from "react-bootstrap";
import React, { Component } from "react";
import "./popup.css";
import audi from "../assets/audi.jpg";
function Popup(
  props,
  acceleration,
  cylinders,
  displacement,
  horespower,
  milesPerGalon,
  origin,
  weight,
  name,
  price,
  mileage,
  year
) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="overflow">
          {<img src={audi} alt="a wallpaper" className="card-img-top" />}
        </div>
        <h4 className="card-title">{props.name}</h4>
        <div className="m-2 text-start">
          <span>Year: </span>
          {props.year}
        </div>
        <div className="m-2 text-start">
          <span>Price: {props.price} $</span>
        </div>
        <div className="m-2 text-start">
          <span>Milage: {props.mileage} km</span>
        </div>
        <div className="m-2 text-start">
          <span>Acceleration: </span>
          {props.acceleration}
        </div>
        <div className="m-2 text-start">
          <span>Cylinders: </span>
          {props.cylinders}
        </div>
        <div className="m-2 text-start">
          <span>Displacement: </span>
          {props.displacement}
        </div>
        <div className="m-2 text-start">
          <span>Horsepower: </span>
          {props.horespower}
        </div>
        <div className="m-2 text-start">
          <span>Miles per galon: </span>
          {props.milesPerGalon}
        </div>
        <div className="m-2 text-start">
          <span>Origin: </span>
          {props.origin}
        </div>
        <div className="m-2 text-start">
          <span>Weight in lbs: </span>
          {props.weight}
        </div>
        <Button className="primary">Buy</Button>
        <Button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
