wallOverlay = function () {

  var materialKeys = Object.keys(material);

  for (var i = 0; i <= 2; i++) {

    if (thatInventory.materialType == materialKeys[i]) {

      ctx.fillStyle = 'rgb(143,146,145)';
      ctx.fillRect(450 + (50 * i), 10, 50, 50);

      ctx.drawImage(thatImageLoader.images['material'], 48 * i, 0, 48, 48, 450 + (50 * i), 10, 40, 40);

      ctx.font = "10px Georgia";
      ctx.fillStyle = "#ffffff";

      ctx.fillText(materialKeys[i], 460 + (50 * i), 60);
      ctx.fillText(material[materialKeys[i]].quantity, 460 + (50 * i), 80);

    }
    else {

      ctx.fillStyle = 'rgb(143,146,145 ,0.5)';
      ctx.fillRect(450 + (50 * i), 10, 30, 30);

      ctx.drawImage(thatImageLoader.images['material'], 48 * i, 0, 48, 48, 450 + (50 * i), 10, 25, 25);

      ctx.font = "10px Georgia";
      ctx.fillStyle = "#ffffff";

      ctx.fillText(materialKeys[i], 455 + (50 * i), 50);
      ctx.fillText(material[materialKeys[i]].quantity, 460 + (50 * i), 80);

    }

  }

}