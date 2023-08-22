const weatherDescription = document.querySelector('.weather-description');

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'c4ad73b8aee76935aa88a7470e30940a';
const city = 'New York'; // Change this to the desired city

// Fetch weather data using the OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weather = data.weather[0].description;
        weatherDescription.textContent = `Current weather: ${weather}`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherDescription.textContent = 'Error fetching weather data';
    });
