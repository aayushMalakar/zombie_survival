
var CreateWorld = function () {

  thatMap = this;

  this.treeX;
  this.treeY;

  this.woodCollision = false;
  this.brickCollision = false;

  this.woodCollisionFarm = false;
  this.brickCollisionFarm = false;

  this.rows = 44;
  this.column = 32;
  this.tileSize = 32;

  this.roomRows = 18;
  this.roomColumn = 16

  this.tilePositionX;
  this.tilePositionY;

  this.tileValue;

  this.minViewX;
  this.maxViewX;
  this.minViewY;
  this.maxViewY;

  this.opacity = false;

  this.houseTopCollision = false
  this.isOutside = true;

  this.tileset = [

    33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 33, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36,

    45, 46, 54, 36, 49, 58, 36, 33, 36, 36, 36, 33, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 45, 46, 54, 36, 49, 58, 36, 33, 36, 36, 36, 36,

    52, 53, 54, 50, 53, 53, 36, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 52, 53, 54, 50, 53, 53, 36, 36, 36, 36, 36, 36,

    33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 33, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36,

    45, 46, 54, 36, 49, 58, 36, 33, 36, 36, 36, 33, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 45, 46, 54, 36, 49, 58, 36, 33, 36, 36, 36, 36,

    52, 53, 54, 50, 53, 53, 36, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 52, 53, 54, 50, 53, 53, 36, 36, 36, 36, 36, 36,

    33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 33, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36,

    45, 46, 54, 36, 49, 58, 36, 33, 36, 36, 36, 33, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 45, 46, 54, 36, 49, 58, 36, 33, 36, 36, 36, 36,

    52, 53, 54, 50, 53, 53, 36, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 52, 53, 54, 50, 53, 53, 36, 36, 36, 36, 36, 36,


    86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86,

    97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97,

    87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,

    97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97,

    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,


    36, 36, 36, 36, 36, 34, 36, 36, 36, 33, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 34, 36, 36, 36, 33, 36, 36, 36, 36,

    36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 33, 36, 36, 33, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 34, 36, 36, 36, 33, 36, 36, 36, 36,


    41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 36, 36, 36, 36, 36, 36, 36, 36, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40, 41, 40,


    54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54,

    54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54,

    54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54,

    54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54,

    54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 91, 92, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54,

    54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 91, 92, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54,


    36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 91, 92, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 91, 92,

    36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 91, 92, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 91, 92,


    91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92, 91, 92,

    93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94, 93, 94,

    98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98,


    149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149, 149,


    117, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116,

    117, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116,

    117, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116,

    117, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116, 116,


    120, 121, 121, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120, 120, 121, 121, 120, 120,

  ];

  this.enivronmentTile = [

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 79, 79, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 81, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 79, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

    80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,

  ];

  this.roomTile = [

    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,

    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,

    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,

    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,

    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,

    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,

  ]

  this.drawMap = function () {

    this.minViewX = Math.floor(viewport.x / this.tileSize);
    this.maxViewX = Math.ceil((viewport.x + viewport.width) / this.tileSize);
    this.minViewY = Math.floor(viewport.y / this.tileSize);
    this.maxViewY = Math.ceil((viewport.y + viewport.height) / this.tileSize);

    for (var i = 0; i < 32; i++) {

      for (var j = 0; j < 44; j++) {

        this.tileValue = this.tileset[i * this.rows + j];

        this.tilePositionX = j * this.tileSize;
        this.tilePositionY = i * this.tileSize;

        ctx.drawImage(imageLoader.images['tileSheet'], this.tileValue * 16, 0, 16, 16, this.tilePositionX, this.tilePositionY, this.tileSize, this.tileSize);
        // ctx.strokeRect(this.tilePositionX, this.tilePositionY, 32, 32);
      }

    }

  }

  this.drawEnvironment = function () {

    for (var i = 0; i < 32; i++) {

      for (var j = 0; j < 44; j++) {

        this.tileValue = this.enivronmentTile[i * this.rows + j];

        this.tilePositionX = j * this.tileSize;
        this.tilePositionY = i * this.tileSize;

        if (this.tileValue != 80) {

          ctx.drawImage(imageLoader.images['tileSheet'], this.tileValue * 16, 0, 16, 16, this.tilePositionX, this.tilePositionY, this.tileSize, this.tileSize);
          ctx.strokeRect(this.tilePositionX, this.tilePositionY, 32, 32);

          this.woodCollision = playerCollision(that.x, that.y, that.width, that.height, this.tilePositionX, this.tilePositionY, this.tileSize, this.tileSize);
          this.brickCollision = playerCollision(that.x, that.y, that.width, that.height, this.tilePositionX, this.tilePositionY, this.tileSize, this.tileSize);

          if ((that.x + 32 >= this.tilePositionX) && (that.x <= this.tilePositionX + 32) && (that.y + 48 <= this.tilePositionY + 32) && (that.y + 48 >= this.tilePositionY)) {

            if (this.tileValue == 79) {

              this.woodCollisionFarm = true;

            }

            if (this.tileValue == 81) {

              this.brickCollisionFarm = true;

            }

          }

          if (this.woodCollision || this.brickCollision) {

            if (that.y + 48 <= this.tilePositionY + 32 && that.y + 48 >= this.tilePositionY + 28) {

              that.moveUp = false;

            }

            if (that.y + 48 >= this.tilePositionY && that.y + 48 <= this.tilePositionY + 4) {

              that.moveDown = false;

            }

            if (that.x <= this.tilePositionX + 32 && that.x >= this.tilePositionX + 28) {

              that.moveLeft = false;

            }


            if (that.x + 32 >= this.tilePositionX && that.x + 32 <= this.tilePositionX + 4) {

              that.moveRight = false;

            }

          }

          if (this.tileValue == 79) {

            this.drawTree(this.tilePositionX, this.tilePositionY);

          }

        }

      }

    }

  }

  this.drawTree = function (xPos, yPos) {

    this.treeX = xPos - 32;
    this.treeY = yPos - 192 + 48;

    if ((that.x + 32 >= this.treeX) && (that.x <= this.treeX + 96) &&
      (that.y + 48 >= this.treeY) && (that.y <= this.treeY + 192 - 48)) {

      this.opacity = true;

    }
    else {

      this.opacity = false;

    }

    if (this.opacity == true) {

      ctx.globalAlpha = 0.5;
      ctx.drawImage(imageLoader.images['tree'], 0, 0, 48, 96, this.treeX, this.treeY, 96, 192);
      ctx.globalAlpha = 1;

    }
    else {

      ctx.drawImage(imageLoader.images['tree'], 0, 0, 48, 96, this.treeX, this.treeY, 96, 192);

    }

    this.opacity = false;

  }

  this.drawbush = function () {

    ctx.drawImage(imageLoader.images['bush'], bush['cherryBush'].spritePositionX, bush.spritePositionY, bush.spriteWidth, bush.spriteHeight, 800, 200, 72, 86);

  }

  this.drawHousesTop = function () {

    // if (viewport.x + viewport.width >= 500) {
    ctx.drawImage(imageLoader.images['communityCenter'], house['spritePositionX'], house['communityCenter'].spriteTopPositionY, house['communityCenter'].spriteWidthTop, house['communityCenter'].spriteHeightTop, 500, 0, house['scaleWidth'], house['communityCenter'].scaleTopHeight);

    // }
    ctx.drawImage(imageLoader.images['abandonedHouse'], house['spritePositionX'], house['abandonedHouse'].spriteTopPositionY, house['abandonedHouse'].spriteWidthTop, house['abandonedHouse'].spriteHeightTop, 500, 400, house['scaleWidth'], house['communityCenter'].scaleTopHeight);
    // ctx.drawImage(imageLoader.images['riverHouse'], house['spritePositionX'], house['riverHouse'].spriteTopPositionY, house['riverHouse'].spriteWidthTop, house['riverHouse'].spriteHeightTop, 1000, 300, house['scaleWidth'], house['communityCenter'].scaleTopHeight);
    // ctx.drawImage(imageLoader.images['shop'], house['spritePositionX'], house['shop'].spriteTopPositionY, house['shop'].spriteWidthTop, house['shop'].spriteHeightTop, 1000, 300, house['scaleWidth'], house['shop'].scaleTopHeight);

    this.houseTopCollision = collision(that.x, that.y, that.width, that.height, 500, 200, house['scaleWidth'], house['communityCenter'].scaleBottomHeight);

  }

  this.drawHousesBottom = function () {

    ctx.drawImage(imageLoader.images['communityCenter'], 0, 324, 576, 156, 500, 200, 350, 100);

    ctx.drawImage(imageLoader.images['communityCenter'], house['spritePositionX'], house['communityCenter'].spriteBottomPositionY, house['communityCenter'].spriteWidthBottom, house['communityCenter'].spriteHeightBottom, 500, 200, house['scaleWidth'], house['communityCenter'].scaleBottomHeight);
    ctx.drawImage(imageLoader.images['abandonedHouse'], house['spritePositionX'], house['abandonedHouse'].spriteBottomPositionY, house['abandonedHouse'].spriteWidthBottom, house['abandonedHouse'].spriteHeightBottom, 500, 600, house['scaleWidth'], house['communityCenter'].scaleBottomHeight);
    // ctx.drawImage(imageLoader.images['riverHouse'], house['spritePositionX'], house['riverHouse'].spriteBottomPositionY, house['riverHouse'].spriteWidthBottom, house['riverHouse'].spriteHeightBottom, 1000, 500, house['scaleWidth'], house['communityCenter'].scaleBottomHeight);
    // ctx.drawImage(imageLoader.images['shop'], house['spritePositionX'], house['shop'].spriteBottomPositionY, house['shop'].spriteWidthBottom, house['shop'].spriteHeightBottom, 1000, 500, house['scaleWidth'], house['shop'].scaleBottomHeight);

    this.isOutside = collision(that.x, that.y, that.width, that.height, 500, 200, house['scaleWidth'], house['communityCenter'].scaleBottomHeight);

    // if ((that.x + 32 >= 10 + 110) && (that.x <= 10 + 190) && (that.y <= 60 + 300) && (that.y + 48 >= 60)) {

    //   if (that.y == 60 + 220) {
    //     this.outside = false;
    //   }

    // }

  }

  this.drawRoom = function () {

    for (var i = 0; i < this.roomColumn; i++) {

      for (var j = 0; j < this.roomRows; j++) {

        this.tileValue = this.roomTile[i * this.roomRows + j];

        this.tilePositionX = j * this.tileSize;
        this.tilePositionY = i * this.tileSize;

        ctx.drawImage(imageLoader.images['wallsAndFloorsTiles'], this.tileValue * 16, 0, 16, 16, this.tilePositionX, this.tilePositionY, this.tileSize, this.tileSize);

      }

    }

  }

  this.drawHouseItem = function () {

    ctx.drawImage(imageLoader.images['furniture'], furnitures['cabinet'].spritePositionX, furnitures['cabinet'].spritePositionY, furnitures['cabinet'].spriteWidth, furnitures['cabinet'].spriteHeight, 10, 120, 68, 56);
    ctx.drawImage(imageLoader.images['furniture'], furnitures['snooker'].spritePositionX, furnitures['snooker'].spritePositionY, furnitures['snooker'].spriteWidth, furnitures['snooker'].spriteHeight, 150, 120, 128, 56);

    if ((that.x + 32 >= 10) && (that.x <= 10 + furnitures['cabinet'].spriteWidth) && (that.y <= 120 + furnitures['cabinet'].spriteHeight) && (that.y + 48 >= 120)) {
      thatInventory.showStorage = true;
      this.drawStorage();
    }

  }

  this.drawStorage = function () {

    for (var i = 0; i < 9; i++) {
      ctx.strokeStyle = 'red';
      ctx.strokeRect(65 * i, 20, 64, 50);



      if (angleCalculation.mouseX >= 65 * i && angleCalculation.mouseX <= 65 * i + 64 && angleCalculation.mouseY >= 20 && angleCalculation.mouseY <= 20 + 50) {

        if (thatInventory.manipulateInventory == true) {
          thatInventory.mainStorage.push(thatInventory.itemSelected);
          thatInventory.itemSelected = '';
          thatInventory.manipulateInventory = false;
          thatInventory.removeItem();
        }

        thatInventory.storageCollisionIndex = i;

      }

    }

    for (var i = 0; i < thatInventory.mainStorage.length; i++) {
      if (thatInventory.mainStorage.length > 0) {

        if (Object.keys(weapon).indexOf(thatInventory.mainStorage[i]) > -1) {
          ctx.drawImage(thatImageLoader.images['weapons'], weapon[thatInventory.mainStorage[i]].weaponSpriteX, weapon['weaponSpriteY'], 70, 60, 65 * i, 20, 64, 50);
        }
        else {
          ctx.drawImage(thatImageLoader.images['food'], food[thatInventory.mainStorage[i]].ItemSpriteX, food[thatInventory.mainStorage[i]].ItemSpriteY, 16, 16, 65 * i, 20, 32, 32);
        }

      }

    }

  }

}


var createWorld = new CreateWorld();