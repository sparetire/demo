window.onload = function () {
	var baseTime = 0;
	var red = document.getElementById('red');
	var green = document.getElementById('green');

	red.ontouchstart = function (event) {
		var baseTime = (new Date()).getTime();
		var currentTime = (new Date()).getTime();
		console.log('red touch start: ' + (currentTime - baseTime));
	};
	red.ontouchend = function (event) {
		var currentTime = (new Date()).getTime();
		console.log('red touch end: ' + (currentTime - baseTime));
	};
	red.onclick = function (event) {
		var currentTime = (new Date()).getTime();
		console.log('red click: ' + (currentTime - baseTime));
	};

	green.ontouchstart = function (event) {
		// 因为touchstart会先于click触发，所以还没等green的click触发，green就不存在了，于是click触发在red上
		this.style.display = 'none';
		var baseTime = (new Date()).getTime();
		var currentTime = (new Date()).getTime();
		console.log('green touch start: ' + (currentTime - baseTime));
	};
	green.ontouchend = function (event) {
		var currentTime = (new Date()).getTime();
		console.log('green touch end: ' + (currentTime - baseTime));
	};
	green.onclick = function (event) {
		var currentTime = (new Date()).getTime();
		console.log('green click: ' + (currentTime - baseTime));
	};
};