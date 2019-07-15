var weaponsOnMap = [];
var weaponSpawnCounter = 0;

var foodsOnMap = [];
var foodSpawnCounter = 0;

var GenerateItems = function () {

  thatGenerateWeapon = this;

  this.WeaponX = 10;
  this.WeaponY = 130;

  this.weaponWidth = 64;
  this.weaponHeight = 50;

  this.Weapontype = ['bat', 'm16', 'spas', 'pumpShotgun', 'katana', 'revolver', 'smg1', 'smg2', 'axe'];

  this.randomWeapon = Math.floor(Math.random() * 9) + 0;

  this.weaponCollision = false;

  this.foodX = 10;
  this.foodY = 170;

  this.foodWidth = 32;
  this.foodHeight = 32;

  this.foodSource = ['pizza', 'burger', 'fish', 'sushi', 'meat', 'beer', 'water', 'energyDrink', 'coffee'];

  this.randomFood = Math.floor(Math.random() * 8) + 0;

  this.foodCollision = false;

  this.drawWeapon = function () {

    ctx.drawImage(thatImageLoader.images['weapons'], weapon[this.Weapontype[this.randomWeapon]].weaponSpriteX, weapon['weaponSpriteY'], 70, 60, this.WeaponX, this.WeaponY, this.weaponWidth, this.weaponHeight);

    if (thatInventory.itemFull == false) {

      this.weaponCollision = playerCollision(that.x, that.y, that.width, that.height, this.WeaponX, this.WeaponY, this.weaponWidth, this.weaponHeight);

      if (this.weaponCollision == true) {

        thatInventory.items.push(this.Weapontype[this.randomWeapon]);

      }

    }

  }

  this.drawFood = function () {

    ctx.drawImage(thatImageLoader.images['food'], food[this.foodSource[this.randomFood]].ItemSpriteX, food[this.foodSource[this.randomFood]].ItemSpriteY, 16, 16, this.foodX, this.foodY, this.foodWidth, this.foodHeight);

    if (thatInventory.itemFull == false) {
      this.foodCollision = playerCollision(that.x, that.y, that.width, that.height, this.foodX, this.foodY, this.foodWidth, this.foodHeight);

      if (this.foodCollision == true) {

        if (thatInventory.items.length <= 4) {

          thatInventory.items.push(this.foodSource[this.randomFood]);

        }

      }

    }

  }

}

