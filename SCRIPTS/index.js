$.ajax({
    type:"GET",
    url:"https://api.openweathermap.org/data/2.5/weather?q=" + plant.origin + "&appid=0c8a911e5c7f8e5a03991afe2075de21",
    success: function(data){
      temperature = data 
      console.log(temperature);
    }
  }).done(function(){
    $(currentChild).find("#currentTemp").text("OriginTemp: " + Math.round(temperature.main.temp- 273) + "°C");
  })