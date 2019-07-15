function control(e) {

  if (e.keyCode === KEY_W || e.keyCode === KEY_S || e.keyCode === KEY_A || e.keyCode === KEY_D) {

    player.move(e)

  }



  if (e.keyCode === KEY_ONE || e.keyCode === KEY_TWO || e.keyCode === KEY_THREE) {

    thatInventory.buildActivate = true;

    thatInventory.healActivate = false;

    if (e.keyCode === KEY_ONE) {

      thatInventory.materialType = 'wood';

      that.woodOverlay = true;
      that.brickOverlay = false;
      that.metalOverlay = false;

    }

    if (e.keyCode === KEY_TWO) {

      thatInventory.materialType = 'brick';

      that.brickOverlay = true;
      that.woodOverlay = false;
      that.metalOverlay = false;

    }

    if (e.keyCode === KEY_THREE) {

      thatInventory.materialType = 'metal';

      that.metalOverlay = true;
      that.brickOverlay = false;
      that.woodOverlay = false;

    }


  }



  if (e.keyCode === KEY_Q || e.keyCode === KEY_E) {

    that.woodOverlay = false;
    that.brickOverlay = false;
    that.metalOverlay = false;

    if (e.keyCode === KEY_Q) {

      if (thatInventory.itemvalue >= 0 && thatInventory.itemvalue <= thatInventory.items.length) {

        if (thatInventory.itemvalue != 0) {

          thatInventory.itemvalue--;

        }

      }

    }

    if (e.keyCode === KEY_E) {

      if (thatInventory.itemvalue >= 0 && thatInventory.itemvalue < thatInventory.items.length) {

        thatInventory.itemvalue++;

      }

    }

    thatInventory.itemSelected = thatInventory.items[thatInventory.itemvalue];

  }



  if (e.keyCode === KEY_SPACE) {


    if (thatInventory.healActivate == true) {

      if (Object.keys(food).indexOf(thatInventory.itemSelected) > -1) {
        that.damage -= food[thatInventory.itemSelected].energy;
        that.health += food[thatInventory.itemSelected].energy;
        if (that.health >= 60) {
          that.health = 60;
          that.damage = 0;
        }

        thatInventory.items.splice(thatInventory.itemvalue, 1);

      }

    }


    thatInventory.manipulateInventory = false;

    if (thatInventory.buildActivate == true) {

      if (thatInventory.materialType == 'wood') {

        var builds = new Builds();

        builds.materialType = 'wood';
        builds.xPosition = that.x + 32;
        builds.yPosition = that.y;

        materials.push(builds);

      }
      else {

        ctx.font = "20px Georgia";
        ctx.fillStyle = "#ffffff";
        ctx.fillText('Not enough  ' + material['wood'], 200, 300);

      }

      if (thatInventory.materialType == 'brick' && material['brick'] >= 10) {

        if (that.buildRight) {

          if (materials.length > 0) {

            for (var i = 0; i < materials.length; i++) {

              if ((that.x + 32 >= materials[i].xPosition && that.x + 32 <= materials[i].xPosition - 64)
                && (that.y >= materials[i].yPosition && that.y + 16 <= materials[i].yPosition + 48)) {

                console.log('build already placed');

                that.canBuild = false;
              }
              else {
                that.canBuild = true;
              }

            }

          } else {

            var builds = new Builds();

            builds.materialType = 'brick';
            builds.xPosition = that.x + 32;
            builds.yPosition = that.y;

            materials.push(builds);

          }

          if (that.canBuild == true) {

            var builds = new Builds();

            builds.materialType = 'brick';
            builds.xPosition = that.x + 33;
            builds.yPosition = that.y;

            materials.push(builds);

          }

        }

      }

      if (thatInventory.type == 'metal') {

        if (that.buildRight) {

          var builds = new Builds();

          builds.materialType = 'metal';
          builds.xPosition = that.x + 33;
          builds.yPosition = that.y;

          materials.push(builds);

        }

      }

      thatMap.woodCollision = false;
      thatMap.brickCollision = false;

    }

  }



  if (e.keyCode === KEY_F) {

    console.log(thatMap.woodCollision);

    if (thatMap.woodCollisionFarm == true) {

      material['wood'].quantity += 10;

    }

    if (thatMap.brickCollisionFarm == true) {

      material['brick'].quantity += 10;

    }

  }

}

window.onkeydown = control;
window.onkeyup = player.stop;

window.onclick = action;

function action(event) {

  if (thatInventory.weapon == true) {
    createBullet();
  }

  if (thatInventory.manipulateInventory == true) {

    var generateItems = new GenerateItems();

    if (generateItems.Weapontype.indexOf(thatInventory.itemSelected) > -1) {

      generateItems.WeaponX = that.x + 50;
      generateItems.WeaponY = that.y;
      generateItems.randomWeapon = generateItems.Weapontype.indexOf(thatInventory.itemSelected);
      weaponsOnMap.push(generateItems);
    }
    else {
      generateItems.foodX = that.x + 50;
      generateItems.foodY = that.y;
      generateItems.randomFood = generateItems.foodSource.indexOf(thatInventory.itemSelected);
      foodsOnMap.push(generateItems);
    }

    thatInventory.removeItem();

  }

  if (thatInventory.showStorage == true) {

    thatInventory.items.push(thatInventory.mainStorage[thatInventory.storageCollisionIndex])
    thatInventory.mainStorage.splice(thatInventory.storageCollisionIndex, 1);

  }

}
