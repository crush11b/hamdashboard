// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "KQ4EVK - FM17gj";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "FF0000",
    "Load Cfg",
    "",
    "1",
    "R"
  ],
  [
    "#2196f3",
    "CLUBLOG",
    "https://clublog.org/livestream/KQ4EVK",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "ISS Passes",
    "https://www.heavens-above.com/PassSummary.aspx?satid=25544&lat=37.4083&lng=-77.4591&loc=Unnamed&alt=0&tz=EST",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "Solar Conditions",
    "https://solar.w5mmw.net/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "PSK Reporter",
    "https://pskreporter.info/pskmap.html?preset&callsign=kq4evk&txrx=tx&timerange=900&distunit=miles&hideunrec=1&blankifnone=1&hidenight=1&showsnr=1&showlines=1&mapCenter=21.142679151889794,-38.46416127021992,3.56797574036891",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "APRS",
    "https://aprs.to/?center=37.4465,-77.4883&zoom=11",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "Hamclock",
    "http://192.168.0.104:8081/live.html",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "POTA",
    "https://pota.app/#/",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "SOTA",
    "https://sotawatch.sota.org.uk/en/1",
    1,
    "undefined"
  ],
  [
    "#2196f3",
    "Band Plan",
    "https://kd4atw.org/wp-content/uploads/2012/05/band_plan.png",
    1,
    "1"
  ],
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#6.89/37.412/-78.706",
    1,
    "R"
  ],
  [
    "#2196f3",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "Outlook",
    "https://www.weather.gov/media/akq/briefings/LatestBriefing.pdf",
    1,
    "R"
  ],
  [
    "#2196f3",
    "RADAR",
    "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOm51bGwsImNlbnRlciI6Wy05Ni42ODMsMzguMDIxXSwibG9jYXRpb24iOm51bGwsInpvb20iOjUuNDE5MTY1MzQ1MTU0NDQ3fSwiYW5pbWF0aW5nIjpmYWxzZSwiYmFzZSI6InN0YW5kYXJkIiwiYXJ0Y2MiOmZhbHNlLCJjb3VudHkiOmZhbHNlLCJjd2EiOmZhbHNlLCJyZmMiOmZhbHNlLCJzdGF0ZSI6ZmFsc2UsIm1lbnUiOnRydWUsInNob3J0RnVzZWRPbmx5IjpmYWxzZSwib3BhY2l0eSI6eyJhbGVydHMiOjAuOCwibG9jYWwiOjAuNiwibG9jYWxTdGF0aW9ucyI6MC44LCJuYXRpb25hbCI6MC42fX0%3D",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://ambientweather.net/dashboard/bea6b10a09ad231317312d829b55f271",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://www.ventusky.com/?p=37.84;-78.63;7&l=wind-10m",
    1,
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://www.amsat.org/feed/",
    60
  ],
  [
    "https://daily.hamweekly.com/atom.xml",
    120
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif"
  ],
  [
    "",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif"
  ],
  [
    "",
    "https://radar.weather.gov/ridge/standard/KAKQ_loop.gif"
  ],
  [
    "",
    "https://www.wpc.ncep.noaa.gov//noaa/noaa.gif",
    "http://origin.wpc.ncep.noaa.gov/basicwx/allfcsts_loop_ndfd.gif"
  ],
  [
    "",
    "https://www.weather.gov/images/akq/ghwo/ExcessiveRainfallDay1.jpg",
    "https://www.weather.gov/images/akq/ghwo/WindDay1.jpg",
    "https://www.weather.gov/images/akq/ghwo/FireWeatherDay1.jpg",
    "https://www.weather.gov/images/akq/ghwo/FrostFreezeDay1.jpg",
    "https://www.weather.gov/images/akq/ghwo/FogDay1.jpg",
    "https://www.weather.gov/images/akq/ghwo/SnowSleetDay1.jpg",
    "https://www.weather.gov/images/akq/ghwo/ExcessiveColdDay1.jpg"
  ],
  [
    "",
    "https://www.weather.gov/images/akq/ghwo/SevereThunderstormsDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/ExcessiveRainfallDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/WindDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/FireWeatherDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/FrostFreezeDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/FogDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/SnowSleetDay2.jpg",
    "https://www.weather.gov/images/akq/ghwo/ExcessiveColdDay2.jpg"
  ],
  [
    "",
    "https://www.wpc.ncep.noaa.gov/Prob_Precip/idss-map/mapgen.php?office=AKQ&ptype=prob_sn&summary=true&state=VA&pointpreferences=VA&product=expected&2024121123"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
  ],
  [
    "Kp Index Forecast",
    "https://spaceweather.gfz-potsdam.de/fileadmin/Kp-Forecast/KP_ENSEMBLE_LAST_PAGER_SWIFT.png"
  ],
  [
    "MUF",
    "https://prop.kc2g.com/renders/current/mufd-normal-now.svg"
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solar100sc.php",
    "https://www.hamqsl.com/solarpich.php"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  11200,
  10000,
  11000,
  10100,
  10200,
  10500,
  10300,
  10600,
  30400,
  60700,
  60900,
  10800
];

// CUT END