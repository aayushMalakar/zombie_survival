var imageLoader = function () {

  thatImageLoader = this;

  this.images = {};
  this.numberOfImagesLoaded = 0;
  this.isLoaded = false;

  this.init = function () {

    this.loadImage('abandonedHouse', 'img/houses/abandonedHouse.png')
    this.loadImage('communityCenter', 'img/houses/Community_Center.png')
    this.loadImage('riverHouse', 'img/houses/riverHouse.png')
    this.loadImage('shop', 'img/houses/shop.png')
    this.loadImage('material', 'img/material.png')
    this.loadImage('bush', 'img/bush.png')
    this.loadImage('character', 'img/character.png')
    this.loadImage('energyBar', 'img/energyBar.png')
    this.loadImage('food', 'img/food.png')
    this.loadImage('furniture', 'img/furniture.png')
    this.loadImage('tileSheet', 'img/main-tile.png')
    this.loadImage('tree', 'img/tree2.png')
    this.loadImage('wallsAndFloorsTiles', 'img/wallsFloors.png')
    this.loadImage('weapons', 'img/weapons_sprite.png')

  }

  this.loadImage = function (identifier, source) {

    var image = new Image();
    image.src = source;

    image.onload = function () {
      thatImageLoader.numberOfImagesLoaded++;
    }

    this.images[identifier] = image;

  }

  this.check = function () {

    if (this.numberOfImagesLoaded == Object.keys(this.images).length) {

      this.isLoaded = true;

    }

  }


}