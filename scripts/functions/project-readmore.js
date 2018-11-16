function lg_readmore() {
	
	$('.project__more, .fulltext__closer').on('click tap', function(e){
		
		e.preventDefault();
		$('.entry-content').toggleClass('faded');
		$('.entry__fulltext').toggleClass('show');
		$('.project__media').toggleClass('soft');
				
	});
	
}

lg_readmore();