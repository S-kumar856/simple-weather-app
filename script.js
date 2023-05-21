
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "9fb0eb71bcmshb7ff21bdcb7ba38p18be45jsna30b0d4698d9",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };  
    const getWeather=(city)=>{
        cityName.innerHTML=city

    
        fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
        .then(result => result.json())
        .then((result)=>{
            console.log(result)
        // cloud_pct.innerHTML = result.cloud_pct;
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
    })
    .catch(err => console.error(err));

    }

    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        getWeather(city.value)
    })
    getWeather("Hyderabad")

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }





