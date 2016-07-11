function ImageService (){
	this.getImage =  function(callWhenDone){
				// ^^^^^^^ How do you use this?
		return $.get('http://www.splashbase.co/api/v1/images/random', function(response){
			console.log('Image Data:', response)
			callWhenDone(response)
			//What are you going to do with the image that comes back?
		})
	}
}
