var imageLoader = new imageLoader();
imageLoader.init();

var intervalId = setInterval(() => {

  imageLoader.check();

  if (imageLoader.isLoaded) {

    startGame();
    clearInterval(intervalId);

  }

})

function startGame() {

  ctx.clearRect(0, 0, 1000, 1000);
  ctx.imageSmoothingEnabled = false;

  if (thatMap.isOutside == true) {

    viewport.update();

    //draws the enivronment of the game
    createWorld.drawMap();
    createWorld.drawEnvironment();
    createWorld.drawHousesBottom();



    //generates and controls weapons in the map
    if (weaponSpawnCounter == 1000) {
      weaponSpawnCounter = 0;
    }

    if (weaponSpawnCounter == 0) {

      if (weaponsOnMap.length < 3) {

        var generateItems = new GenerateItems();
        weaponsOnMap.push(generateItems);

      }

    }

    weaponSpawnCounter++;

    for (var i = 0; i < weaponsOnMap.length; i++) {

      if (weaponsOnMap[i].weaponCollision == false) {

        weaponsOnMap[i].drawWeapon();

      }

      if (weaponsOnMap[i].weaponCollision == true) {

        if (thatInventory.itemsFull == false) {

          weaponsOnMap.splice(i, 1);

        }

      }

    }



    //generates and controls food in the map
    if (foodSpawnCounter == 1000) {
      foodSpawnCounter = 0;
    }

    if (foodSpawnCounter == 0) {

      if (foodsOnMap.length < 3) {

        var generateItems = new GenerateItems();
        foodsOnMap.push(generateItems);

      }

    }

    for (var i = 0; i < foodsOnMap.length; i++) {

      if (foodsOnMap[i].foodCollision == false) {

        foodsOnMap[i].drawFood();

      }

      if (foodsOnMap[i].foodCollision == true) {

        if (thatInventory.itemsFull == false) {

          foodsOnMap.splice(i, 1);

        }

      }

    }

    foodSpawnCounter++;


    //controls zombie spawn on the map
    zombieSpawnDelay++;

    if (zombieSpawnDelay == 100) {

      if (zombieSpawner < 20) {

        var zombie = new Zombie();
        zombies.push(zombie);
        zombieSpawner++;

      }

      zombieSpawnDelay = 0;

    }

    for (var i = 0; i < zombies.length; i++) {

      zombies[i].draw();
      zombies[i].update();

      for (var j = 0; j < zombies.length; j++) {

        if (i != j) {

          if (zombies[i].x + zombies[i].width >= zombies[j].x && zombies[i].x <= zombies[j].x + zombies[j].width && zombies[i].y + zombies[i].height >= zombies[j].y && zombies[i].y <= zombies[j].y + zombies[j].height) {

            if (zombies[i].x + zombies[i].width >= zombies[j].x && zombies[i].x + zombies[i].width <= zombies[j].x + 5) {
              zombies[i].fastSpeedX = 0;
              zombies[i].slowSpeedX = 0;
            }


            if (zombies[i].x <= zombies[j].x + zombies[j].width && zombies[i].x >= zombies[j].x + zombies[j].width - 5) {
              zombies[j].fastSpeedX = 0;
              zombies[j].slowSpeedX = 0;
            }

            if (zombies[i].y + zombies[i].height >= zombies[j].y && zombies[i].y + zombies[i].height <= zombies[j].y + 5) {
              zombies[i].fastSpeedY = 0;
              zombies[i].slowSpeedY = 0;
            }

            if (zombies[i].y <= zombies[j].y + zombies[j].height && zombies[i].y <= zombies[j].y + zombies[j].height - 5) {
              zombies[j].fastSpeedY = 0;
              zombies[j].slowSpeedY = 0;
            }

          }
          else {

            zombies[i].fastSpeedX = 0.7;
            zombies[i].slowSpeedX = 0.3;
            zombies[j].fastSpeedX = 0.7;
            zombies[j].slowSpeedX = 0.3;

            zombies[i].fastSpeedY = 0.7;
            zombies[i].slowSpeedY = 0.3;
            zombies[j].fastSpeedY = 0.7;
            zombies[j].slowSpeedY = 0.3;

          }

        }

      }

    }
    //


    //draws player on the map and updates its position
    player.draw();
    player.update();
    player.animate();
    player.materialOverlay();
    //


    //draws inventory boxes and updates it
    inventory.draw();


    //create house top part and bottom part
    createWorld.drawHousesTop();
    // createWorld.drawbush();

    //update the angle from the player and mouse cursor
    angleCalculation.updateRotation();


    //creates an overlay that hints player where to build
    wallOverlay();
    //


    //update bullet and checks for collision
    if (bulletOnclick == true) {

      for (var i = 0; i < bullets.length; i++) {

        bullets[i].update();


        if (that.x < bullets[i].mouseX) {

          if (bullets[i].x > bullets[i].xRange) {

            bullets.splice(i, 1);

          }

        }

        if (bullets[i]) {

          if (that.x > bullets[i].mouseX) {

            if (bullets[i].x < bullets[i].xLeftRange) {

              bullets.splice(i, 1);

            }

          }

        }

        if (bullets[i]) {

          if (that.y < bullets[i].mouseX) {

            if (bullets[i].y > bullets[i].yRange) {
              bullets.splice(i, 1);
            }

          }

        }

        if (bullets[i]) {

          if (that.y > bullets[i].mouseX) {

            if (bullets[i].y < bullets[i].yUpRange) {
              bullets.splice(i, 1);
            }

          }

        }


        for (var j = 0; j < zombies.length; j++) {

          if (bullets[i]) {
            zombies[j].collison(bullets[i], j, i);
          }

        }

      }



      if (materials.length >= 0) {

        for (var i = 0; i < materials.length; i++) {

          materials[i].draw(that.x, that.y);
          materials[i].collision();
          materials[i].update(i);

        }

      }

      if (thatInventory.items.length > 0 && thatInventory.weapon == true) {

        if (Object.keys(weapon).indexOf(thatInventory.itemSelected) > -1) {

          if (weapon[thatInventory.itemSelected].type == 'ranged') {

            ctx.beginPath();
            ctx.moveTo(that.x + 15, that.y + 20);
            ctx.lineTo(angleCalculation.mouseX, angleCalculation.mouseY);
            ctx.stroke();

          }

        }

      }



    }
    //



  }
  else {

    //when the character is inside a house

    createWorld.drawRoom();

    inventory.draw();

    createWorld.drawHouseItem();

    player.draw();
    player.update();
    player.animate();


  }

  window.requestAnimationFrame(startGame);

}