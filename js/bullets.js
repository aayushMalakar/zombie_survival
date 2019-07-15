var bullets = [];
var bulletOnclick = false;

var Bullet = function () {

  this.x;
  this.y;

  this.cosValue;
  this.sinValue;

  this.velocity;

  this.xRange = 200;
  this.xLeftRange = 200;

  this.yRange = 200;
  this.yUpRange = 200;

  this.mouseX;
  this.mouseY;

  this.width = 5;
  this.height = 5;

  this.init = function (playerX, playerY, cosR, sinR, mouseX, mouseY) {

    this.x = playerX;
    this.y = playerY;

    this.mouseX = mouseX;
    this.mouseY = mouseY;

    this.cosValue = cosR;
    this.sinValue = sinR;

    this.xRange = this.xRange + this.x;
    this.xLeftRange = this.x - this.xLeftRange;

    this.yRange = this.yRange + this.y;
    this.yUpRange = this.y - this.yUpRange;
  }

  this.update = function () {

    this.velocity = 10;

    this.x += (this.cosValue * this.velocity);
    this.y += (this.sinValue * this.velocity);

    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.width, this.height);

  }

}


function createBullet() {

  var bullet = new Bullet();
  bullets.push(bullet);

  bulletOnclick = true;

  ctx.save();
  ctx.translate(that.x, that.y);

  bullet.init(that.x, that.y, Math.cos(angleCalculation.rotationAngle), Math.sin(angleCalculation.rotationAngle), angleCalculation.mouseX, angleCalculation.mouseY);

  ctx.translate(-that.x, -that.y);
  ctx.restore();

}






