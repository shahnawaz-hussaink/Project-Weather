let navCityName = document.getElementsByClassName("nav-city-name");
let temper = document.getElementById("temp-on-time");
let discrip = document.getElementById("description");

let city = "New Delhi";
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let cityName = document.getElementById("city-name").value;
    city = cityName;

    cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=be84cad7ad901cc892741d4a2c42f68b&units=metric`
    fetch(url)
        .then(Response => Response.json())
        .then( (data)=>{
            console.log(data.name);
            for (let i = 0; i < navCityName.length; i++) {
                navCityName[i].innerText = cityName + ", IND";
            }
            temper.innerText = data.main.temp + "°C";
            discrip.innerText = data.weather[0].description;

                });
})  
