var materials = [];

var Builds = function () {

  this.spriteWidth = 16;
  this.spriteHeight = 16;

  this.tileScaleWidth = 32;
  this.tileScaleHeight = 32;

  this.img = new Image();
  this.img.src = 'img/main-tile.png';

  this.xPosition;
  this.yPosition;

  this.tileHealth = 100;

  this.materialType;

  this.draw = function () {

    ctx.drawImage(this.img, material[this.materialType].spriteValueX * this.spriteWidth, material[this.materialType].spriteValueY, this.spriteHeight, this.spriteWidth, this.xPosition, this.yPosition, this.tileScaleWidth, this.tileScaleHeight);

  }

  this.update = function (index) {

    if (this.tileHealth <= 0) {

      materials.splice(index, 1);

    }

  }

  this.collision = function () {

    if ((that.x + 32 >= this.xPosition) && (that.x <= this.xPosition + 32) && (that.y + 48 <= this.yPosition + 32) && (that.y + 48 >= this.yPosition)) {

      console.log("collision");

    }

  }

  this.collisionBullet = function (xpos, ypos, index) {

    if ((xpos + 6 >= this.xPosition) && (xpos <= this.xPosition + 32) && (ypos <= this.yPosition + 32) && (ypos + 4 >= this.yPosition)) {

      bullets.splice(index, 1);

      this.tileHealth -= 10;

    }

  }

}