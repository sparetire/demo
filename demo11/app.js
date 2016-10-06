const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer');
const router = require('koa-router')();
const serve = require('koa-static');
const app = new Koa();


router.post('/upload', multer({
		dest: path.resolve(__dirname, 'uploads/')
	}), function* (next) {
		console.log(this.req.files);
		this.body = '<script>window.top.sayHello("Hello")</script>';
		yield next;
	})
	.post('/test', bodyParser(), function* (next) {
		console.log(this.request.body);
		this.body = this.request.body;
		yield next;
	});

app.use(serve(path.resolve(__dirname, './public')))
	.use(router.routes())
	.use(router.allowedMethods());


app.listen(80);