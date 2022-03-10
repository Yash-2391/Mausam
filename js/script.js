let weather = {
    "apikey": "f1c8085997d036a354564705e3e5425d",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.apikey).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
         const { name } = data;
         const { icon,description}= data.weather[0];
         const { temp,humidity }= data.main;
         const { speed }= data.wind;
         console.log(name,icon,description,temp,humidity,speed);
         document.querySelector(".city").innerText= "Weather in " + name;
         document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + "@2x.png"
         document.querySelector(".temp").innerText= (Math.floor(temp)-273) + "°C";
         document.querySelector(".description").innerText= description;
         document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
         document.querySelector(".wind").innerText="Wind Speed: "+speed+"m/s";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};


document.querySelector(".search").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup",function(){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("bhuj");