export const imageAssets = {
  stage1Background: new URL('../../assets/images/stages-bg/bg1.jpg', import.meta.url).href,
  stageBackgrounds: [
    new URL('../../assets/images/stages-bg/bg1.jpg', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg2.jpg', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg3.jpg', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg4.jpg', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg5.jpg', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg6.jpg', import.meta.url).href
  ],
  stageRoadMasks: [
    new URL('../../assets/images/stages-bg/bg1-road.png', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg2-road.png', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg3-road.png', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg4-road.png', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg5-road.png', import.meta.url).href,
    new URL('../../assets/images/stages-bg/bg6-road.png', import.meta.url).href
  ],
  nextStage: new URL('../../assets/images/NextStage.png', import.meta.url).href,
  gameOver: new URL('../../assets/images/GameOver.png', import.meta.url).href,
  topRanks: new URL('../../assets/images/TopRanks.png', import.meta.url).href,
  barricadeBlock: new URL('../../assets/images/stages/barricade-block.png', import.meta.url)
    .href,
  weaponSheet: new URL('../../assets/images/Weapon_item_sheet.jpeg', import.meta.url)
    .href,
  firearmIcons: new URL(
    '../../assets/images/Stylized_firearm_icons_game.jpeg',
    import.meta.url
  ).href,
  heartFilled: new URL('../../assets/images/heart-filled.png', import.meta.url)
    .href
};

export const enemyModelAssets = {
  zombies: [
    {
      id: 'cartoon',
      url: new URL('../../assets/models/zombie/cartoon_monster.glb', import.meta.url).href,
      targetMaxDimension: 10 / 3,
      groundOffset: -0.4
    },
    {
      id: 'eye',
      url: new URL(
        '../../assets/models/zombie/eye_monster_animation.glb',
        import.meta.url
      ).href,
      targetMaxDimension: 3,
      groundOffset: -0.4
    },
    {
      id: 'flyning',
      url: new URL('../../assets/models/zombie/flyning_monster.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'single-eye',
      url: new URL(
        '../../assets/models/zombie/monster-single eye.glb',
        import.meta.url
      ).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'zombie',
      url: new URL('../../assets/models/zombie/zombie.glb', import.meta.url).href,
      targetMaxDimension: 3.75,
      hitboxHeightMultiplier: 4.8,
      overheadHeightMultiplier: 4.8,
      groundOffset: -0.4
    },
    {
      id: 'slasher',
      url: new URL(
        '../../assets/models/zombie/zombie_monster_slasher_necromorph.glb',
        import.meta.url
      ).href,
      targetMaxDimension: 0.035,
      hitboxHeightMultiplier: 3.6,
      hitboxWidthMultiplier: 2,
      overheadHeightMultiplier: 3.6,
      groundOffset: -0.4
    },
    {
      id: 'zombie-p03',
      url: new URL('../../assets/models/zombie/zombie_p03.glb', import.meta.url).href,
      targetMaxDimension: 2.5,
      hitboxHeightMultiplier: 1.2,
      overheadHeightMultiplier: 1.2,
      groundOffset: -0.4
    },
    {
      id: 'walk-test',
      url: new URL('../../assets/models/zombie/zombie_walk_test.glb', import.meta.url).href,
      targetMaxDimension: 0.08,
      hitboxHeightMultiplier: 4.608,
      hitboxWidthMultiplier: 4,
      overheadHeightMultiplier: 4.608,
      groundOffset: -0.4
    },
    {
      id: 'warrior',
      url: new URL('../../assets/models/zombie/zombie_warrior.glb', import.meta.url).href,
      targetMaxDimension: 0.035,
      hitboxHeightMultiplier: 3.2256,
      hitboxWidthMultiplier: 4,
      overheadHeightMultiplier: 3.2256,
      groundOffset: -0.4
    },
    {
      id: 'z-cop',
      url: new URL(
        '../../assets/models/zombie/z-animated_zombie_cop_running_loop.glb',
        import.meta.url
      ).href,
      targetMaxDimension: 0.1,
      hitboxHeightMultiplier: 5.1,
      hitboxWidthMultiplier: 3.5,
      hitboxDepthMultiplier: 0.7,
      overheadHeightMultiplier: 5.1,
      groundOffset: -0.4
    },
    {
      id: 'z-shiny-grunt',
      url: new URL(
        '../../assets/models/zombie/z-shiny_flashy_grunt-walking.glb',
        import.meta.url
      ).href,
      targetMaxDimension: 3.6,
      hitboxWidthMultiplier: 0.6,
      materialRoughness: 0.96,
      materialMetalness: 0,
      materialEnvMapIntensity: 0,
      materialColorIntensity: 0.72,
      groundOffset: -0.62,
      visualGroundOffset: -2.4
    },
    {
      id: 'z-spider',
      url: new URL(
        '../../assets/models/zombie/z-spider_creepy_walking.glb',
        import.meta.url
      ).href,
      targetMaxDimension: 4.5,
      hitboxHeightMultiplier: 2 / 3,
      hitboxWidthMultiplier: 2 / 3,
      hitboxDepthMultiplier: 2 / 3,
      groundOffset: -1.4,
      visualGroundOffset: -3.1
    }
  ],
  // Mech review sizing is tuned per model after Debug Mode checks.
  mechs: [
    {
      id: 'astro-scout-toilet',
      url: new URL('../../assets/models/mech/astro_scout_toilet.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'camera-mech',
      url: new URL('../../assets/models/mech/camera_mech.glb', import.meta.url).href,
      targetMaxDimension: 5,
      visualYawOffset: Math.PI / 2,
      groundOffset: -0.4
    },
    {
      id: 'chicken-mech',
      url: new URL('../../assets/models/mech/chicken_6_-_mech.glb', import.meta.url).href,
      targetMaxDimension: 10,
      hitboxHeightMultiplier: 0.32,
      hitboxWidthMultiplier: 0.35,
      overheadHeightMultiplier: 0.42,
      groundOffset: 0.08,
      visualGroundOffset: -0.4
    },
    {
      id: 'medium-mech-striker',
      url: new URL('../../assets/models/mech/medium_mech_striker.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'mech-drone',
      url: new URL('../../assets/models/mech/mech_drone.glb', import.meta.url).href,
      targetMaxDimension: 1,
      hitboxHeightMultiplier: 3,
      hitboxWidthMultiplier: 4,
      overheadHeightMultiplier: 3,
      groundOffset: -0.4,
      visualGroundOffset: -2.0
    },
    {
      id: 'primeops-mech',
      url: new URL('../../assets/models/mech/primeops_mech.glb', import.meta.url).href,
      targetMaxDimension: 5,
      hitboxHeightMultiplier: 1.5,
      overheadHeightMultiplier: 1.5,
      groundOffset: -0.4
    },
    {
      id: 'sonia-mech',
      url: new URL('../../assets/models/mech/sonia_mech.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'titan-speakerman',
      url: new URL('../../assets/models/mech/titan_speakerman.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'upgraded-camera-mech',
      url: new URL('../../assets/models/mech/upgraded_camera_mech.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'upgraded-titan-camera-man',
      url: new URL('../../assets/models/mech/upgraded_titan_camera_man.glb', import.meta.url).href,
      targetMaxDimension: 5,
      groundOffset: -0.4
    },
    {
      id: 'walker-mech',
      url: new URL('../../assets/models/mech/walker_mech.glb', import.meta.url).href,
      targetMaxDimension: 1 / 15,
      hitboxHeightMultiplier: 10,
      hitboxWidthMultiplier: 10,
      groundOffset: -0.4
    }
  ]
};

export const preparationUiAssets = {
  background: new URL('../../assets/images/prep-background.jpeg', import.meta.url).href,
  gold: new URL('../../assets/images/gold.png', import.meta.url).href,
  rubi: new URL('../../assets/images/rubi.png', import.meta.url).href,
  leftArrow: new URL('../../assets/images/left-arrow.png', import.meta.url).href,
  levelUp: new URL('../../assets/images/levelup2.png', import.meta.url).href,
  rightArrow: new URL('../../assets/images/right-arrow.png', import.meta.url).href,
  startIcon: new URL('../../assets/images/start-game2.png', import.meta.url).href,
  startButton: new URL('../../assets/images/start.png', import.meta.url).href,
  reset: new URL('../../assets/images/reset.png', import.meta.url).href
};

export const mainHudAssets = {
  airAttack: new URL('../../assets/images/stages/air-attack.png', import.meta.url).href,
  barricade: new URL('../../assets/images/stages/barricade.png', import.meta.url).href,
  barricadeBlock: new URL('../../assets/images/stages/barricade-block.png', import.meta.url).href,
  bullet: new URL('../../assets/images/stages/bullet.png', import.meta.url).href,
  menu: new URL('../../assets/images/stages/menu1.png', import.meta.url).href,
  settings: new URL('../../assets/images/stages/menu2.png', import.meta.url).href,
  pause: new URL('../../assets/images/stages/menu3.png', import.meta.url).href,
  grenade: new URL('../../assets/images/stages/grenade.png', import.meta.url).href,
  jacket: new URL('../../assets/images/stages/jacket.png', import.meta.url).href,
  magazine: new URL('../../assets/images/stages/magazine.png', import.meta.url).href,
  player: new URL('../../assets/images/stages/player.png', import.meta.url).href,
  potionDex: new URL('../../assets/images/stages/potion-dex.png', import.meta.url).href,
  potionHealth: new URL('../../assets/images/stages/potion-health.png', import.meta.url).href,
  potionInt: new URL('../../assets/images/stages/potion-int.png', import.meta.url).href,
  repairKit: new URL('../../assets/images/stages/repair-kit.png', import.meta.url).href,
  turret: new URL('../../assets/images/stages/turret.png', import.meta.url).href,
  turret1On: new URL('../../assets/images/stages/turret1-on.png', import.meta.url).href,
  turret1Off: new URL('../../assets/images/stages/turret1-off.png', import.meta.url).href,
  waves: new URL('../../assets/images/stages/waves.png', import.meta.url).href
};

export const upgradeAssets = {
  fieldKit: new URL('../../assets/images/stages/medic.png', import.meta.url).href,
  reinforcedNest: new URL('../../assets/images/stages/repair-kit1.png', import.meta.url).href,
  extendedMag: new URL('../../assets/images/stages/magazine1.png', import.meta.url).href,
  fastHands: new URL('../../assets/images/stages/fast.png', import.meta.url).href,
  lightTrigger: new URL('../../assets/images/stages/bullets.png', import.meta.url).href,
  hotRounds: new URL('../../assets/images/stages/explosion.png', import.meta.url).href
};

export const introAssets = {
  background: new URL(
    '../../assets/images/Intro/intro-background.jpeg',
    import.meta.url
  ).href,
  logo: new URL(
    '../../assets/images/Intro/shelter-defence-logo.png',
    import.meta.url
  ).href,
  buttons: new URL(
    '../../assets/images/Intro/intro-buttons1.png',
    import.meta.url
  ).href
};

export const characterAssets = {
  anais: new URL('../../assets/images/chars/anais.png', import.meta.url).href,
  henry: new URL('../../assets/images/chars/henry.png', import.meta.url).href,
  kim: new URL('../../assets/images/chars/kim.png', import.meta.url).href,
  kino: new URL('../../assets/images/chars/kino.png', import.meta.url).href,
  tomas: new URL('../../assets/images/chars/tomas.png', import.meta.url).href,
  turret1: new URL('../../assets/images/chars/turret1.png', import.meta.url).href
};

export const firstPersonWeaponAssets: Record<string, string> = {
  'ai-aw-sniper': new URL('../../assets/images/chars/rifle.png', import.meta.url).href,
  'bren-lmg': new URL('../../assets/images/chars/machine gun.png', import.meta.url).href,
  'colt-m1911': new URL('../../assets/images/chars/pisto.png', import.meta.url).href,
  'colt-saa': new URL('../../assets/images/chars/revolver.png', import.meta.url).href,
  'm4-carbine': new URL('../../assets/images/chars/carbine.png', import.meta.url).href,
  'milkor-mgl': new URL('../../assets/images/chars/mgl.png', import.meta.url).href,
  mp5k: new URL('../../assets/images/chars/mp5k.png', import.meta.url).href,
  shotgun: new URL('../../assets/images/chars/shotgun.png', import.meta.url).href
};

export const itemAssets = {
  jacket: new URL('../../assets/images/items/jacket.png', import.meta.url).href,
  magazine: new URL('../../assets/images/items/magazine.png', import.meta.url).href,
  potionDex: new URL('../../assets/images/items/potion-dex.png', import.meta.url).href,
  potionHealth: new URL('../../assets/images/items/potion-health.png', import.meta.url).href,
  potionInt: new URL('../../assets/images/items/potion-int.png', import.meta.url).href,
  repairKit: new URL('../../assets/images/items/repair-kit.png', import.meta.url).href
};

export const preparationWeaponAssets = {
  aiAwSniper: new URL(
    '../../assets/images/weapon/AI AW sniper rifle.png',
    import.meta.url
  ).href,
  brenLightMachineGun: new URL(
    '../../assets/images/weapon/Bren Light Machine Gun.png',
    import.meta.url
  ).href,
  coltM1911: new URL(
    '../../assets/images/weapon/Colt M1911 Pistol.png',
    import.meta.url
  ).href,
  coltSaa: new URL(
    '../../assets/images/weapon/Colt Single Action Army (SAA) Revolver.png',
    import.meta.url
  ).href,
  mp5k: new URL(
    '../../assets/images/weapon/Heckler Koch MP5K.png',
    import.meta.url
  ).href,
  m4Carbine: new URL('../../assets/images/weapon/M4 Carbine.png', import.meta.url)
    .href,
  milkorMgl: new URL('../../assets/images/weapon/Milkor MGL.png', import.meta.url)
    .href,
  shotgun: new URL(
    '../../assets/images/weapon/Short‑Barreled Pump‑Action Shotgun.png',
    import.meta.url
  ).href
};

export const hudAssets = {
  playerPanel: new URL(
    '../../assets/images/hud/player-panel.png',
    import.meta.url
  ).href,
  barricadePanel: new URL(
    '../../assets/images/stages/barricade.png',
    import.meta.url
  ).href,
  helperHealthPanel: new URL(
    '../../assets/images/hud/helper-health-panel.png',
    import.meta.url
  ).href,
  wavePanel: new URL('../../assets/images/hud/wave-panel.png', import.meta.url)
    .href,
  counterPanel: new URL(
    '../../assets/images/hud/counter-panel.png',
    import.meta.url
  ).href,
  togglePanel: new URL(
    '../../assets/images/hud/toggle-panel.png',
    import.meta.url
  ).href,
  squareButton: new URL(
    '../../assets/images/hud/square-button.png',
    import.meta.url
  ).href,
  weaponPanel: new URL(
    '../../assets/images/hud/weapon-panel.png',
    import.meta.url
  ).href,
  specialButton: new URL(
    '../../assets/images/hud/special-button.png',
    import.meta.url
  ).href,
  helperCommandPanel: new URL(
    '../../assets/images/hud/helper-command-panel.png',
    import.meta.url
  ).href,
  crosshair: new URL('../../assets/images/hud/crosshair.png', import.meta.url)
    .href
};
