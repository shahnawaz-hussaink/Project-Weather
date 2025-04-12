let navCityName = document.getElementsByClassName("nav-city-name");
let temper = document.getElementById("temp-on-time");
let discrip = document.getElementById("description");

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let cityNameInput = document.getElementById("city-name").value.trim();
    if (!cityNameInput) return;

    let city = cityNameInput.charAt(0).toUpperCase() + cityNameInput.slice(1).toLowerCase();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=be84cad7ad901cc892741d4a2c42f68b&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Update city name everywhere
            for (let i = 0; i < navCityName.length; i++) {
                navCityName[i].textContent = `${data.name}, ${data.sys.country}`;
            }

            // Update temperature
            temper.textContent = `${Math.round(data.main.temp)}° C`;

            // Update weather description
            discrip.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            alert("City not found or API limit exceeded.");
        });
});
