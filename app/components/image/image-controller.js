(function(){
	var image = new ImageService();
	image.getImage(function(image){
		console.log(image);
	$('#body').css({'background-image': `url(${image.url})`, 'background-size':'cover','background-repeat': 'no-repeat'});
	})

}())
