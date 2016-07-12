(function(){
	
	var inspiration = $('#quote')
	var quote = new QuoteService();

	quote.getQuote(function(quote){
		console.log(quote.quote)
		inspiration.append(`<h4 class="words"> ${quote.quote}</h4>`)
		$("#quote").attr('title', `${quote.author}`);

	})




	//Get your QuoteService
	
}())
