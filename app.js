require("dotenv").config();
let CronJob = require("cron").CronJob;
let fetch = require("node-fetch");

async function getWeather() {
    let city = "Boston";
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
        );
        const data = await response.json();
        console.log(data.weather[0].description);
    } catch (error) {
        console.log(error);
    }
}

new CronJob(
    "* * * * * *",
    () => {
        getWeather();
    },
    null,
    true,
    "America/New_York"
);
