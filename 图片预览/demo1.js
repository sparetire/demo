$(function () {
	var form = $('#fm');
	var img = $('#display');
	form.change(function (event) {
		var files = event.target.files;
		var url = URL.createObjectURL(files[0]);
		img[0].src = url;
	});
});