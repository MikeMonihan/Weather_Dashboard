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
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=4056500cdd900cb3dd17564286a1df8d";
  
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

    temp.textContent = "Temp: " + city.current.temp + " ℉";

    wind.textContent = "Wind: " + city.current.wind_speed + " MPH";

    humid.textContent = "Humidity: " + city.current.humidity + " %";

    uv.textContent = "UV Index: " + city.current.uvi; 

    milliseconds = city.current.dt * 1000

    dateObject = new Date(milliseconds)

    humanDateFormat = dateObject.getUTCDate() 

    tOD.textContent = "(" + dateObject.getUTCMonth() + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ")";
  }


 cityForm.addEventListener("submit", formSubmitHandler);



