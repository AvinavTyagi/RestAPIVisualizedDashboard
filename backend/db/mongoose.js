var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://nachiket:nachiket@cmpe280-emqpv.mongodb.net/test?retryWrites=true&w=majority",{
    poolSize: 10
    // other options can go here
  },
  () => {
    console.log("connected to mongoDB");
  }
);

module.exports = { mongoose };
