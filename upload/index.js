const Koa = require('koa');
const router = require('koa-router')();
const multer = require('koa-multer');
const kstatic = require('koa-static');

const app = new Koa();
const upload = multer({
	dest: 'uploads/'
});

router.post('/upload', upload, function* (next) {
	this.body =
		'<script>window.top.sayHello("Hello")</script>';
});

app.use(kstatic('./public'))
	.use(router.routes());

app.listen(80);