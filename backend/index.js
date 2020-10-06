const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const { mongoose } = require("../backend/db/mongoose");
const {
  Space,
  Spacebudget,
  Spacebudgeteurope,
  NasaBudget,
  IsroBudget,
  RosBudget
} = require("../backend/models/space");

app.get("/nasaData", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

  Space.find({}, function(err, nasaData) {
    console.log("==============data=========", nasaData);
    let satellites = nasaData.map(n => {
      console.log("n is ", n.satellites);
      return n.satellites;
    });

    res.send(satellites);
  });
});

app.get("/nasaspacebudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Spacebudget.find({}, function(err, nasaData) {
    let budgets = nasaData.map(n => {
      console.log("budget is ", n.budget);
      return n.budget;
    });

    res.send(budgets);
  });
});

app.get("/europespacebudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Spacebudgeteurope.find({}, function(err, europeData) {
    let budgets = europeData.map(n => {
      console.log("budget is ", n.budget);
      return n.budget;
    });

    res.send(budgets);
  });
});

app.get("/marsdata", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Near Mars >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  Mars.find({}, function(err, nasaData) {
    let budgets = nasaData.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    let projects = nasaData.map(n => {
      console.log("new projects is ", n.project);
      return n.project;
    });

    const marsData = [budgets, projects];

    res.send(marsData);
  });
});

app.get("/planetData", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Near Mars >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  Planet.find({}, function(err, nasaData) {
    let distances = nasaData.map(n => {
      console.log("distance is ", n.budget);
      return n.distance;
    });

    let names = nasaData.map(n => {
      console.log("planet name is ", n.project);
      return n.name;
    });

    const planetData = [names, distances];

    res.send(planetData);
  });
});

//comparison

app.get("/nasabudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Nasa budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  NasaBudget.find({}, function(err, nBudget) {
    let budgets = nBudget.map(n => {
      console.log("new budget is nbudget", n.budget);
      return n.budget;
    });

    // const naBudget = [budgets];
    console.log("inside nbudget array", budgets);
    res.send(budgets);
  });
});

app.get("/isrobudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("isro budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  IsroBudget.find({}, function(err, iBudget) {
    let budgets = iBudget.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    const isBudget = [budgets];

    res.send(isBudget);
  });
});

app.get("/rosbudget", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("roscosmos budgets >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  RosBudget.find({}, function(err, rBudget) {
    let budgets = rBudget.map(n => {
      console.log("new budget is ", n.budget);
      return n.budget;
    });

    const roBudget = [budgets];

    res.send(roBudget);
  });
});

app.use("/agency", require("./routes/agency"));
app.use("/planet", require("./routes/planet"));

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
