(function(Fly) {

var Pipe = function( config ) {
	this.ctx = config.ctx;
	this.imgDown = config.imgDown;
	this.imgUp = config.imgUp;
	this.imgW = this.imgUp.width;
	this.imgH = this.imgUp.height;

	this.x = config.x;
	this.pipeTopY = 0;
	this.pipeDownY = 0;
	this.speed = -0.1;

	this.calcPipeHeight();
};

Pipe.prototype = {
	constructor: Pipe,

	draw: function( delta ) {
		this.ctx.drawImage(this.imgUp, this.x, this.pipeTopY, this.imgW, this.imgH);
		this.ctx.drawImage(this.imgDown, this.x, this.pipeDownY, this.imgW, this.imgH);
		this.ctx.rect(this.x, this.pipeTopY, this.imgW, this.imgH);
		this.ctx.rect(this.x, this.pipeDownY, this.imgW, this.imgH);

		this.x += this.speed * delta;
		if(this.x <= -this.imgW) {
			this.x += this.imgW * 3 * 6 ;
			this.calcPipeHeight();
		}
	},

	calcPipeHeight: function() {
		var pipeTopHeight = Math.random() * 200 + 50;
		this.pipeTopY = pipeTopHeight - this.imgH;
		this.pipeDownY = pipeTopHeight + 150;
	}
};

Fly.Pipe = Pipe;
})(Fly);