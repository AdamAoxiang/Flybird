/* 天空对象 */
(function( Fly ) {

var Sky = function( config ) {
	this.ctx = config.ctx;
	this.img = config.img;
  this.imgW = this.img.width;
  this.imgH = this.img.height;
	this.x = config.x || 0;
  this.y = 0;
  
  this.speed = -0.1;
};

Sky.prototype = {
	constructor: Sky,

	draw: function( delta ) {
		this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);

    this.x += delta * this.speed;
    if(this.x <= -this.imgW) {
      this.x += this.imgW * 2;
    }
	}

};

Fly.Sky = Sky;
})(Fly);