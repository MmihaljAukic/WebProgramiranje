const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  firestore
    .collection("Cars")
    .get()
    .then((response) => {
      let cars = [];
      cars = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      return res.json(cars);
    });
});

app.get("/cars", cors(), async (req, res) => {
  firestore
    .collection("Cars")
    .get()
    .then((response) => {
      let cars = [];
      cars = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      return res.json(cars);
    });
});

app.get("/motors", cors(), async (req, res) => {
  firestore
    .collection("Motors")
    .get()
    .then((response) => {
      let motors = [];
      motors = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      return res.json(motors);
    });
});

app.get("/trucks", cors(), async (req, res) => {
  firestore
    .collection("Trucks")
    .get()
    .then((response) => {
      let trucks = [];
      trucks = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      return res.json(trucks);
    });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
