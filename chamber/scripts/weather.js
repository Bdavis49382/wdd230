const lat = 29.001616613928352;
const lon = 83.35072925944718;
const APIKey = "25a19134b69b0b7e9769a00f54a55b50";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;

const currentTemp = document.getElementById('temp');
const icon = document.getElementById('icon');
const description = document.getElementById('description');

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok)
            return await response.json();
        else
            throw Error(await response.text());
    }
    catch (error) {
        console.log(error);
    }
}

const data = await getData(WEATHER_URL);

currentTemp.innerHTML = data.main.temp;
icon.setAttribute('src',` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
description.textContent = data.weather[0].description

const forecast = await getData(FORECAST_URL);
console.log(forecast)
document.getElementById('forecast').textContent = forecast.list
    .slice(0,3)
    .map( item => `${Math.round(item.main.temp)}°`)
    .join(", ");
    