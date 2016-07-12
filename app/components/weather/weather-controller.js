(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather.weather[0].description);
		var temp = toFahrenheit(weather.main.temp);
		var max = toFahrenheit(weather.main.temp_max);
		var min = toFahrenheit(weather.main.temp_min);
		$('#weather').append(`<h2>${weather.name}</h2><h3>Current Temp: ${temp}&deg<span id='temp-scale'>F</span></h3><p>H: ${max}&deg  L: ${min}&deg</p><h4> ${weather.weather[0].description}</h4>`)
		//What can you do with this weather object?
		$('#weather').on('click', 'h3',function(){
			debugger;
			var scale = $('#temp-scale').text()
			if(scale == 'F'){
				temp = (temp - 32) * 9/5;
				$('#temp-scale').text('C');
			}else if(scale == 'C'){
				 toFahrenheit(temp);
				$('#temp-scale').text('F');

			}
		})
	})

	function toFahrenheit(temp){
		var celsius = temp - 273.15
		console.log(celsius)
		var fahrenheit = celsius * 9 / 5 + 32;
		return Math.round(fahrenheit)
	}

	
	
	
	
	
}())
