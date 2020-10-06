import React, { Component } from "react";
import './Navbar.css';
import { IoIosRocket } from 'react-icons/io';
import { GiRocketFlight } from 'react-icons/gi';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="nav-wrapper">
        <div class="mynav">
          <div class="row nav-row">

            <div class="col-md-4">
              <a class="navbar-brand" href="http://localhost:3000/">
                <GiRocketFlight/>

                Lift-Off
              </a>
            </div>

            <div class="col-md-4">

            </div>

            <div class="col-md-4">

              <div class="row">

                <div class="col-sm-4">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPlanet" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Planets
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownPlanet">
                    <a class="dropdown-item" href="http://localhost:3000/planet/moon">Moon</a>
                    <a class="dropdown-item" href="http://localhost:3000/planet/mars">Mars</a>
                    <a class="dropdown-item" href="http://localhost:3000/planet/jupiter">Jupiter</a>
                    <a class="dropdown-item" href="http://localhost:3000/planet/saturn">Saturn</a>
                  </div>
                </div>

                <div class="col-sm-5">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAgency" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Space Agencies
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownAgency">
                    <a class="dropdown-item" href="http://localhost:3000/agency/nasa">NASA</a>
                    <a class="dropdown-item" href="http://localhost:3000/agency/ros">ROSCOSMOS</a>
                    <a class="dropdown-item" href="http://localhost:3000/agency/isro">ISRO</a>
                    <a class="dropdown-item" href="http://localhost:3000/agency/esa">ESA</a>
                  </div>
                </div>

                <div class="col-sm-3">
                  <a class="nav-link" href="http://localhost:3000/comparison" role="button">
                    Dashboard
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
