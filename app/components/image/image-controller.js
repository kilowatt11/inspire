(function(){
	var image = new ImageService();
	//Your ImageService is a global constructor function what can you do here if you new it up?
	image.getImage(function(image){
		console.log(image.url);
	$('#body').css({'background-image': `url(${image.url})`, 'background-size':'cover','background-repeat': 'no-repeat'});
	})

}())
