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

let currentReservations = [];
let waitList = [];

// =============================================================
// Routes
// ===
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "view.html"))
);

app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reservation.html"))
);
