(function(){
	var image = new ImageService();
	image.getImage(function(image){
		console.log(image);
		image = JSON.parse(image);
	$('#body').css({'background-image': `url(${image.url})`, 'background-size':'cover','background-repeat': 'no-repeat'});
	})

}())
