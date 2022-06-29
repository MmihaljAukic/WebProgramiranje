import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useAuth } from "../lib/init-firebase";
import { useNavigate } from "react-router-dom";

const Motors = () => {
  const [card, setCards] = useState([]);
  const currentUser = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080/motors").then(function (response) {
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
export default Motors;
