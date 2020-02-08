"use strict";

// ===========================================================
// Dependencies
// ===========================================================

const express = require("express");
const path = require("path");

// =============================================================
// Setup
// =============================================================

const PORT = 8000;
const app = express();

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
// Data
// =============================================================

let currentReservations = [
  {
    name: "dane",
    id: 1
  },
  {
    name: "Thod",
    id: 2
  }
];
let waitList = [];

// =============================================================
// Routes
// ===
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "view.html"))
);

app.get("/reservation", (req, res) =>
  res.sendFile(path.join(__dirname, "reservation.html"))
);

// Displays current reservations & waitlist
app.get("/api/tables", (req, res) => res.json(currentReservations));
// app.get("/api/tables", (req, res) => res.json(waitList));

// Displays the reservations array until 5 or returns false
app.get("/api/tables/", (req, res) => {
  const tableData = req.params.currentReservations;
  const waitListData = req.params.waitList;

  console.log(tableData);
  console.log(waitListData);

  if (tableData.length < 4) {
    tableData.push(newReservation);
  } else {
    waitList.push(newReservation);
  }

  return res.json(false);
});
// Displays the waitlist array or returns false

// Create New reservation until we have 5 reservations
app.post("/api/reservation", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const tableData = req.body;
  // newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
  console.log(tableData);

  if (currentReservations.length < 4) {
    currentReservations.push(tableData);
  } else {
    waitList.push(tableData);
  }

  currentReservations.push(tableData);
  res.json(tableData);
});

app.listen(PORT, () => console.log("App listening on PORT " + PORT));
