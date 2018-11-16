/*
function callbackfunction(resp) {

    if (resp.result === 'success') {
		console.log('yea')
    } else {
	    console.log(resp);
		$('#mc-embedded-subscribe-form #mce-error-response').show().html(resp.msg);
    }
	
}
*/

$('#mc-embedded-subscribe-form').ajaxChimp({
//    callback: callbackfunction
});