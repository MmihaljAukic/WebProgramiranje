import React, { Component, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { firestore } from "../lib/init-firebase";
import Card from "./Card";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/storage";
import axios from "axios";
import { useAuth } from "../lib/init-firebase";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const [card, setCards] = useState([]);
  const currentUser = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);
  useEffect(() => {
    axios.get("http://localhost:8080").then(function (response) {
      setCards(response.data);
    });
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {card.map((card) => (
          <div className="d-flex mt-4" key={card.id}>
            <Card
              id={card.id}
              name={card.data.name}
              year={card.data.year}
              acceleration={card.data.acceleration}
              cylinders={card.data.cylinders}
              displacement={card.data.displacement}
              horespower={card.data.horespower}
              milesPerGalon={card.data.milesPerGalon}
              origin={card.data.origin}
              weight={card.data.weight}
              price={card.data.price}
              mileage={card.data.mileage}
              img={card.data.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cars;
