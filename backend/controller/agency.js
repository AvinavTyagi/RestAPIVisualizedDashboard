module.exports.nasa = function(req, res) {
  res.send({
    name: "NASA",
    full_name: "National Aeronautics and Space Administration",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png",
    est: "1958",
    country: "USA",
    insta: "https://www.instagram.com/nasa/?hl=en",
    fb: "https://www.facebook.com/NASA/",
    twitter:
      "https://twitter.com/NASA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    website: "https://www.nasa.gov/",
    description:
      "The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research.NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science.Since its establishment, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle. NASA is supporting the International Space Station and is overseeing the development of the Orion Multi-Purpose Crew Vehicle, the Space Launch System and Commercial Crew vehicles.",
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

        image_url:
          "https://cdn.mos.cms.futurecdn.net/Q8U3LcsBLsXX9mYksBx5eV.jpg"
      }
    ]
  });
};

module.exports.esa = function(req, res) {
  res.send({
    name: "ESA",
    full_name: "European Space Agency",
    logo: "https://cdn.mos.cms.futurecdn.net/vKSpQKzkckQur3uhDR4NPK-320-80.jpg",
    est: "1975",
    country: "EUR",
    insta: "https://www.instagram.com/europeanspaceagency/?hl=en",
    fb: "https://www.facebook.com/EuropeanSpaceAgency/",
    twitter:
      "https://twitter.com/esa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    website: "https://www.esa.int/",
    description:
      "The European Space Agency (ESA) is an intergovernmental organisation of 22 member states dedicated to the exploration of space. Established in 1975 and headquartered in Paris, ESA has a worldwide staff of about 2,200 in 2018 and an annual budget of about €5.72 billion (~US$6.43 billion) in 2019.ESA's space flight programme includes human spaceflight (mainly through participation in the International Space Station program); the launch and operation of unmanned exploration missions to other planets and the Moon; Earth observation, science and telecommunication; designing launch vehicles; and maintaining a major spaceport, the Guiana Space Centre at Kourou, French Guiana. ",
    projects: [
      {
        id: "1",

        name: "Project Swarm",

        start_date: "22 November 2013",

        end_date: "November 2017",

        description:
          "The overall objective of the Swarm mission is to build on the experience from the CHAMP missions and to provide the best ever survey of the geomagnetic field (multi-point measurements) and its temporal evolution, to gain new insights into the Earth system by improving our understanding of the Earth's interior and climate.",

        image_url:
          "http://www.esa.int/var/esa/storage/images/esa_multimedia/videos/2013/10/swarm_esa_s_magnetic_field_mission_vnr/13368355-2-eng-GB/Swarm_ESA_s_magnetic_field_mission_VNR_card_medium.jpg"
      },

      {
        id: "2",

        name: "Project Envisat",

        start_date: "1 March 2002",

        end_date: "9 May 2012",

        description:
          'Envisat ("Environmental Satellite") is a large inactive Earth-observing satellite which is still in orbit. Operated by the European Space Agency (ESA), it was the world\'s largest civilian Earth observation satellite.',

        image_url:
          "http://www.un-spider.org/sites/default/files/styles/downscale_to_676w_cut_to_273h/public/esa%20screen.png?itok=-u92ZRkv"
      },

      {
        id: "3",

        name: "State Ocean Circulation Explorer",

        start_date: "17 March 2009",

        end_date: "March 2013",

        description:
          "The Steady-State Ocean Circulation Explorer (GOCE) was the first of ESA's Living Planet Programme satellites intended to map in unprecedented detail the Earth's gravity field. The spacecraft's primary instrumentation was a highly sensitive gravity gradiometer consisting of three pairs of accelerometers which measured gravitational gradients along three orthogonal axes.",

        image_url: "https://media.sciencephoto.com/image/c0110200/800wm"
      },

      {
        id: "4",

        name: "Herschel Space Observatory",

        start_date: "14 May 2009",

        end_date: "2013",

        description:
          "The Herschel Space Observatory was a space observatory built and operated by the European Space Agency (ESA). It was active from 2009 to 2013, and was the largest infrared telescope ever launched, carrying a 3.5-metre (11.5 ft) mirror and instruments sensitive to the far infrared and submillimetre wavebands (55–672 µm). Herschel was the fourth and final cornerstone mission in the Horizon 2000 programme, following SOHO/Cluster II, XMM-Newton and Rosetta. NASA is a partner in the Herschel mission, with US participants contributing to the mission; providing mission-enabling instrument technology.",

        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/0/07/Skylab_%28SL-4%29.jpg"
      },
      {
        id: "5",

        name: "Rosetta",

        start_date: "2 March 2004",

        end_date: "2016",

        description:
          "Rosetta was a space probe built by the European Space Agency launched on 2 March 2004. Along with Philae, its lander module, Rosetta performed a detailed study of comet 67P/Churyumov–Gerasimenko (67P).",

        image_url:
          "https://d.newsweek.com/en/full/283922/11-12-14-rosetta-1.jpg"
      }
    ]
  });
};

module.exports.isro = function(req, res) {
  res.send({
    name: "ISRO",
    full_name: "Indian Space Research Organisation",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg",
    est: "1969",
    country: "IND",
    insta: "https://www.instagram.com/isro.in/?hl=en",
    fb: "https://www.facebook.com/ISRO/",
    twitter:
      "https://twitter.com/isro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    website: "https://www.isro.gov.in/",
    description:
      'The Indian Space Research Organisation is the space agency of the Government of India headquartered in the city of Bengaluru. Its vision is to "harness space technology for national development while pursuing space science research & planetary exploration". The Indian National Committee for Space Research (INCOSPAR) was established in the tenure of Jawaharlal Nehru under the Department of Atomic Energy (DAE) in 1962, with the urging of scientist Vikram Sarabhai recognizing the need in space research. INCOSPAR grew and became ISRO in 1969,also under the DAE in 1972, Government of India setup a Space Commission and the Department of Space (DOS),bringing ISRO under the DOS.',
    projects: [
      {
        id: "1",

        name: "Chandrayaan 1",

        start_date: "22 October 2008",

        end_date: "28 August 2009",

        description:
          "Chandrayaan-1 was India's first lunar probe. It was launched by the Indian Space Research Organisations in October 2008, and operated until August 2009. The mission included a lunar orbiter and an impactor. The mission was a major boost to India's space program, as India researched and developed its own technology in order to explore the Moon. The vehicle was successfully inserted into lunar orbit on 8 November 2008.",

        image_url:
          "https://media.istockphoto.com/photos/satellite-in-space-picture-id498697432?k=6&m=498697432&s=612x612&w=0&h=Ei0RW_9j4iRN8XeqzsS1T1Z5JHI-g3ELYsq05_xBvgw="
      },

      {
        id: "2",

        name: "Chandrayaan 2",

        start_date: "22 July 2019",

        end_date: "Ongoing (Communication with lander lost)",

        description:
          "Chandrayaan-2 was launched from the second launch pad at Satish Dhawan Space Centre on 22 July 2019 at 2.43 PM IST (09:13 UTC) to the Moon by a Geosynchronous Satellite Launch Vehicle Mark III (GSLV Mk III). The planned orbit has a perigee of 169.7 km and an apogee of 45475 km. It consists of a lunar orbiter, lander and rover, all developed in India. The main scientific objective is to map the location and abundance of lunar water.",

        image_url:
          "https://www.eco-business.com/media/cache/f8/22/f8223aab1ed0d045d5ada757218c257c.jpg"
      },

      {
        id: "3",

        name: "Mars Orbiter Mission 1 ( Mangalyaan)",

        start_date: "5 November 2013",

        end_date: "Ongoing",

        description:
          "Mars Orbiter Mission, also called Mangalyaan, is a spacecraft orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by the Indian Space Research Organisation (ISRO). It is India's first interplanetary mission and ISRO has become the fourth space agency to reach Mars, after the Soviet space program, NASA, and the European Space Agency. India is the first Asian nation to reach Mars orbit, and the first nation in the world to do so in its first attempt.",

        image_url:
          "https://futurism.com/wp-content/uploads/2017/12/nasa-600x315.jpg"
      },
      {
        id: "4",

        name: "ASTROSAT",

        start_date: "28 September 2015",

        end_date: "Ongoing",

        description:
          "ASTROSAT is the first dedicated Indian Astronomy satellite mission launched by ISRO on 28 September 2015, which will be helpful in enabling multi-wavelength observations of the celestial bodies and cosmic sources in X-ray and UV spectral bands simultaneously. The scientific payloads cover the Visible (3500–6000 Å...), UV (1300–op Å...), soft and hard X-ray regimes (0.5–8 keV; 3–80 keV). The uniqueness of ASTROSAT lie in its wide spectral coverage extending over visible, UV, soft and hard X-ray regions.",
        image_url:
          "http://www.tech-faq.com/wp-content/uploads/2009/02/where-to-see-free-satellite-images.jpg"
      },

      {
        id: "5",

        name: "Mars Orbiter Mission 2 ( Mangalyaan)",

        start_date: "Estimated 2024",

        end_date: "To be decided",

        description:
          "Mars Orbiter Mission 2, also called Mangalyaan 2, is India's second interplanetary mission planned for launch to Mars by the Indian Space Research Organisation (ISRO). As per some reports emerged, the mission was to be an orbiter to Mars proposed for 2024.The orbiter will use aero-braking to lower its initial apoapsis and enter into an orbit more suitable for observations.",

        image_url:
          "https://image.winudf.com/v2/image/Y29tLm5hbWljLnVuZXMuZnJlZXNhdGVsbGl0ZWludGVybmV0X3NjcmVlbl8wX29tZjRrMGJq/screen-0.jpg?fakeurl=1&type=.jpg"
      }
    ]
  });
};

module.exports.roscosmos = function(req, res) {
  res.send({
    name: "ROSCOSMOS",
    full_name: "Russian Space Agency",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Roscosmos_logo_en.svg/571px-Roscosmos_logo_en.svg.png",
    est: "1956",
    country: "RUSSIA",
    insta: "https://www.instagram.com/roscosmosofficial/?hl=en",
    fb: "https://www.facebook.com/Roscosmos/",
    twitter:
      "https://twitter.com/roscosmos?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    website: "http://en.roscosmos.ru/",
    description:
      "The Roscosmos State Corporation for Space Activities, commonly known as Roscosmos, is a state corporation responsible for the wide range and types of space flights and cosmonautics programs for the Russian Federation.Originally part of the Federal Space Agency, the corporation evolved and consolidated itself to the national state corporation on 28 December 2015 through a presidential decree.Before 1992, Roscosmos was a part of the Russian Aviation and Space Agency.The headquarters of Roscosmos are located in Moscow, while the main Mission Control space center site is in the nearby city of Korolyov as well as the Yuri Gagarin Cosmonaut Training Center located in Star City of Moscow Oblast. The launch facilities used are Baikonur Cosmodrome in Kazakhstan (with most launches taking place there, both manned and unmanned), and Vostochny Cosmodrome being built in the Russian Far East in Amur Oblast.",
    projects: [
      {
        id: "1",

        name: "Vostok 1",

        start_date: "April, 1961",

        end_date: "April, 1961",

        description:
          "Vostok 1 was the first spaceflight of the Vostok programme and the first crewed spaceflight in history. The Vostok 3KA space capsule was launched from Baikonur Cosmodrome on April 12, 1961, with Soviet cosmonaut Yuri Gagarin aboard, making him the first human to cross into outer space.",

        image_url:
          "https://wallpapermemory.com/uploads/807/satellite-background-hd-1680x1050-47129.jpg"
      },

      {
        id: "2",

        name: "Vostok 2",

        start_date: "6 August 1961",

        end_date: "7 August 1961",

        description:
          "Vostok 2 was a Soviet space mission which carried cosmonaut Gherman Titov into orbit for a full day on August 6, 1961 to study the effects of a more prolonged period of weightlessness on the human body.",

        image_url:
          "https://farm3.static.flickr.com/2605/4169934109_bddb51ba1a.jpg"
      },

      {
        id: "3",

        name: "Soyuz 1",

        start_date: "23 April 1967",

        end_date: "24 April 1967",

        description:
          "Soyuz 1 was a manned spaceflight of the Soviet space program. Launched into orbit on 23 April 1967 carrying cosmonaut Colonel Vladimir Komarov, Soyuz 1 was the first crewed flight of the Soyuz spacecraft. The flight was plagued with technical issues, and Komarov was killed when the descent module crashed into the ground due to a parachute failure. ",

        image_url:
          "http://www.papercraftsquare.com/wp-content/uploads/2016/04/Soyuz-1-Spacecraft-Paper-Model.jpg"
      },
      {
        id: "4",

        name: "Soyuz TM-2",

        start_date: "5 February 1987",

        end_date: "30 July 1987",

        description:
          "Soyuz TM-2 was the spacecraft used to launch a long duration crew to the Soviet space station Mir, which was unmanned at the time. TM-2 was launched in February 1987, and it was first manned spaceflight of the Soyuz-TM spacecraft, and the second manned spaceflight to Mir (the first being Soyuz T-15). ",

        image_url:
          "https://cdn.images.express.co.uk/img/dynamic/109/590x/Sat-717318.jpg"
      },

      {
        id: "5",

        name: "Soyuz T-15",

        start_date: "13 March 1986",

        end_date: "16 July 1986",

        description:
          "Soyuz T-15 was a manned mission to the Mir and Salyut 7 space stations and was part of the Soyuz programme. It marked the final flight of the Soyuz-T spacecraft, the third generation Soyuz spacecraft, which had been in service for seven years from 1979 to 1986. This mission marked the first time that a spacecraft visited, and docked with, two space stations in the same mission.",

        image_url: "https://i.ytimg.com/vi/ZtrNmvrLO0M/maxresdefault.jpg"
      }
    ]
  });
};
