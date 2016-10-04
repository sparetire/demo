var isAnimateComplete = true;
var lastScrollTop = 0;
var isShow = false;
$(function() {
	$('.to-top').click(function(event) {
		isAnimateComplete = false;
		lastScrollTop = $(document.body).scrollTop();
		$(document.body).animate({
			scrollTop: 0
		}, 400, function() {
			isAnimateComplete = true;
		});
	})
});

$(window).scroll(function(event) {
	var currentScrollTop = $(document.body).scrollTop();
	var toTop = $('.to-top');
	if (!isShow && currentScrollTop > 200) {
		isShow = true;
		// 显示按钮
		toTop.show().addClass('enter');
		// 用setTimeout不是很好,CSS3有个动画完成的事件,用这个比较好,这里为了演示方便就用setTimeout
		setTimeout(function() {
			toTop.removeClass('enter');
		}, 300);
	} else if (isShow && currentScrollTop < 200) {
		isShow = false;
		// 让按钮消失
		toTop.addClass('leave');
		setTimeout(function() {
			toTop.removeClass('leave').hide();
		}, 300);
	}
	if (!isAnimateComplete && lastScrollTop < currentScrollTop) {
		$(document.body).stop();
	}
	lastScrollTop = currentScrollTop;
});