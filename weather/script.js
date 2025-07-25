const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "3c9a76dab3d75349f7340058b4805bb5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});



/*
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "FF8SM4OqLk583poZ7hG8Qh8bRIYUOuG6"; // Replace with your AccuWeather API key
    const api_url = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const language = "en-us"; // Update with your preferred language code

    // Get the location key
    const location_url = `${api_url}?q=${city}&apikey=${api_key}&language=${language}`;
    const location_data = await fetch(location_url).then(response => response.json());

    if (location_data.length === 0) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("Location not found");
        return;
    }

    const location_key = location_data[0].Key;
    const weather_url = `http://dataservice.accuweather.com/currentconditions/v1/${location_key}?apikey=${api_key}&language=${language}&details=true`;

    const weather_data = await fetch(weather_url).then(response => response.json());

    if (weather_data.length === 0) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("Weather data not found");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data[0].Temperature.Metric.Value)}°C`;
    description.innerHTML = `${weather_data[0].WeatherText}`;

    humidity.innerHTML = `${weather_data[0].RelativeHumidity}%`;
    wind_speed.innerHTML = `${weather_data[0].Wind.Speed.Metric.Value}Km/H`;

    // Map AccuWeather conditions to your own set of images
    // Modify this according to your image paths or structure
    switch (weather_data[0].WeatherText) {
        case 'Cloudy':
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";
            break;
    }

    console.log(weather_data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
*/
