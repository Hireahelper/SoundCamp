window.addEventListener('message', function(event) {
	if (event.origin !== "https://hireahelper.slack.com")
		return;
	
	if (event.data.code == "SCKeydown") {
		var input = $('#message-input');
		
		var e = $.Event("keydown");
		e.which = event.data.keyCode;
		e.keyCode = event.data.keyCode;
		e.shiftKey = false;
		e.altKey = false;
		e.ctrlKey = false;
		e.charCode = 0;	
		e.metaKey = false;
		e.type = "keydown";	
		input.trigger(e);
	}
});