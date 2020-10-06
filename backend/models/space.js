var mongoose = require("mongoose");

const Spaceschema = new mongoose.Schema({
  satellites: {
    type: Number
  }
});

var Space = mongoose.model("nasasatellite", Spaceschema);

const Spaceschemabudget = new mongoose.Schema({
  budget: {
    type: Number
  }
});

var Spacebudget = mongoose.model("nasabudget", Spaceschemabudget);

const Spaceschemabudgeteurope = new mongoose.Schema({
  budget: {
    type: Number
  }
});

var Spacebudgeteurope = mongoose.model("europebudget", Spaceschemabudgeteurope);

//comparison dash
const IsroBudgetSchema = new mongoose.Schema({
  budget: {
    type: Number
  }
});

var IsroBudget = mongoose.model("isrobudgets", IsroBudgetSchema);

const NasaBudgetSchema = new mongoose.Schema({
  budget: {
    type: Number
  }
});

var NasaBudget = mongoose.model("nbudget", NasaBudgetSchema);

const RosBudgetSchema = new mongoose.Schema({
  budget: {
    type: Number
  }
});

var RosBudget = mongoose.model("rosbudgets", RosBudgetSchema);

module.exports = {
  Space: Space,
  Spacebudget: Spacebudget,
  Spacebudgeteurope: Spacebudgeteurope,
  NasaBudget: NasaBudget,
  IsroBudget: IsroBudget,
  RosBudget: RosBudget
};
