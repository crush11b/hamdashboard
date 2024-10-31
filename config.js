const topBarCenterText = "KQ4EVK - FM17gj";

// Menu items
// Structure: [color code, menu text, target link, scale factor, side (optional: "R" for Right)]
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/KQ4EVK", "1.7"],
  ["2196F3", "CONTEST", "https://www.contestcalendar.com/fivewkcal.html", "1"], 
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "ISS Passes", "https://www.heavens-above.com/PassSummary.aspx?satid=25544&lat=37.4083&lng=-77.4591&loc=Unnamed&alt=0&tz=EST", "1"],
  ["2196F3", "PSK Reporter", "https://pskreporter.info/pskmap.html?preset&callsign=kq4evk&txrx=tx&timerange=900&distunit=miles&hideunrec=1&blankifnone=1&hidenight=1&showsnr=1&showlines=1&mapCenter=21.142679151889794,-38.46416127021992,3.56797574036891", "1"],
  ["2196F3", "APRS", "https://aprs.to/?center=37.4465,-77.4883&zoom=11", "1"],
  ["2196F3", "POTA", "https://pota.app/#/", "1"],
  ["2196F3", "SOTA", "https://sotawatch.sota.org.uk/en/1", "1"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#6.89/37.412/-78.706", "1", "R"],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3", "Outlook", "https://www.weather.gov/media/akq/briefings/LatestBriefing.pdf", "1", "R"], // Added missing comma here
  ["2196F3", "RADAR", "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOm51bGwsImNlbnRlciI6Wy05Ni42ODMsMzguMDIxXSwibG9jYXRpb24iOm51bGwsInpvb20iOjUuNDE5MTY1MzQ1MTU0NDQ3fSwiYW5pbWF0aW5nIjpmYWxzZSwiYmFzZSI6InN0YW5kYXJkIiwiYXJ0Y2MiOmZhbHNlLCJjb3VudHkiOmZhbHNlLCJjd2EiOmZhbHNlLCJyZmMiOmZhbHNlLCJzdGF0ZSI6ZmFsc2UsIm1lbnUiOnRydWUsInNob3J0RnVzZWRPbmx5IjpmYWxzZSwib3BhY2l0eSI6eyJhbGVydHMiOjAuOCwibG9jYWwiOjAuNiwibG9jYWxTdGF0aW9ucyI6MC44LCJuYXRpb25hbCI6MC42fX0%3D", "1", "R"],
  ["2196F3", "WEATHER", "https://ambientweather.net/dashboard/bea6b10a09ad231317312d829b55f271", "1", "R"],
  ["2196F3", "WINDS", "https://www.ventusky.com/?p=37.84;-78.63;7&l=wind-10m", "1", "R"],
];

// Dashboard items
// Structure: [Title, Image Source URL]
const aIMG = [
  ["", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  ["", "https://radar.weather.gov/ridge/standard/KAKQ_loop.gif"],
  ["", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif"],
  ["", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif"],
  ["", "https://www.weather.gov/images/akq/ghwo/SevereThunderstormsDay1.jpg", "https://www.weather.gov/images/akq/ghwo/ExcessiveRainfallDay1.jpg", "https://www.weather.gov/images/akq/ghwo/WindDay1.jpg", "https://www.weather.gov/images/akq/ghwo/FireWeatherDay1.jpg", "https://www.weather.gov/images/akq/ghwo/FrostFreezeDay1.jpg", "https://www.weather.gov/images/akq/ghwo/FogDay1.jpg", "https://www.weather.gov/images/akq/ghwo/SnowSleetDay1.jpg", "https://www.weather.gov/images/akq/ghwo/ExcessiveColdDay1.jpg"],
  ["", "https://www.weather.gov/images/akq/ghwo/SevereThunderstormsDay2.jpg", "https://www.weather.gov/images/akq/ghwo/ExcessiveRainfallDay2.jpg", "https://www.weather.gov/images/akq/ghwo/WindDay2.jpg", "https://www.weather.gov/images/akq/ghwo/FireWeatherDay2.jpg", "https://www.weather.gov/images/akq/ghwo/FrostFreezeDay2.jpg", "https://www.weather.gov/images/akq/ghwo/FogDay2.jpg", "https://www.weather.gov/images/akq/ghwo/SnowSleetDay2.jpg", "https://www.weather.gov/images/akq/ghwo/ExcessiveColdDay2.jpg"],
  ["", "https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png", "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png", "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png"],
  ["LIGHTNING", "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"],
  ["Kp Index Forecast", "https://spaceweather.gfz-potsdam.de/fileadmin/Kp-Forecast/KP_ENSEMBLE_LAST_PAGER_SWIFT.png"],
  ["WebSDR", "http://na5b.com:8901/"],
  ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  ["HF PROPAGATION", "https://www.hamqsl.com/solar101vhf.php", "https://www.hamqsl.com/solar100sc.php", "https://www.hamqsl.com/solarpich.php"]
];

// Image rotation intervals in milliseconds per tile
const tileDelay = [11200, 10000, 11000, 10100, 10200, 10500, 10300, 10600, 30400, 60700, 60900, 10800];
