module.exports.mars = function(req, res) {
  res.send({
    name: "Mars",
    imageName:
      "/img/planets/mars.jpg",
    minDistance: 55.7,
    maxDistance: 401,
    launchWindow: "6-8",
    daysToRevolve: 687,
    massComparison: 0.1,
    lengthHours: 24,
    lengthMinutes: 39,
    lengthSeconds: 35,
    avgTemperature: -63,
    windSpeed: 144,
    heightOfMountain: 22,

    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet",
    
  });
};

module.exports.moon = function(req, res) {
  res.send({
    name: "Moon",
    imageName:
      "/img/planets/moon.jpg",
    minDistance: 0.22,
    maxDistance: 0.25,
    launchWindow: 0.1,
    daysToRevolve: 29.5,
    massComparison: 0.01,
    lengthHours: 29,
    lengthMinutes: 30,
    lengthSeconds: 00,
    avgTemperature: -23,
    windSpeed: 0,
    heightOfMountain: 11,

    description:
      "The Moon is an astronomical body that orbits the Earth as its only permanent natural satellite. It is the fifth-largest satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits ",
    
  });
};

module.exports.jupiter = function(req, res) {
  res.send({
    name: "Jupiter",
    imageName:
      "/img/planets/jupiter.jpg",
    minDistance: 365,
    maxDistance: 601,
    launchWindow: "24-60",
    daysToRevolve: 4328,
    massComparison: 11,
    lengthHours: 9,
    lengthMinutes: 56,
    lengthSeconds: 30,
    avgTemperature: -145,
    windSpeed: 650,
    heightOfMountain: "0",

    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. It is named after the Roman god Jupiter",
    
  });
};

module.exports.saturn = function(req, res) {
  res.send({
    name: "Saturn",
    imageName:
      "/img/planets/saturn.jpg",
    minDistance: 1200,
    maxDistance: 1670,
    launchWindow: 38,
    daysToRevolve: 10751,
    massComparison: 95,
    lengthHours: 10,
    lengthMinutes: 41,
    lengthSeconds: 55,
    avgTemperature: -178,
    windSpeed: ">1600",
    heightOfMountain: "0",

    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System. It is a gas giant with an average radius about nine times that of Earth and is over 95 times more massive.Saturn is named after the Roman god of wealth and agriculture.",
    
  });
};

