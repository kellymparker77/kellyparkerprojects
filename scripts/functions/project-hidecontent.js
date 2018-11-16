function lg_hidetext() {
	
	$('.entry-content').addClass('hide');
	
}

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 200) {
    
        $('.entry-content').addClass('faded');
        
    } else {

	    $('.entry-content').removeClass('faded');

    }

});
