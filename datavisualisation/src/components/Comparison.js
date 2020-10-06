import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { HorizontalBar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

import "./comparison.css";

const horizontaldata = {
  labels: ["NASA", "CNSA", "ROSCOSMOS", "JAXA", "UKSA", "ISRO", "CSA"],
  datasets: [
    {
      label: "Number of Satellites",
      backgroundColor: [
        "rgb(128,0,0,0.9)",
        "rgb(128,0,0,0.8)",
        "rgb(128,0,0,0.7)",
        "rgb(128,0,0,0.6)",
        "rgb(128,0,0,0.5)",
        "rgb(128,0,0,0.4)",
        "rgb(128,0,0,0.3)"
      ],
      borderColor: [
        "rgb(128,0,0,0.9)",
        "rgb(128,0,0,0.8)",
        "rgb(128,0,0,0.7)",
        "rgb(128,0,0,0.6)",
        "rgb(128,0,0,0.5)",
        "rgb(128,0,0,0.4)",
        "rgb(128,0,0,0.3)"
      ],
      borderWidth: 1,
      hoverBackgroundColor: "rgb(250,218,94,0.9)",
      hoverBorderColor: "rgb(250,218,94)",
      data: [830, 280, 147, 75, 54, 54, 37],
      pointHoverBorderWidth: 100
    }
  ]
};

const doughnutdata = {
  labels: ["Commercial", "Civil", "Mixed uses", "Military", "Government"],
  datasets: [
    {
      // data: [846,145,279,302,385],
      data: [40, 10, 16, 15, 19],
      backgroundColor: ["#b24e55", "#893e75", "#5e3d70", "#95add5", "#61434d"],
      hoverBackgroundColor: [
        "#fada5e",
        "#fada5e",
        "#fada5e",
        "#fada5e",
        "#fada5e"
      ]
    }
  ]
};

const databar = {
  labels: ["NASA", "ISRO", "ROSCOSMOS", "ESA", "CNSA"],
  datasets: [
    {
      label: "Success",
      backgroundColor: [
        "rgba(35,106,161,1)",
        "rgba(70,130,180,0.6)",
        "rgba(70,130,180,0.6)",
        "rgba(70,130,180,0.6)",
        "rgba(70,130,180,0.6)"
      ],
      borderColor: "rgba(70,130,180,0.8)",
      borderWidth: 1,
      hoverBackgroundColor: [
        "rgba(35,106,161,1)",
        "rgba(70,130,180,1)",
        "rgba(70,130,180,1)",
        "rgba(70,130,180,1)",
        "rgba(70,130,180,1)"
      ],
      hoverBorderColor: "rgba(70,130,180)",
      data: [100, 50, 10, 55, 85, 0]
    },
    {
      label: "Failure",
      backgroundColor: [
        "rgba(205,92,92,1)",
        "rgba(205,92,92,0.6)",
        "rgba(205,92,92,0.6)",
        "rgba(205,92,92,0.6)",
        "rgba(205,92,92,0.6)"
      ],
      borderColor: "rgba(205,92,92,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(205,92,92,1)",
      hoverBorderColor: "rgba(205,92,92,1)",
      data: [40, 27, 40, 35, 39]
    }
  ]
};

let budgetCompData = {
  labels: ["2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "NASA",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(13,25,114,0.7)",
      borderColor: "rgba(13,25,114,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: [
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(9,31,105,1)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(9,31,105,1)"
      ],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1, 1, 1, 5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(13,25,114)",
      pointHoverBorderColor: "rgba(13,25,114)",
      pointHoverBorderWidth: [2, 2, 2, 5],
      pointRadius: 3,
      pointHitRadius: 6,
      data: []
    },
    {
      label: "ISRO",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(93,146,107,0.7)",
      borderColor: "rgba(93,146,107,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: [
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,100,11,1)"
      ],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1, 1, 1, 5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(93,146,107)",
      pointHoverBorderColor: "rgba(93,146,107)",
      pointHoverBorderWidth: [2, 2, 2, 5],
      pointRadius: 3,
      pointHitRadius: 6,
      data: []
    },
    {
      label: "ROSCOSMOS",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(129,129,129,0.7)",
      borderColor: "rgba(129,129,129,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: [
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,100,11,1)"
      ],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1, 1, 1, 5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(129,129,129)",
      pointHoverBorderColor: "rgba(129,129,129)",
      pointHoverBorderWidth: [2, 2, 2, 5],
      pointRadius: 3,
      pointHitRadius: 6,
      data: []
    },
    {
      label: "ESA",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(144,104,98,0.7)",
      borderColor: "rgba(144,104,98,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: [
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,100,11,1)"
      ],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1, 1, 1, 5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(144,104,98)",
      pointHoverBorderColor: "rgba(144,104,98)",
      pointHoverBorderWidth: [2, 2, 2, 5],
      pointRadius: 3,
      pointHitRadius: 6,
      data: [5000, 5800, 6200, 6406]
    },
    {
      label: "CNSA",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgb(210,136,136,0.7)",
      borderColor: "rgb(210,136,136,0.7)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: [
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(75,192,192,0.4)",
        "rgba(58,115,19,1)"
      ],
      pointBackgroundColor: "#fff",
      pointBorderWidth: [1, 1, 1, 5],
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(58,115,19)",
      pointHoverBorderColor: "rgb(210,136,136)",
      pointHoverBorderWidth: [2, 2, 2, 5],
      pointRadius: 3,
      pointHitRadius: 6,
      data: [7200, 7800, 8100, 8400]
    }
  ]
};

export default class Star extends Component {
  constructor(props) {
    super(props);
    this.background = "/img/comparison/background2.jpg";
    this.nasa = "/img/comparison/nasa.jpg";
    this.isro = "/img/comparison/isro.jpg";
    this.csa = "/img/comparison/csa.jpg";
    this.roscosmos = "/img/comparison/roscosmos.png";

    this.state = {
      data1: budgetCompData,
      databar1: databar,
      horizontaldata: horizontaldata,
      doughnutdata: doughnutdata,
      spacewalkData: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/nasabudget`).then(res => {
      console.log("res data is ", res.data);
      // budgetCompData.datasets[0].data = res.data[0];
      // console.log("=================nasa budget========", res.data);
      this.setState({
        spacewalkData: res.data
      });
    });

    axios.get(`http://localhost:3001/rosbudget`).then(res => {
      budgetCompData.datasets[1].data = res.data[0];

      console.log("=================ros budget========", res.data);
      this.setState({
        data1: budgetCompData
      });
    });

    axios.get(`http://localhost:3001/isrobudget`).then(res => {
      budgetCompData.datasets[2].data = res.data[0];

      console.log("=================isro budget========", res.data);
      this.setState({
        data1: budgetCompData
      });
    });
  }
  render() {
    let spacewalkData = {
      labels: [
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
      ],
      datasets: [
        {
          label: "NASA",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(99,43,124,0.6)",
          borderColor: "rgba(99,43,124,0.6)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: [
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,100,11,1)"
          ],
          pointBackgroundColor: "#fff",
          pointBorderWidth: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            5
          ],
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(99,43,124)",
          pointHoverBorderColor: "rgba(99,43,124)",
          pointHoverBorderWidth: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            5
          ],
          pointRadius: 2,
          pointHitRadius: 6,
          // data: [3,1,9,13,14,2,5,4,11,20,16,14,12,7,3,5,3,6,3,9,5,3]
          data: this.state.spacewalkData
        },

        {
          label: "ROSCOSMOS",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(58,115,19,0.6)",
          borderColor: "rgba(58,115,19,0.6)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: [
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,192,192,0.4)",
            "rgba(75,100,11,1)"
          ],
          pointBackgroundColor: "#fff",
          pointBorderWidth: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            5
          ],
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(58,115,19,0.8)",
          pointHoverBorderColor: "rgba(58,115,19,0.8)",
          pointHoverBorderWidth: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            5
          ],
          pointRadius: 2,
          pointHitRadius: 6,
          // data: [0,0,0,5,4,0,5,3,3,3,3,3,3,3,2,6,4,1,1,1,3,0]
          data: [
            0,
            0,
            0,
            5,
            9,
            9,
            14,
            17,
            20,
            23,
            26,
            29,
            32,
            35,
            37,
            43,
            47,
            48,
            49,
            50,
            53,
            53
          ]
        }
      ]
    };
    return (
      <div class='bod-dash'>
        <h1 class='dash-name '>Comparative Analysis of Space Agencies</h1>
        <hr class='my-4' />
        <div>
          <div class='row'>
            <div class='col-md-4 tilepad'>
              <div class=' pad '>
                <div class='dash-background'>
                  <Line
                    data={spacewalkData}
                    options={{
                      scales: {
                        xAxes: [
                          {
                            barThickness: 15, // number (pixels) or 'flex'
                            maxBarThickness: 15, // number (pixels)
                            gridLines: {
                              display: false
                            }
                          }
                        ]
                      },
                      yAxes: [
                        {
                          gridLines: {
                            display: false
                          }
                        }
                      ],
                      responsive: true,
                      maintainAspectRatio: true
                    }}
                  />
                  <div class='dash-text'>
                    Total spacewalks from 1998-2019: NASA vs ROS
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-4 tilepad'>
              <div class=' pad '>
                <div class='dash-background'>
                  <Bar
                    data={this.state.databar1}
                    options={{
                      scales: {
                        xAxes: [
                          {
                            barThickness: 20, // number (pixels) or 'flex'
                            maxBarThickness: 20, // number (pixels)
                            gridLines: {
                              display: false
                            }
                          }
                        ]
                      },
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true
                          },
                          gridLines: {
                            display: false
                          }
                        }
                      ],
                      responsive: true,
                      maintainAspectRatio: true
                    }}
                  />
                  <div class='dash-text'>
                    Total Successful & Failed Launches
                  </div>
                </div>
              </div>
            </div>

            <div class='col-md-4 tilepad'>
              <div class=' pad '>
                <div class='dash-background'>
                  <Line
                    data={this.state.data1}
                    options={{
                      scales: {
                        xAxes: [
                          {
                            barThickness: 15, // number (pixels) or 'flex'
                            maxBarThickness: 15, // number (pixels)
                            gridLines: {
                              display: false
                            }
                          }
                        ]
                      },
                      yAxes: [
                        {
                          gridLines: {
                            display: false
                          }
                        }
                      ],
                      responsive: true,
                      maintainAspectRatio: true
                    }}
                  />
                  <div class='dash-text'>
                    Budgets of Space Agencies 2016-2019{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-md-6 tilepad'>
              <div class=' pad '>
                <div class='dash-background'>
                  <HorizontalBar
                    data={horizontaldata}
                    width='300px'
                    height='120px'
                    options={{
                      scales: {
                        xAxes: [
                          {
                            barThickness: 15, // number (pixels) or 'flex'
                            maxBarThickness: 15, // number (pixels)
                            gridLines: {
                              display: false
                            }
                          }
                        ]
                      },
                      yAxes: [
                        {
                          gridLines: {
                            display: false
                          }
                        }
                      ],
                      responsive: true,
                      maintainAspectRatio: true
                    }}
                  />
                  <div class='dash-text'>
                    Space agencies with most active satellites in space
                  </div>
                </div>
              </div>
            </div>

            <div class='col-md-6 tilepad'>
              <div class=' pad '>
                <div class='dash-background'>
                  <Doughnut
                    data={doughnutdata}
                    width='300px'
                    height='120px'
                    options={{
                      responsive: true,
                      maintainAspectRatio: true,
                      cutoutPercentage: 60
                    }}
                  />

                  <div class='dash-text'>
                    Use of active satellites in percentage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*End .bod*/}
      </div>
    );
  }
}
