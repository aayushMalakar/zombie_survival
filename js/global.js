var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const KEY_W = 87;
const KEY_S = 83;
const KEY_A = 65;
const KEY_D = 68;

const KEY_Q = 81;
const KEY_E = 69;

const KEY_F = 70;

const KEY_ONE = 49;
const KEY_TWO = 50;
const KEY_THREE = 51;

const KEY_SPACE = 32;

function playerCollision(firstObjectX, firstObjectY, firstObjectWidth, firstObjectHeight, secondObjectX, secondObjectY, secondObjectWidth, secondObjectHeight) {

  if ((firstObjectX + firstObjectWidth >= secondObjectX) && (firstObjectX <= secondObjectX + secondObjectWidth) && (firstObjectY + 48 <= secondObjectY + secondObjectHeight) && (firstObjectY + firstObjectHeight >= secondObjectY)) {

    return true;

  }
  else {

    return false;

  }

}

function collision(firstObjectX, firstObjectY, firstObjectWidth, firstObjectHeight, secondObjectX, secondObjectY, secondObjectWidth, secondObjectHeight) {

  if ((firstObjectX + firstObjectWidth >= secondObjectX) && (firstObjectX <= secondObjectX + secondObjectWidth) && (firstObjectY + 48 <= secondObjectY + secondObjectHeight) && (firstObjectY + firstObjectHeight >= secondObjectY)) {

    return false;

  }
  else {
    return true;
  }

}
