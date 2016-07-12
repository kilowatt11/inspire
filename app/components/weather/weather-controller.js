(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather.weather[0].description);
		var temp = toFahrenheit(weather.main.temp);
		$('#weather').append(`<h2>${weather.name}</h2><h4> ${temp}&deg</h4><h4> ${weather.weather[0].description}</h4>`)
		//What can you do with this weather object?
	})

	function toFahrenheit(temp){
		var celsius = temp - 273.15
		console.log(celsius)
		var fahrenheit = celsius * 9 / 5 + 32;
		return Math.round(fahrenheit)
	}

	
	
	
	
	
}())
