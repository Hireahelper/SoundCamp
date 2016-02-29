
var queue = [];
function Inject(filename) {
	if (queue.length == 0) {
		queue[0] = filename;
		Process();
	} else {
		queue[queue.length] = filename;
	}
}

function Process() {
	var filename = queue.splice(0,1)[0];
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(filename);
	s.onload = function() {
		if (queue.length > 0)
			Process();
	};
	(document.head || document.documentElement).appendChild(s);
}

Inject('jquery-1.7.1.min.js');
Inject('pagecontent.js');