var Inventory = function () {

  thatInventory = this;

  this.mainStorage = [],
    this.showStorage = false;

  this.storageCollisionIndex;

  this.items = ['spas', 'm16'];
  this.itemSelected;
  this.itemvalue = 0;
  this.itemFull = false;
  this.maxItems = 4;

  this.buildActivate = false;

  this.healActivate = false;

  this.weapon = false;

  this.manipulateInventory = false;

  this.materialType;

  this.draw = function () {

    //checks if the item slot is full or not
    if (this.items.length == this.maxItems) {

      this.itemFull = true;

    } else {

      this.itemFull = false;

    }

    for (var i = 0; i <= 5; i++) {

      if (this.items[i]) {

        if (Object.keys(weapon).indexOf(this.items[i]) > -1) {

          if (this.itemSelected == this.items[i] && this.itemvalue == i) {

            this.weapon = true;
            this.healActivate = false;

            ctx.fillStyle = weapon[this.items[i]].color;
            ctx.fillRect(80 * (i + 1), 590, 74, 70);

            if (angleCalculation.mouseX >= 80 * (i + 1) && angleCalculation.mouseX <= 80 * (i + 1) + 70 && angleCalculation.mouseY >= 590 && angleCalculation.mouseY <= 590 + 74) {
              this.manipulateInventory = true;
            }

            if (this.manipulateInventory == true) {
              ctx.drawImage(thatImageLoader.images['weapons'], weapon[this.items[i]].weaponSpriteX, weapon['weaponSpriteY'], 70, 60, angleCalculation.mouseX - (70 * 0.5), angleCalculation.mouseY - (74 * 0.5), 64, 50);
            }
            else {
              ctx.drawImage(thatImageLoader.images['weapons'], weapon[this.items[i]].weaponSpriteX, weapon['weaponSpriteY'], 70, 60, 80 * (i + 1), 600, 64, 50);

            }

          }
          else {

            ctx.fillStyle = weapon[this.items[i]].color;
            ctx.fillRect(80 * (i + 1), 600, 64, 50);

            ctx.drawImage(thatImageLoader.images['weapons'], weapon[this.items[i]].weaponSpriteX, weapon['weaponSpriteY'], 70, 60, 80 * (i + 1), 600, 64, 50);

          }

        }

        if (Object.keys(food).indexOf(this.items[i]) > -1) {

          if (this.itemSelected == this.items[i] && this.itemvalue == i) {

            this.weapon = false;
            this.healActivate = true;

            ctx.fillStyle = 'tomato';
            ctx.fillRect(80 * (i + 1), 590, 74, 70);

            if (angleCalculation.mouseX >= 80 * (i + 1) && angleCalculation.mouseX <= 80 * (i + 1) + 70 && angleCalculation.mouseY >= 590 && angleCalculation.mouseY <= 590 + 74) {
              this.manipulateInventory = true;
            }

            if (this.manipulateInventory == true) {
              ctx.drawImage(thatImageLoader.images['food'], food[this.items[i]].ItemSpriteX, food[this.items[i]].ItemSpriteY, 16, 16, angleCalculation.mouseX - (70 * 0.5), angleCalculation.mouseY - (74 * 0.5), 32, 32);
            }
            else {
              ctx.drawImage(thatImageLoader.images['food'], food[this.items[i]].ItemSpriteX, food[this.items[i]].ItemSpriteY, 16, 16, 86 * (i + 1), 600, 32, 32);
            }

          }
          else {

            ctx.fillStyle = 'tomato';
            ctx.fillRect(80 * (i + 1), 600, 64, 50);

            ctx.drawImage(thatImageLoader.images['food'], food[this.items[i]].ItemSpriteX, food[this.items[i]].ItemSpriteY, 16, 16, 90 * (i + 1), 600, 32, 32);

          }

        }

      }
      else {

        ctx.strokeStyle = 'rgba(212, 208, 208, 1)';
        ctx.strokeRect(80 * (i + 1), 600, 64, 50);

      }

    }

  }

  this.removeItem = function () {

    this.items.splice(this.itemvalue, 1);

  }

}

var inventory = new Inventory();
