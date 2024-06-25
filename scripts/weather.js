const lat = 43.82513981339878;
const lon = -111.79044608420426;
const APIKey = "25a19134b69b0b7e9769a00f54a55b50";
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;

const currentTemp = document.getElementById('temp');
const icon = document.getElementById('icon');
const description = document.getElementById('description');

async function getCurrentWeather() {
    try {
        const response = await fetch(URL);
        if (response.ok)
            return await response.json();
        else
            throw Error(await response.text());
    }
    catch (error) {
        console.log(error);
    }
}

const data = await getCurrentWeather();
currentTemp.innerHTML = data.main.temp;
icon.setAttribute('src',` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
description.textContent = data.weather[0].description



