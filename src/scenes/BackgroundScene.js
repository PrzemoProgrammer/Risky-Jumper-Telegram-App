const _0x16cac0 = _0x3b15;
function _0x571c() {
  const _0xe177e6 = [
    "534sfoMMF",
    "addGround",
    "addBackgroundComponents",
    "moveAnim",
    "tileSprite",
    "add",
    "addClouds",
    "clouds",
    "ground",
    "halfW",
    "addBackground",
    "cloudsMoveTween",
    "18480980rbEgMe",
    "32oEFWGb",
    "removeTween",
    "1637901eHuNHR",
    "layer1",
    "921838gzYVlE",
    "setOrigin",
    "Scene",
    "1wSmbzr",
    "setScale",
    "548716QlKBDr",
    "clearTweens",
    "BackgroundScene",
    "tweens",
    "1085133Orbbep",
    "Cubic.in",
    "image",
    "155EodAfy",
    "setDisplaySize",
    "597162myJzWb",
  ];
  _0x571c = function () {
    return _0xe177e6;
  };
  return _0x571c();
}
function _0x3b15(_0x6afc5, _0x434598) {
  const _0x571c1d = _0x571c();
  return (
    (_0x3b15 = function (_0x3b15f8, _0x552df4) {
      _0x3b15f8 = _0x3b15f8 - 0x1a6;
      let _0x58fb48 = _0x571c1d[_0x3b15f8];
      return _0x58fb48;
    }),
    _0x3b15(_0x6afc5, _0x434598)
  );
}
(function (_0x1fe857, _0x512a77) {
  const _0x36311b = _0x3b15,
    _0x43aae3 = _0x1fe857();
  while (!![]) {
    try {
      const _0x3d0408 =
        (parseInt(_0x36311b(0x1b5)) / 0x1) *
          (-parseInt(_0x36311b(0x1b2)) / 0x2) +
        -parseInt(_0x36311b(0x1c0)) / 0x3 +
        -parseInt(_0x36311b(0x1b7)) / 0x4 +
        (parseInt(_0x36311b(0x1be)) / 0x5) *
          (-parseInt(_0x36311b(0x1c1)) / 0x6) +
        parseInt(_0x36311b(0x1bb)) / 0x7 +
        (parseInt(_0x36311b(0x1ae)) / 0x8) *
          (-parseInt(_0x36311b(0x1b0)) / 0x9) +
        parseInt(_0x36311b(0x1ad)) / 0xa;
      if (_0x3d0408 === _0x512a77) break;
      else _0x43aae3["push"](_0x43aae3["shift"]());
    } catch (_0x5eab40) {
      _0x43aae3["push"](_0x43aae3["shift"]());
    }
  }
})(_0x571c, 0x74072);
class BackgroundScene extends Phaser[_0x16cac0(0x1b4)] {
  constructor() {
    const _0x1f7971 = _0x16cac0;
    super(_0x1f7971(0x1b9));
  }
  ["create"]() {
    const _0x49471f = _0x16cac0;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x49471f(0x1aa)] = halfGameWidth),
      (this["halfH"] = halfGameHeight),
      (this["cloudsMoveTween"] = null),
      (this[_0x49471f(0x1a8)] = null),
      (this["layer1"] = null),
      this[_0x49471f(0x1ab)](),
      this["addBackgroundComponents"]();
  }
  ["addBackground"]() {
    const _0x1ab0c2 = _0x16cac0;
    this[_0x1ab0c2(0x1a6)]
      [_0x1ab0c2(0x1bd)](gameStartX, gameStartY, "menuBg")
      [_0x1ab0c2(0x1b3)](0x0, 0x0)
      [_0x1ab0c2(0x1bf)](gameWidth + deltaX, gameHeight + deltaY);
  }
  [_0x16cac0(0x1c3)]() {
    const _0x5106e9 = _0x16cac0;
    this["addLayer1"](gameStartX, gameHeight),
      this[_0x5106e9(0x1a7)](
        this[_0x5106e9(0x1aa)],
        gameStartY + gameHeight / 0x4
      ),
      this[_0x5106e9(0x1c2)](gameStartX, gameHeight);
  }
  ["addLayer1"](_0x27729d, _0x15b25e) {
    const _0x2fc135 = _0x16cac0,
      _0x1a2f6d = this[_0x2fc135(0x1a6)]
        [_0x2fc135(0x1c5)](
          _0x27729d,
          _0x15b25e + 0x3e8,
          gameWidth + deltaX,
          0x4d8,
          "menuLayer1"
        )
        ["setOrigin"](0x0, 0x1);
    (this["layer1"] = _0x1a2f6d),
      this[_0x2fc135(0x1ba)][_0x2fc135(0x1a6)]({
        targets: _0x1a2f6d,
        ease: "Cubic.out",
        duration: 0x258,
        y: _0x15b25e,
      });
  }
  [_0x16cac0(0x1a7)](_0x207334, _0x31928a) {
    const _0x5573a0 = _0x16cac0,
      _0x13d8e7 = this[_0x5573a0(0x1a6)]
        [_0x5573a0(0x1bd)](_0x207334, _0x31928a, "layer2")
        [_0x5573a0(0x1b3)](0.5, 0x0)
        [_0x5573a0(0x1b6)](0x3);
    this[_0x5573a0(0x1a8)] = _0x13d8e7;
    const _0xe8101d = {
      target: _0x13d8e7,
      x: _0x13d8e7["x"] - 0x14,
      y: _0x13d8e7["y"] + 0xf,
      time: 0x834,
    };
    this[_0x5573a0(0x1ba)][_0x5573a0(0x1a6)]({
      targets: _0x13d8e7,
      ease: "Back.out",
      duration: 0x3e8,
      scale: 0x1,
      onComplete: () => {
        const _0x3a16d5 = _0x5573a0;
        this["cloudsMoveTween"] = this[_0x3a16d5(0x1c4)](_0xe8101d);
      },
    });
  }
  [_0x16cac0(0x1c2)](_0x5161dd, _0x4f19f8) {
    const _0x1b00dc = _0x16cac0,
      _0x464bfe = this[_0x1b00dc(0x1a6)]
        [_0x1b00dc(0x1c5)](
          _0x5161dd,
          _0x4f19f8 + 0x32,
          gameWidth + deltaX,
          0x37,
          _0x1b00dc(0x1a9)
        )
        ["setOrigin"](0x0, 0x1);
    this["tweens"][_0x1b00dc(0x1a6)]({
      targets: _0x464bfe,
      ease: "Linear",
      duration: 0x12c,
      y: _0x4f19f8,
    });
  }
  [_0x16cac0(0x1c4)]({
    target: _0x4e77d4,
    x: _0x10ed19,
    y: _0x2937d9,
    time: _0x15f26c,
    ease: ease = "Sine.easeInOut",
  }) {
    const _0x5abfec = _0x16cac0;
    return this[_0x5abfec(0x1ba)][_0x5abfec(0x1a6)]({
      targets: _0x4e77d4,
      x: _0x10ed19,
      y: _0x2937d9,
      ease: ease,
      duration: _0x15f26c,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x16cac0(0x1b8)]() {
    const _0x21fab3 = _0x16cac0;
    this[_0x21fab3(0x1ac)]["remove"](), (this["cloudsMoveTween"] = null);
  }
  [_0x16cac0(0x1af)]() {
    const _0x5d1059 = _0x16cac0;
    this["cloudsMoveTween"]["remove"](),
      this[_0x5d1059(0x1ba)][_0x5d1059(0x1a6)]({
        targets: this[_0x5d1059(0x1b1)],
        ease: _0x5d1059(0x1bc),
        duration: 0x1f4,
        y: gameHeight + 0x3e8,
      }),
      this[_0x5d1059(0x1ba)][_0x5d1059(0x1a6)]({
        targets: this[_0x5d1059(0x1a8)],
        ease: "Back.in",
        duration: 0xc8,
        scale: 0x0,
      });
  }
}
