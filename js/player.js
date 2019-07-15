
var Player = function () {

  that = this;

  this.x = viewport.width * 0.5;
  this.y = viewport.height * 0.5;

  this.width = 32;
  this.height = 48;

  this.healthColor = ['#02bc06', '#7aa006', '#9b8907', '#884d04', '#782504'];
  this.health = 60;
  this.damage = 50;
  this.health = this.health - this.damage;

  this.woodOverlay = false;
  this.brickOverlay = false;
  this.metalOverlay = false;

  this.animationdelay = 6;

  this.moveUpSprite = 0;
  this.counterUp = 0;

  this.moveDownSprite = 0;
  this.counterDown = 0;

  this.moveLeftSprite = 0;
  this.counterLeft = 0;

  this.moveRightSprite = 0;
  this.counterRight = 0;

  this.moveUp = false;
  this.moveDown = false;
  this.moveLeft = false;
  this.moveRight = false;

  this.speed = 4;

  this.spriteX = 0;;

  this.draw = function () {
    ctx.drawImage(thatImageLoader.images['character'], this.spriteX, 0, 16, 31, this.x, this.y, this.width, this.height);

    ctx.drawImage(thatImageLoader.images['energyBar'], 0, 0, 35, 201, 1300, 600, 20, 100);

    // ctx.fillStyle = '#02bc06';
    // ctx.fillRect(1305, 637, 10, 60);
  }

  this.update = function () {


    if (this.health >= 50) {

      ctx.fillStyle = this.healthColor[0];
      ctx.fillRect(1305, 637 + this.damage, 10, this.health);

    }
    if (this.health >= 30 && this.health < 50) {

      ctx.fillStyle = this.healthColor[1];
      ctx.fillRect(1305, 637 + this.damage, 10, this.health);

    }

    if (this.health >= 20 && this.health < 30) {

      ctx.fillStyle = this.healthColor[2];
      ctx.fillRect(1305, 637 + this.damage, 10, this.health);

    }

    if (this.health >= 10 && this.health < 20) {

      ctx.fillStyle = this.healthColor[3];
      ctx.fillRect(1305, 637 + this.damage, 10, this.health);

    }

    if (this.health >= 0 && this.health < 10) {

      ctx.fillStyle = this.healthColor[4];
      ctx.fillRect(1305, 637 + this.damage, 10, this.health);

    }

    if (this.moveUp == true) {
      this.y -= this.speed;
    }

    if (this.moveDown == true) {
      this.y += this.speed;
    }

    if (this.moveLeft == true) {
      this.x -= this.speed;
    }

    if (this.moveRight == true) {
      this.x += this.speed;
    }

  }

  this.animate = function () {

    if (this.moveUp) {

      this.counterUp++;

      if (this.counterUp == this.animationdelay) {

        this.moveUpSprite++;

        if (this.moveUpSprite == 1) {
          this.spriteX = 125;
        }

        if (this.moveUpSprite == 2) {
          this.spriteX = 141;
        }

        if (this.moveUpSprite == 3) {
          this.spriteX = 156;
        }

        if (this.moveUpSprite == 4) {
          this.spriteX = 174;
          this.moveUpSprite = 0;
        }

        this.counterUp = 0;

      }

    }

    if (this.moveDown) {

      this.counterDown++;

      if (this.counterDown == this.animationdelay) {

        this.moveDownSprite++;

        if (this.moveDownSprite == 1) {
          this.spriteX = 15;
        }

        if (this.moveDownSprite == 2) {
          this.spriteX = 46;
          this.moveDownSprite = 0;
        }

        this.counterDown = 0;

      }

    }

    if (this.moveLeft) {

      this.counterLeft++;

      if (this.counterLeft == this.animationdelay) {

        this.moveLeftSprite++;

        if (this.moveLeftSprite == 1) {
          this.spriteX = 125;
        }

        if (this.moveLeftSprite == 2) {
          this.spriteX = 141;
        }

        if (this.moveLeftSprite == 3) {
          this.spriteX = 156;
        }

        if (this.moveLeftSprite == 4) {
          this.spriteX = 174;
          this.moveLeftSprite = 0;
        }

        this.counterLeft = 0;

      }

    }

    if (this.moveRight) {

      this.counterRight++;

      if (this.counterRight == this.animationdelay) {

        this.moveRightSprite++;

        if (this.moveRightSprite == 1) {
          this.spriteX = 62;
        }

        if (this.moveRightSprite == 2) {
          this.spriteX = 78;
        }

        if (this.moveRightSprite == 3) {
          this.spriteX = 94;
        }

        if (this.moveRightSprite == 4) {
          this.spriteX = 110;
          this.moveRightSprite = 0;
        }

        this.counterRight = 0;

      }

    }


  }

  this.materialOverlay = function () {

    if (this.woodOverlay == true) {

      ctx.globalAlpha = 0.7;
      ctx.drawImage(thatImageLoader.images['tileSheet'], 16 * 83, 0, 16, 16, this.x + 32, this.y + 10, 32, 32);
      ctx.globalAlpha = 1;

    }

    if (this.brickOverlay == true) {

      ctx.globalAlpha = 0.7;
      ctx.drawImage(thatImageLoader.images['tileSheet'], 16 * 82, 0, 16, 16, this.x + 32, this.y + 10, 32, 32);
      ctx.globalAlpha = 1;

    }

    if (this.metalOverlay == true) {

      ctx.globalAlpha = 0.7;
      ctx.drawImage(thatImageLoader.images['tileSheet'], 16 * 85, 0, 16, 16, this.x + 32, this.y + 10, 32, 32);
      ctx.globalAlpha = 1;

    }

  }

  this.move = function (e) {

    if (e.isComposing || e.keyCode === 87) {

      that.moveUp = true;

      thatMap.woodCollisionFarm = false;
      thatMap.brickCollisionFarm = false;

    }

    if (e.isComposing || e.keyCode === 83) {

      that.moveDown = true;

      thatMap.woodCollisionFarm = false;
      thatMap.brickCollisionFarm = false;

    }

    if (e.isComposing || e.keyCode === 65) {

      that.moveLeft = true;

      thatMap.woodCollisionFarm = false;
      thatMap.brickCollisionFarm = false;

    }

    if (e.isComposing || e.keyCode === 68) {

      that.moveRight = true;

      thatMap.woodCollisionFarm = false;
      thatMap.brickCollisionFarm = false;

    }

  }

  this.stop = function (e) {

    if (e.isComposing || e.keyCode === 87) {

      that.moveUp = false;

    }

    if (e.isComposing || e.keyCode === 83) {

      that.moveDown = false;

    }

    if (e.isComposing || e.keyCode === 65) {

      that.moveLeft = false;

    }

    if (e.isComposing || e.keyCode === 68) {

      that.moveRight = false;

    }

  }

}

var player = new Player();
