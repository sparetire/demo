$(function () {
	var btn = $('#btn');
	var file = $('#file');
	var upload = $('#upload');
	var form = $('#fm');

	file.click(function (event) {
		event.preventDefault();
		upload.click();
	});

	btn.click(function (event) {
		form.submit();
		return false;
	});

	form.submit(function (event) {
		$(document.body)
			.append($('<iframe id="tempfrm" name="tempfrm"></iframe>'));
		$(this)
			.attr('target', 'tempfrm');
		setTimeout(function () {
			$('#tempfrm')
				.remove();
		}, 3000);
	});

});

function sayHello(data) {
	console.log(data);
}