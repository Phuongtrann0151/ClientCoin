$(document).ready(function() {
	$("body").keydown(function(event) {
		if(event.key==="Escape"||event.keyCode===27){
			$("button:contains('Close')").click();
		}
	});
});