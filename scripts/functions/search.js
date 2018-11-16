function searchTrigger() {
	
	$('.menu-search').on('click', function(){
		$('#modal-search').fadeToggle(0);
		$('#modal-search input[type="text"]').focus();
	});
	
}

searchTrigger();


$(document).on("ready", function() {
	
	$('body').on("click", '.hair-modal-closer, .modal__closer, .close__modal', function(e) {
		e.preventDefault();
		$('.hair-modal-wrap').hide();
		$('html, body').removeClass('no-scroll');

	});
	
});