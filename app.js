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

                })
        .catch(error => {
            alert("Your Internet Connection is Slow!");
        })


        let qt = document.getElementById("Quote");
        let urltwo = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random");

        fetch(urltwo)
            .then(response => response.json())
            .then((data) => {
                let parsedData = JSON.parse(data.contents); 
                qt.innerText = parsedData[0].q + "\n - " + parsedData[0].a ;
            })
            .catch(error => console.error("Error fetching the quote:", error));

        
            let t = document.getElementById("tim");
            let d = document.getElementById("dat");
            let urlThree = `https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata`;

            fetch(urlThree)
            .then(response => response.json())
            .then((data)=>{
                t.innerText = data.time;
                let [month, day, year] = data.date.split("/");
                d.innerText = `${day}/${month}/${year}`;
            })
        
})  
