var zombies = [];

var zombieSpawnDelay = 0;

var zombieSpawner = 0;

var Zombie = function () {

  this.health;

  this.x = -15;
  this.y = Math.floor(Math.random() * 500);

  this.width = 30;
  this.height = 40;

  this.slowSpeedX = 0.3;
  this.fastSpeedX = 0.7;

  this.slowSpeedY = 0.3;
  this.fastSpeedY = 0.7;

  this.range = 40;

  this.draw = function () {

    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.width, this.height);

  }

  this.update = function () {

    var distanceX1 = that.x - (this.x + this.width);
    var distanceY1 = that.y - (this.y + this.height);

    var distanceX2 = (that.x + 40) - this.x;
    var distanceY2 = (that.y + 40) - this.y;

    if (this.x < that.x) {

      this.x += this.slowSpeedX;

      if (distanceX1 < 100 && distanceY1 < 50 && distanceY2 > -50) {

        this.x += this.fastSpeedX;

      }

    }

    if (that.y > this.y) {

      this.y += this.slowSpeedY;

      if (distanceX1 < 100 && distanceY1 < 50) {

        this.y += this.fastSpeedY;

      }

    }

    if (this.x > that.x) {

      this.x += -this.slowSpeedX;

      if (distanceX2 > -100 && distanceY1 < 50 && distanceY2 > -50) {

        this.x += -this.fastSpeedX;

      }

    }

    if (that.y < this.y) {

      this.y += -this.slowSpeedY;

      if (distanceX2 > -100 && distanceY2 > -50) {

        this.y += -this.fastSpeedY;

      }

    }

  }

  this.collison = function (bullet, index, bulletIndex) {

    if ((this.x + 30 >= bullet.x) && (this.x <= bullet.x + 54) && (this.y <= bullet.y + 5) && (this.y + 40 >= bullet.y)) {

      zombies.splice(index, 1);
      bullets.splice(bulletIndex, 1);

    }

  }

}