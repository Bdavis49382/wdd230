const lat = 40.76535981464435;
const lon = -111.89150245722293;
const APIKey = "25a19134b69b0b7e9769a00f54a55b50";
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;

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

const forecast = await getData(FORECAST_URL);
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const days = forecast.list.slice(0,4)
    .map((day,i) => {
        return {
            temp: day.main.temp,
            humidity: day.main.humidity,
            day: i == 0 ? "Today" : daysOfTheWeek[(new Date().getDay() + i) % 7],
            color: i == 0 ? "accent" : "primary",
            src: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
            description: day.weather[0].description
            }
    })
    .map(day => 
        `<div class="card bg-${day.color}">
            <h2>${day.day} - ${day.temp.toFixed(0)}&deg;</h2>
            <img id="icon" src="${day.src}" alt="conditions icon">
            <p>${day.description}</p>
            <p>Humidity: ${day.humidity}</p>
        </div>`
    )
    .join("");
document.getElementById('weather-cards').innerHTML = days;

