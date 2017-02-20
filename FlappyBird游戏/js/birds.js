(function( Fly ) {

var Bird = function( config ) {
	this.img = config.img;       
	this.imgW = this.img.width / 3;     
	this.imgH = this.img.height;      
	this.ctx = config.ctx;

	this.frameIndex = 0;             
	this.y = 100;                    
	this.x = 100;
	this.speed = 0;                 
	this.a = 0.0005;               
	this.maxAngle = 45;
  this.maxSpeed = 0.3;
  this.curAngle = 0;
};
Bird.prototype = {
	constructor: Bird,
	draw: function( delta ) {
    if(this.speed >= this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else if(this.speed <= -this.maxSpeed) {
      this.speed = -this.maxSpeed;
    }
    this.curAngle = this.speed / this.maxSpeed * this.maxAngle;
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(Fly.toRadian(this.curAngle));
		this.ctx.drawImage(this.img, this.imgW * this.frameIndex++, 0, this.imgW, this.imgH, -1/2*this.imgW, -1/2*this.imgH, this.imgW, this.imgH);
		this.frameIndex %= 3;
		this.speed += this.a * delta;
		this.y += this.speed * delta + 1/2 * this.a * Math.pow(delta, 2);
	},
	changeSpeed: function( speed ) {
		this.speed = speed;
	}
};

Fly.Bird = Bird;
})(Fly);