import React from "react";
import Card from "./Card";

import audi from "../assets/audi.jpg";
import ferrari from '../assets/ferrari.jpg'
import mercedes from '../assets/mercedes.jpg'
import bmw from '../assets/bmw.jpg'
import rimac from '../assets/rimac.jpg'

const cards = [
  {
    id: 1,
    title: "Audi",
    image: audi,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Ferrari",
    image: ferrari,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Mercedes",
    image: mercedes,
    url: "https://youtube.com/fazttech",
  },
  {
    id: 4,
    title: "BMW",
    image: bmw,
    url: "https://youtube.com/fazttech",
  }, {
    id: 5,
    title: "RIMAC",
    image: rimac,
    url: "https://youtube.com/fazttech",
  }

];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
