import React, { Component } from "react";
import axios from "axios";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLink
} from "react-icons/fa";

import "./Agency.css";

const databar = {
  labels: ["United States", "USSR/RUSSIA", "INDIA", "JAPAN", "ESA", "OTHERS"],
  datasets: [
    {
      label: "Success",
      backgroundColor: "rgba(107,180,212,1)",
      borderColor: "rgba(107,180,212,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [9, 8, 7, 6, 5, 4]
    },
    {
      label: "Failure",
      backgroundColor: "rgba(238,122,39,1)",
      borderColor: "rgba(238,122,39,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(55,259,132,0.4)",
      hoverBorderColor: "rgba(55,12,132,1)",
      data: [9, 8, 7, 6, 5, 4]
    }
  ]
};

const agency = {
  name: "NASA",
  full_name: "National Aeronautics and Space Administration",
  logo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
  est: "1958",
  country: "USA",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit. At quis risus sed vulputate odio ut enim. Commodo odio aenean sed adipiscing diam donec. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Fermentum dui faucibus in ornare. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Id porta nibh venenatis cras sed felis eget velit aliquet. Sit amet purus gravida quis blandit turpis cursus. Semper risus in hendrerit gravida rutrum quisque. Ullamcorper dignissim cras tincidunt lobortis. Semper eget duis at tellus at urna condimentum mattis pellentesque. Lobortis scelerisque fermentum dui faucibus in. Venenatis lectus magna fringilla urna porttitor rhoncus.",
  projects: [
    {
      id: "1",

      name: "Project Mercury",

      start_date: "1958",

      end_date: "63",

      description: "First U.S. manned spaceflight mission.",

      image_url:
        "https://images.squarespace-cdn.com/content/v1/526597fae4b08e763cbf0389/1552335856101-3JVDS19GFKQSMLZ9Q1S1/ke17ZwdGBToddI8pDm48kB80eW4KK5wgMfkTp6SjTNtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxkEDnlqEYEiGVDb0kl5jpOJsm5iyfgdjNZyk67t96-U_4JMfIDDY8RGcVnRlrKExA/Mercury-NASA-Mission-poster-thumbnail.jpg?format=750w"
    },

    {
      id: "2",

      name: "Project Gemini",

      start_date: "1961",

      end_date: "66",

      description:
        "Training for extravehicular activity, rendezvous and docking in preparation for the Apollo missions.",

      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Gemini_6_7.jpg"
    },

    {
      id: "3",

      name: "Project Apollo",

      start_date: "1961",

      end_date: "75",

      description:
        "The first and (so far)only exploration mission to successfully land humans on the moon.",

      image_url:
        "https://images.squarespace-cdn.com/content/v1/526597fae4b08e763cbf0389/1550179279894-ADBP11ZQP0ZOSHM3WMLD/ke17ZwdGBToddI8pDm48kD_8fTrfgG8p0_cDoTbpamQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2KMNufQQ-6LzTaq8C03wdVYUGhCLxLqtho8B4fMxfqTgfdurHDt8XjyaGurlSWvQe/Apollo-Poster.jpg?format=750w"
    },

    {
      id: "4",

      name: "Skylab",

      start_date: "1973",

      end_date: "79",

      description:
        "America's first and only independently built space station.",

      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/07/Skylab_%28SL-4%29.jpg"
    },

    {
      id: "5",

      name: "Space Shuttle Program",

      start_date: "1981",

      end_date: "2011",

      description: "Fleet of launchable and reusable space vehicles.",

      image_url:
        "https://media.wired.com/photos/5c6f46d93e8add2cdb917279/master/pass/spaceshuttle.jpg"
    },

    {
      id: "6",

      name: "International Space Station",

      start_date: "1993",

      end_date: "present",

      description:
        "Space research lab jointly managed by NASA and space agenices of Russia, Europe, Japan and Canada.",

      image_url: "https://cdn.mos.cms.futurecdn.net/Q8U3LcsBLsXX9mYksBx5eV.jpg"
    }
  ]
};

export default class Agency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agency: agency
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios
      .get(`http://localhost:3001/agency/${params.agencyname}`)
      .then(({ data: agencyData }) => {
        // console.log("====================spaceData===========", agencyData);

        this.setState({ agency: agencyData });
      });

    axios.get(`http://localhost:3001/nasaspacebudget`).then(res => {
      databar.datasets[0].data = res.data;
      console.log("=================res line data========", res.data);
      this.setState({
        databar1: databar
      });
    });

    console.log("inside cododo ");
    axios.get(`http://localhost:3001/europespacebudget`).then(res => {
      databar.datasets[1].data = res.data;
      console.log("=================res line europe data========", res.data);
      this.setState({
        databar1: databar
      });
    });
  }
  render() {
    return (
      <div class='container agency-wrapper'>
        <div class='links-wrapper'>
          <div class='row'>
            <div class='link-container col-md-12'>
              <a id='website' href={this.state.agency.website} target='_blank'>
                <FaLink />
              </a>
            </div>

            <div class='link-container col-md-12'>
              <a id='facebook' href={this.state.agency.fb} target='_blank'>
                <FaFacebookSquare />
              </a>
            </div>

            <div class='link-container col-md-12'>
              <a id='twitter' href={this.state.agency.twitter} target='_blank'>
                <FaTwitterSquare />
              </a>
            </div>

            <div class='link-container col-md-12'>
              <a id='instagram' href={this.state.agency.insta} target='_blank'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>{" "}
        {/*END .links-wrapper*/}
        <div></div> {/*END */}
        <div class='agency-main-info'>
          <div class='row'>
            <div class='col-md-3 logo-div'>
              <img class='agency-logo' src={this.state.agency.logo} />
            </div>
            <div class='col-md-9 agency-name-div'>
              <div class='fancy-underline'>
                <span class='agency-name'>{this.state.agency.name}</span>
              </div>{" "}
              {/*END */}
              <div>
                <span class='agency-full-name'>
                  {this.state.agency.full_name}
                </span>
              </div>{" "}
              {/*END */}
              <div class='agency-country-div'>
                <span>Country:</span>
                <span class='agency-country'> {this.state.agency.country}</span>
              </div>{" "}
              {/*END */}
            </div>{" "}
            {/*END .agency-name-div*/}
            <div class='agency-est-div col-md-3'>
              <div class='agency-country-div center'>
                <span>EST:</span>
                <span class='agency-country'> {this.state.agency.est}</span>
              </div>{" "}
              {/*END */}
            </div>{" "}
            {/*END .agency-est-div*/}
            <div class='agency-desc-div col-md-9'>
              <p>{this.state.agency.description}</p>
            </div>{" "}
            {/*END .agency-desc-div*/}
          </div>{" "}
          {/*END .row*/}
        </div>{" "}
        {/*END .agency-main-info*/}
        <div class='agency-projects-wapper'>
          <h3 class='agency-projects'>
            {this.state.agency.name + " Projects"}{" "}
          </h3>
          <div class='card-columns'>
            {this.state.agency.projects.map((value, index) => {
              return (
                <div class='card'>
                  <img class='card-img-top img-fluid' src={value.image_url} />
                  <div class='card-block'>
                    <a
                      class='card-title project-name'
                      data-toggle='collapse'
                      href={"#collapse" + value.id}
                      aria-expanded='false'
                      aria-controls='collapseExample'
                    >
                      {value.name}
                    </a>
                    <div class='collapse' id={"collapse" + value.id}>
                      <div class='project-description'>{value.description}</div>
                    </div>

                    <p class='card-text'>
                      <span class='project-duration'>
                        {value.start_date} - {value.end_date}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
        {/*END agency-projects-wapper*/}
        {/* END .agency-wrapper */}
      </div>
    );
  }
}
