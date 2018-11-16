function mobileMenuActions() {
	
	$('.mobile__trigger').on('click tap', function(e){
		e.preventDefault();
		
		$(this).toggleClass('active');
		$('.nav-primary').toggleClass('active');
		
	});

}

mobileMenuActions();