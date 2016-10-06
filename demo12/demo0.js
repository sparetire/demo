$(function () {
	var form = $('#fm');
	var img = $('#display');
	form.change(function (event) {
		var files = event.target.files;
		var reader = new FileReader();
		reader.onerror = function () {
			console.log('error');
		};
		reader.onload = function () {
			img[0].src = reader.result;
		};
		if (/image/.test(files[0].type)) {
			reader.readAsDataURL(files[0]);
		}
	});
});