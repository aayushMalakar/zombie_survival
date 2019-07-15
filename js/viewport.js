var Viewport = function () {

  this.x;
  this.y;
  this.width;
  this.height;

  this.speed = 4;

  this.init = function (x, y, width, height) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

  this.update = function () {

    if (that.moveUp == true) {
      this.y -= this.speed;
    }

    if (that.moveDown == true) {
      this.y += this.speed;
    }

    if (that.moveLeft == true) {
      this.x -= this.speed;
    }

    if (that.moveRight == true) {
      this.x += this.speed;
    }

  }

}

var viewport = new Viewport();
viewport.init(0, 0, 600, 400);

