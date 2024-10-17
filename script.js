function getWeather(city) {
    const location = city;
    const apiKey = "f05e21e7900f1f00b1e607f09312b69f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { temp, feels_like, humidity } = data.main;
            const description = data.weather[0].description;
            const cityName = data.name;
            const country = data.sys.country;
            const windSpeed = data.wind.speed;

            document.getElementById("city-name").textContent = `${cityName}, ${country}`;
            document.getElementById("description").textContent = `Weather: ${description}`;
            document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
            document.getElementById("feels-like").textContent = `Feels like: ${feels_like}°C`;
            document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
            document.getElementById("wind-speed").textContent = `Wind Speed: ${windSpeed} m/s`;

            console.log(`Weather data for ${cityName}, ${country}: Temp: ${temp}°C, Feels Like: ${feels_like}°C`);
            return { temp, feels_like, description, cityName, country, humidity, windSpeed };
        })
        .catch(error => {
            console.log(error);
            document.getElementById("weather").textContent = "Error fetching weather data. Please try again.";
        });
}

const search_button = document.getElementById('search-btn');
search_button.addEventListener('click', () => {
    document.getElementById('card').style.height = "max-content";
    let city = document.getElementById('input').value;
    getWeather(city);
});
