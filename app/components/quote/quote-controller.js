(function(){
	
	var inspiration = $('#quote')
	var quote = new QuoteService();

	quote.getQuote(function(quote){
		console.log(quote.quote)
		inspiration.append(`<h2 class="words"> ${quote.quote}</h2>`)
		$("#quote").attr('title', `${quote.author}`);

	})




	//Get your QuoteService
	
}())
