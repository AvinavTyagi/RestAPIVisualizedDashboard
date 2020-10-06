import React, { Component } from "react";
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="homepage-wrapper">
        <div class="banner-wrapper">
          <div class="banner background-tint">
            <div class="name-div">
              <div class="fancy-border">
                <h1 class="name">Lift Off</h1>
              </div>
            </div>
          </div>
        </div> {/*End .banner-wrapper*/}


        <div class="plantes-div">
          <div class="container">

            <h2 class="section-title">Explore Planets</h2>
            <div class="row">

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="http://localhost:3000/planet/moon">
                    <img class="planet-tile-img" src="/img/planet-tiles/moon.jpg"/>
                  </a>
                </div>
              </div>

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="http://localhost:3000/planet/mars">
                    <img class="planet-tile-img" src="/img/planet-tiles/mars.jpg"/>
                  </a>
                </div>
              </div>

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="http://localhost:3000/planet/jupiter">
                    <img class="planet-tile-img" src="/img/planet-tiles/jupiter.jpg"/>
                  </a>
                </div>
              </div>

              <div class="planet-wrapper col-md-3">
                <div class="planet-tile">
                  <a class="planet-link" href="http://localhost:3000/planet/saturn">
                    <img class="planet-tile-img" src="/img/planet-tiles/saturn.jpg"/>
                  </a>
                </div>
              </div>

            </div> {/*End Row*/}
          </div>
        </div> {/*end .planet-wrapper*/}

        <div class="agency-div">
          <div class="container">

            <h2 class="section-title">Explore Agencies</h2>
            <div class="row">

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/nasa">
                    <img class="agency-tile-img" src="/img/agency/nasa.png"/>
                  </a>
                </div>
              </div>

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/ros">
                    <img class="agency-tile-img" src="/img/agency/ros.png"/>
                  </a>
                </div>
              </div>

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/isro">
                    <img class="agency-tile-img" src="/img/agency/isro.svg"/>
                  </a>
                </div>
              </div>

              <div class="col-md-3 agency-wrap">
                <div class="agency-tile">
                  <a class="agency-link" href="http://localhost:3000/agency/esa">
                    <img class="agency-tile-img" src="/img/agency/esa.jpg"/>
                  </a>
                </div>
              </div>

            </div> {/*end .row*/}
          </div>
        </div> {/*end .agency-div*/}

        <div class="comparison-div">
          <div>
            <div class="row">

              <div class="col-md-6 comparison-left">
                <h2 class="section-title">Comparison</h2>
                <p class="description">Space agencies are located all over the world, and some of them have been making significant progress when it comes to outer space and space exploration.
                 Nowadays, every space agency has their own web portal where they provide information related to their space expeditions and other historical details about themselves. 
                 For space enthusiasts it is a cumbersome task to go to the webpage of every agency to gather information or to do comparisons. 
                 Lift-off provides accurate, up-to-date information related to space agencies located across the globe on a single platform. View a
                 a comparative analysis of the past and recent activities of the space agencies here.
</p>

                <a class="mybtn" href="http://localhost:3000/comparison">EXPLORE THE DASHBOARD</a>

              </div>

              <div class="col-md-6 comparison-right">
                <img class="image-right" src="/img/astronaut.png"/>
              </div>
            </div>
        </div>

        </div>
      </div>
    );
  }
}
