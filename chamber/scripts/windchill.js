const degrees = Number(document.getElementById('temp').textContent)
const windSpeed = Number(document.getElementById('wind-speed').textContent)
const windChill = document.getElementById('wind-chill')

// Only apply windchill if temp and windspeed are in these ranges.
if (degrees <= 50 && windSpeed > 3) {
    windChill.textContent = Math.round(100 * (35.74 + (degrees * .6215) - (35.75 * Math.pow(windSpeed,.16)) + (.4275 * degrees * Math.pow(windSpeed,.16)))) / 100
}
