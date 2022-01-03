var cityForm = document.querySelector("#cityForm");
var pastCity = document.querySelector("#pastCity");
var cityName = document.querySelector("#city");
var weatherToday = document.querySelector("#weatherToday");
var fiveDay = document.querySelector("#fiveDay");
var searchCity = document.querySelector('#searchCity');
var searchCityA = document.querySelector('#searchCityAgain');
var tOD = document.querySelector('#tOD');
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humid = document.querySelector("#humid");
var uv = document.querySelector("#uv");


var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var city = cityName.value.trim();

  if (city) {
    getLocation(city);

    cityName.value = "";

  } else {
    alert("Please enter a city");
  }
};

var getLocation = function(city) {
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=4056500cdd900cb3dd17564286a1df8d";
  
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            //console.log(data);
            getWeather(data);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function(error) {
        alert("Unable to connect to Openweather");
      });
  };

  var getWeather = function(city) {
    var lat;
    var lon;
    if (city.length === 0) {
      Weather.textContent = "No cities found.";
      return;
    }  

    for (var i = 0; i < city.length; i++) {
    
    lat = city[i].lat;
    lon = city[i].lon;

    }

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=4056500cdd900cb3dd17564286a1df8d";
  
    // make a get request to url
     fetch(apiUrl)
     .then(function(response) {
       // request was successful
       if (response.ok) {
         console.log(response);
         response.json().then(function(data) {
           console.log(data);    
           displayWeather(data);
           displayFiveDay1(data);   
           displayFiveDay2(data);
           displayFiveDay3(data);
           displayFiveDay4(data);
           displayFiveDay5(data);
           setIcon(data);
         });
       } else {
         alert("Error: " + response.statusText);
       }
     })
     .catch(function(error) {
       alert("Unable to connect to Openweather");
     });

    for (var i = 0; i < city.length; i++) {
    searchCity.textContent = city[i].name;   
    searchCityA.textContent = city[i].name;  
    }
  }; 

  function displayWeather(city){
    
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/"+ city.current.weather[0].icon +"@2x.png";

    temp.textContent = "Temp: " + city.current.temp + " ℉";

    wind.textContent = "Wind: " + city.current.wind_speed + " MPH";

    humid.textContent = "Humidity: " + city.current.humidity + " %";

    uv.textContent = "UV Index: " + city.current.uvi; 

    milliseconds = city.current.dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    tOD.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
    
  }

  function displayFiveDay1(city){
    
    
    document.querySelector('#temp1').textContent = "Temp: " + city.daily[1].temp.day + " ℉";

    document.querySelector('#wind1').textContent = "Wind: " + city.daily[1].wind_speed + " MPH";

    document.querySelector('#humid1').textContent = "Humidity: " + city.daily[1].humidity + " %";

    milliseconds = city.daily[1].dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    head1.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
  }
  function displayFiveDay2(city){
    
    document.querySelector("#icon1").src = "https://openweathermap.org/img/wn/"+ city.daily[2].icon +"@2x.png"

    document.querySelector('#temp2').textContent = "Temp: " + city.daily[2].temp.day + " ℉";

    document.querySelector('#wind2').textContent = "Wind: " + city.daily[2].wind_speed + " MPH";

    document.querySelector('#humid2').textContent = "Humidity: " + city.daily[2].humidity + " %";

    milliseconds = city.daily[2].dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    head2.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
  }
  function displayFiveDay3(city){
    
    document.querySelector('#temp3').textContent = "Temp: " + city.daily[3].temp.day + " ℉";

    document.querySelector('#wind3').textContent = "Wind: " + city.daily[3].wind_speed + " MPH";

    document.querySelector('#humid3').textContent = "Humidity: " + city.daily[3].humidity + " %";

    milliseconds = city.daily[3].dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    head3.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
  }
  function displayFiveDay4(city){
    
    document.querySelector('#temp4').textContent = "Temp: " + city.daily[4].temp.day + " ℉";

    document.querySelector('#wind4').textContent = "Wind: " + city.daily[4].wind_speed + " MPH";

    document.querySelector('#humid4').textContent = "Humidity: " + city.daily[4].humidity + " %";

    milliseconds = city.daily[4].dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    head4.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
  }
  function displayFiveDay5(city){
    
    document.querySelector('#temp5').textContent = "Temp: " + city.daily[5].temp.day + " ℉";

    document.querySelector('#wind5').textContent = "Wind: " + city.daily[5].wind_speed + " MPH";

    document.querySelector('#humid5').textContent = "Humidity: " + city.daily[5].humidity + " %";

    milliseconds = city.daily[5].dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    head5.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
  }

  function setIcon(city){

    document.querySelector("#icon1").src = "https://openweathermap.org/img/wn/"+ city.daily[1].weather[0].icon +"@2x.png";

    document.querySelector("#icon2").src = "https://openweathermap.org/img/wn/"+ city.daily[2].weather[0].icon +"@2x.png";

    document.querySelector("#icon3").src = "https://openweathermap.org/img/wn/"+ city.daily[3].weather[0].icon +"@2x.png";

    document.querySelector("#icon4").src = "https://openweathermap.org/img/wn/"+ city.daily[4].weather[0].icon +"@2x.png";

    document.querySelector("#icon5").src = "https://openweathermap.org/img/wn/"+ city.daily[5].weather[0].icon +"@2x.png";

  }

 cityForm.addEventListener("submit", formSubmitHandler);



