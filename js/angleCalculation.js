
var AngleCalculation = function () {

  this.mouseX;
  this.mouseY;

  this.opposite;
  this.adjacent;

  this.rotationAngle;

  this.updateRotation = function () {
    this.opposite = this.mouseY - that.y;
    this.adjacent = this.mouseX - that.x;
    this.rotationAngle = Math.atan2(this.opposite, this.adjacent);
  }

}

var angleCalculation = new AngleCalculation();

window.onmousemove = eventFire;

function eventFire(event) {

  angleCalculation.mouseX = event.clientX;
  angleCalculation.mouseY = event.clientY;

}