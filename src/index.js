function _0x3f37() {
  const _0x1586b5 = [
    "ScaleModes",
    "4355502LSaAOi",
    "setZoom",
    "37272PwhDRr",
    "Game",
    "16325510niAPXw",
    "138802qyMhqF",
    "RESIZE",
    "cameras",
    "innerWidth",
    "addEventListener",
    "arcade",
    "events",
    "609iamTTc",
    "774828JnSwHw",
    "830348EtIIvB",
    "1551900KEPorf",
    "5cHgjwd",
    "min",
    "innerHeight",
    "11kbynHv",
    "scenes",
    "#0195b7",
    "main",
    "AUTO",
  ];
  _0x3f37 = function () {
    return _0x1586b5;
  };
  return _0x3f37();
}
const _0x5257bf = _0x45a5;
(function (_0xcbf50f, _0x1a5a08) {
  const _0x4b562d = _0x45a5,
    _0x4b4d0a = _0xcbf50f();
  while (!![]) {
    try {
      const _0xb8cfef =
        (-parseInt(_0x4b562d(0x82)) / 0x1) *
          (-parseInt(_0x4b562d(0x8d)) / 0x2) +
        -parseInt(_0x4b562d(0x7e)) / 0x3 +
        (parseInt(_0x4b562d(0x7d)) / 0x4) * (-parseInt(_0x4b562d(0x7f)) / 0x5) +
        -parseInt(_0x4b562d(0x88)) / 0x6 +
        (parseInt(_0x4b562d(0x7b)) / 0x7) * (-parseInt(_0x4b562d(0x8a)) / 0x8) +
        -parseInt(_0x4b562d(0x7c)) / 0x9 +
        parseInt(_0x4b562d(0x8c)) / 0xa;
      if (_0xb8cfef === _0x1a5a08) break;
      else _0x4b4d0a["push"](_0x4b4d0a["shift"]());
    } catch (_0x5e31e3) {
      _0x4b4d0a["push"](_0x4b4d0a["shift"]());
    }
  }
})(_0x3f37, 0x6ec65);
const GAME_SAFE_WIDTH = 0x2d0,
  GAME_SAFE_HEIGHT = 0x500,
  statusbarHeight = 0x1e,
  deltaX =
    (window["innerWidth"] / calculateVerticalScaleFactor() -
      window[_0x5257bf(0x77)]) /
    0x2,
  deltaY =
    (window[_0x5257bf(0x81)] / calculateVerticalScaleFactor() -
      window["innerHeight"]) /
    0x2,
  gameStartX = -deltaX,
  gameStartY = -deltaY,
  gameWidth = window[_0x5257bf(0x77)] + deltaX,
  gameHeight = window[_0x5257bf(0x81)] + deltaY,
  halfGameWidth = window[_0x5257bf(0x77)] / 0x2,
  halfGameHeight = window[_0x5257bf(0x81)] / 0x2,
  config = {
    type: Phaser[_0x5257bf(0x86)],
    parent: "div",
    pixelArt: !![],
    antialias: ![],
    roundPixels: ![],
    backgroundColor: _0x5257bf(0x84),
    physics: {
      default: _0x5257bf(0x79),
      arcade: { debug: ![], gravity: { y: 0x3e8 } },
    },
    scale: {
      parent: "game-container",
      mode: Phaser["Scale"][_0x5257bf(0x87)][_0x5257bf(0x8e)],
      width: GAME_SAFE_WIDTH,
      height: GAME_SAFE_HEIGHT,
    },
    dom: { createContainer: !![] },
    scene: [
      PreloadScene,
      BackgroundScene,
      ConnectBlockchainScene,
      MintNFTScene,
      SkinSelectorScene,
      LoginScene,
      MenuScene,
      PlayScene,
      RankScene,
      PauseScene,
      SettingsScene,
      RankingScene,
    ],
  },
  game = new Phaser[_0x5257bf(0x8b)](config);
function calculateVerticalScaleFactor() {
  const _0x5f5850 = _0x5257bf;
  return Math[_0x5f5850(0x80)](
    window[_0x5f5850(0x81)] / GAME_SAFE_HEIGHT,
    window["innerWidth"] / GAME_SAFE_WIDTH
  );
}
function checkIsPortraitOrientation() {
  const _0x103bb9 = _0x5257bf;
  return window["innerWidth"] / window[_0x103bb9(0x81)] <= 0x1;
}
function _0x45a5(_0xee2227, _0x4cd205) {
  const _0x3f37af = _0x3f37();
  return (
    (_0x45a5 = function (_0x45a570, _0x5eb195) {
      _0x45a570 = _0x45a570 - 0x76;
      let _0x1bcb80 = _0x3f37af[_0x45a570];
      return _0x1bcb80;
    }),
    _0x45a5(_0xee2227, _0x4cd205)
  );
}
function onresize() {
  const _0x310cd4 = _0x5257bf,
    _0x12f779 = calculateVerticalScaleFactor();
  game["scene"][_0x310cd4(0x83)]["forEach"]((_0x5ac547, _0xda1532) => {
    const _0x4e8209 = _0x310cd4;
    if (_0xda1532 === 0x0) return;
    _0x5ac547[_0x4e8209(0x76)][_0x4e8209(0x85)][_0x4e8209(0x89)](_0x12f779);
  });
}
window[_0x5257bf(0x78)]("resize", onresize),
  game[_0x5257bf(0x7a)]["on"]("ready", () => {
    onresize();
  }),
  (globalThis["__PHASER_GAME__"] = game);
