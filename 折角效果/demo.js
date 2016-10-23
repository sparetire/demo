window.onload = function () {
	var layer = document.getElementById('image-layer');
	layer.onclick = function (event) {
		this.className = 'layer';
	};
	// 注意，这个事件是一个属性过渡完就触发一个，所以如果过渡多个属性则触发多次
	layer.addEventListener('transitionend', function (event) {
		console.log(event.target);
		if (this.className === 'layer') {
			this.style.display = 'none';
		}
	}, false);
};