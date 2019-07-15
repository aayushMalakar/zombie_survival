var weapon = {

  source: 'img/weapons_sprite.png',
  weaponSpriteY: 0,

  bat: {

    damage: 4,
    bullets: 30,
    reloadSpeed: 3,
    weaponSpriteX: 140,
    rarity: 'common',
    color: '#326f00',
    type: 'melee',

  },

  m16: {

    damage: 4,
    bullets: 30,
    reloadSpeed: 3,
    weaponSpriteX: 277,
    rarity: 'uncommon',
    color: '#326f00',
    type: 'ranged',

  },

  spas: {

    damage: 12,
    bullets: 8,
    reloadSpeed: 7,
    weaponSpriteX: 350,
    rarity: 'legendary',
    color: '#da8c40',
    type: 'ranged',

  },

  pumpShotgun: {

    damage: 8,
    bullets: 8,
    reloadSpeed: 5,
    rarity: 'common',
    weaponSpriteX: 418,
    color: '#326f00',
    type: 'ranged',

  },

  katana: {

    damage: 12,
    bullets: 8,
    reloadSpeed: 7,
    weaponSpriteX: 492,
    rarity: 'epic',
    color: '#c97afe',
    type: 'melee',

  },

  revolver: {

    damage: 6,
    bullets: 6,
    reloadSpeed: 6,
    weaponSpriteX: 625,
    rarity: 'epic',
    color: '#c97afe',
    type: 'ranged',

  },

  smg1: {

    damage: 6,
    bullets: 6,
    reloadSpeed: 6,
    weaponSpriteX: 845,
    rarity: 'common',
    color: '#868b91',
    type: 'ranged',

  },

  smg2: {

    damage: 6,
    bullets: 6,
    reloadSpeed: 6,
    weaponSpriteX: 1330,
    rarity: 'uncommon',
    color: '#326f00',
    type: 'ranged',

  },

  axe: {

    damage: 6,
    bullets: 6,
    reloadSpeed: 6,
    weaponSpriteX: 1400,
    rarity: 'legendary',
    color: '#da8c40',
    type: 'melee',

  }

}

var heals = {



}

var material = {

  wood: {
    quantity: 1000,
    spriteValueX: 83,
    spriteValueY: 0,
  },
  brick: {
    quantity: 1000,
    spriteValueX: 82,
    spriteValueY: 0,
  },
  metal: {
    quantity: 1000,
    spriteValueX: 85,
    spriteValueY: 0,
  },

  source: 'img/main-tile.png',

}

var food = {

  pizza: {
    source: 'img/food.png',
    energy: 60,
    ItemSpriteX: 0,
    ItemSpriteY: 0,
  },

  burger: {
    source: 'img/food.png',
    energy: 30,
    ItemSpriteX: 16,
    ItemSpriteY: 0,
  },

  fish: {
    source: 'img/food.png',
    energy: 20,
    ItemSpriteX: 32,
    ItemSpriteY: 0,
  },

  sushi: {
    source: 'img/food.png',
    energy: 20,
    ItemSpriteX: 48,
    ItemSpriteY: 0,
  },

  meat: {
    source: 'img/food.png',
    energy: 60,
    ItemSpriteX: 64,
    ItemSpriteY: 0,
  },

  beer: {
    source: 'img/food.png',
    energy: 60,
    thirst: 60,
    ItemSpriteX: 80,
    ItemSpriteY: 0,
  },

  water: {
    source: 'img/food.png',
    energy: 10,
    thirst: 80,
    ItemSpriteX: 96,
    ItemSpriteY: 0,
  },

  energyDrink: {
    source: 'img/food.png',
    energy: 40,
    thirst: 30,
    ItemSpriteX: 112,
    ItemSpriteY: 0,
  },

  coffee: {
    source: 'img/food.png',
    energy: 20,
    thirst: 30,
    ItemSpriteX: 128,
    ItemSpriteY: 0,
  }

}

var house = {

  spritePositionX: 0,
  scaleWidth: 350,

  communityCenter: {
    source: 'img/houses/Community_Center.png',

    spriteWidthTop: 576,
    spriteHeightTop: 324,
    spriteTopPositionY: 0,
    scaleTopHeight: 200,

    spriteWidthBottom: 576,
    spriteHeightBottom: 156,
    spriteBottomPositionY: 324,
    scaleBottomHeight: 90,
  },

  abandonedHouse: {
    source: 'img/houses/abandonedHouse.png',

    spriteWidthTop: 444,
    spriteHeightTop: 364,
    spriteTopPositionY: 0,
    scaleTopHeight: 200,

    spriteWidthBottom: 444,
    spriteHeightBottom: 124,
    spriteBottomPositionY: 364,
    scaleBottomHeight: 90,
  },

  riverHouse: {

    source: 'img/houses/abandonedHouse.png',

    spriteWidthTop: 568,
    spriteHeightTop: 496,
    spriteTopPositionY: 0,
    scaleTopHeight: 200,

    spriteWidthBottom: 568,
    spriteHeightBottom: 144,
    spriteBottomPositionY: 496,
    scaleBottomHeight: 90,

  },

  shop: {

    source: 'img/houses/abandonedHouse.png',

    spriteWidthTop: 322,
    spriteHeightTop: 248,
    spriteTopPositionY: 0,
    scaleTopHeight: 200,

    spriteWidthBottom: 322,
    spriteHeightBottom: 72,
    spriteBottomPositionY: 248,
    scaleBottomHeight: 90,

  }

}


var furnitures = {

  snooker: {
    spritePositionX: 0,
    spritePositionY: 0,
    spriteWidth: 79,
    spriteHeight: 40,
  },

  cabinet: {
    spritePositionX: 284,
    spritePositionY: 22,
    spriteWidth: 32,
    spriteHeight: 27,
  }
}

var bush = {

  spriteHeight: 43,
  spriteWidth: 36,
  spritePositionY: 0,

  cherryBush: {
    spritePositionX: 0,
  },

  cherryBushBeared: {
    spritePositionX: 36,
  },

  normalBush1: {
    spritePositionX: 72,
  },

  normalBush2: {
    spritePositionX: 108,
  },

  furitBearingBush: {
    spritePositionX: 144,
  },

  pinkBerry: {
    spritePositionX: 180,
  },

  orangeBerry: {
    spritePositionX: 216,
  },

  redBerry: {
    spritePositionX: 252,
  },

}
