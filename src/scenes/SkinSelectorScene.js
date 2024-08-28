const _0x1ad689 = _0x3510;
function _0x4d6e() {
  const _0x210ecd = [
    "setInteractive",
    "get",
    "setScale",
    "setPosition",
    "delayedCall",
    "1308216rPlUPb",
    "678272vpORoW",
    "stop",
    "setOrigin",
    "skins",
    "NFTImages",
    "remove",
    "509394swaWoy",
    "halfW",
    "handleNextScene",
    "2MTFBiK",
    "chooseSkinID",
    "chooseSkinFrame",
    "game",
    "floor",
    "click",
    "1279876mathJm",
    "image",
    "mintButtons",
    "halfH",
    "scene",
    "PlayScene",
    "SkinSelectorScene",
    "onClick",
    "2159712FIJNDi",
    "backButton",
    "gameFetchData",
    "loadingAnimation",
    "choose_skin_text",
    "Back.in",
    "mintNFTTextCreateTween",
    "audio",
    "length",
    "createChooseSkinFrame",
    "209425aFvgYg",
    "nextStepButton",
    "time",
    "playStartSceneTween",
    "skin_ID",
    "createNextButton",
    "choose_NFT_frame",
    "pointerdown",
    "tweens",
    "315539awzuLq",
    "start",
    "playerFetchSkinsData",
    "createNFTImage",
    "Back.out",
    "add",
    "createNFTImages",
    "MenuScene",
    "setItem",
    "mintNFTTextImage",
    "forEach",
    "sqrt",
    "7dmrUSk",
    "getItem",
    "ceil",
  ];
  _0x4d6e = function () {
    return _0x210ecd;
  };
  return _0x4d6e();
}
(function (_0x3aceef, _0x5d7608) {
  const _0x4a1cca = _0x3510,
    _0x166233 = _0x3aceef();
  while (!![]) {
    try {
      const _0x519839 =
        -parseInt(_0x4a1cca(0xfa)) / 0x1 +
        (parseInt(_0x4a1cca(0xd9)) / 0x2) * (parseInt(_0x4a1cca(0xd6)) / 0x3) +
        parseInt(_0x4a1cca(0xdf)) / 0x4 +
        parseInt(_0x4a1cca(0xf1)) / 0x5 +
        parseInt(_0x4a1cca(0xcf)) / 0x6 +
        (-parseInt(_0x4a1cca(0x106)) / 0x7) *
          (-parseInt(_0x4a1cca(0xd0)) / 0x8) +
        -parseInt(_0x4a1cca(0xe7)) / 0x9;
      if (_0x519839 === _0x5d7608) break;
      else _0x166233["push"](_0x166233["shift"]());
    } catch (_0x29b743) {
      _0x166233["push"](_0x166233["shift"]());
    }
  }
})(_0x4d6e, 0x441b5);
function _0x3510(_0x329c04, _0x257541) {
  const _0x4d6ead = _0x4d6e();
  return (
    (_0x3510 = function (_0x35101c, _0x21067e) {
      _0x35101c = _0x35101c - 0xcb;
      let _0x33b6cb = _0x4d6ead[_0x35101c];
      return _0x33b6cb;
    }),
    _0x3510(_0x329c04, _0x257541)
  );
}
class SkinSelectorScene extends Phaser["Scene"] {
  constructor() {
    const _0x3ccb77 = _0x3510;
    super(_0x3ccb77(0xe5));
  }
  async ["create"](_0x1d573f) {
    const _0x35fb80 = _0x3510;
    (this[_0x35fb80(0xfc)] = _0x1d573f[_0x35fb80(0xd3)]),
      (this[_0x35fb80(0xe9)] = _0x1d573f),
      (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x35fb80(0xd7)] = halfGameWidth),
      (this[_0x35fb80(0xe2)] = halfGameHeight),
      (this["NFTImages"] = []),
      (this[_0x35fb80(0xe1)] = []),
      (this[_0x35fb80(0xed)] = null),
      (this[_0x35fb80(0xda)] = 0x0),
      (this[_0x35fb80(0xea)] = new LoadingAnimation(
        this,
        this[_0x35fb80(0xd7)],
        this[_0x35fb80(0xe2)]
      )),
      await this["fetchGameState"](),
      (this[_0x35fb80(0xdb)] = this["createChooseSkinFrame"]()),
      (this[_0x35fb80(0x103)] = this["createMintNFTTextImage"]()),
      (this["nextStepButton"] = this[_0x35fb80(0xf6)]()),
      this[_0x35fb80(0x100)](this["playerFetchSkinsData"]),
      localStorage[_0x35fb80(0x102)]("skin_ID", 0x0);
  }
  ["createMintNFTTextImage"]() {
    const _0x355c89 = _0x3510,
      _0x4cd4ba = this[_0x355c89(0xff)]
        [_0x355c89(0xe0)](this["halfW"], -0x64, _0x355c89(0xeb))
        [_0x355c89(0xd2)](0.5, 0x0);
    return (
      (this["mintNFTTextCreateTween"] = this[_0x355c89(0xf9)][_0x355c89(0xff)]({
        targets: _0x4cd4ba,
        ease: _0x355c89(0xfe),
        duration: 0x3e8,
        y: this[_0x355c89(0xe2)] - 0x190,
      })),
      _0x4cd4ba
    );
  }
  [_0x1ad689(0xfd)](_0x48c42f, _0x2c67b5, _0x3fabe8) {
    const _0x2d1924 = _0x1ad689,
      _0xc5cf1a = this[_0x2d1924(0xff)]
        [_0x2d1924(0xe0)](_0x48c42f, _0x2c67b5, _0x3fabe8)
        [_0x2d1924(0xd2)](0.5, 0.5)
        [_0x2d1924(0xcc)](0x0)
        [_0x2d1924(0x109)]();
    return (
      this[_0x2d1924(0xf9)]["add"]({
        targets: _0xc5cf1a,
        ease: "Back.out",
        duration: 0x1f4,
        scale: 0x1,
      }),
      _0xc5cf1a
    );
  }
  [_0x1ad689(0x100)](_0x2036be) {
    const _0x175081 = _0x1ad689,
      _0x16d5f7 = Math[_0x175081(0x108)](
        Math[_0x175081(0x105)](_0x2036be[_0x175081(0xef)] + 0x2)
      );
    _0x2036be[_0x175081(0x104)]((_0x47c6b3, _0x270af3) => {
      const _0x32c3bd = _0x175081;
      let _0x4e0388 = "NFT_" + _0x47c6b3["name"];
      const _0x5e50d7 =
          (_0x270af3 % _0x16d5f7) * 0xe6 + this[_0x32c3bd(0xd7)] - 0xe6,
        _0x9d2346 =
          this[_0x32c3bd(0xe2)] -
          0x64 +
          Math[_0x32c3bd(0xdd)](_0x270af3 / _0x16d5f7) * 0xe6;
      this[_0x32c3bd(0xf3)][_0x32c3bd(0xce)](0x64 * _0x270af3, () => {
        const _0x466776 = _0x32c3bd,
          _0x10ee57 = this[_0x466776(0xfd)](_0x5e50d7, _0x9d2346, _0x4e0388);
        (_0x10ee57["ID"] = _0x47c6b3["id"]),
          _0x10ee57["on"](_0x466776(0xf8), () => {
            const _0x5544b0 = _0x466776;
            (this[_0x5544b0(0xda)] = _0x10ee57["ID"]),
              this[_0x5544b0(0xdb)]["setPosition"](_0x5e50d7, _0x9d2346);
          }),
          this[_0x466776(0xd4)]["push"](_0x10ee57);
      });
      if (_0x270af3 === 0x0)
        this[_0x32c3bd(0xdb)][_0x32c3bd(0xcd)](_0x5e50d7, _0x9d2346);
    });
  }
  async ["fetchGameState"]() {
    const _0x195ce0 = _0x1ad689,
      _0x21f6aa = { id: localStorage[_0x195ce0(0x107)]("id") };
    this[_0x195ce0(0xea)][_0x195ce0(0xfb)]();
    const _0xdc5d64 = await (await GAME_STATE(_0x21f6aa))["json"]();
    this[_0x195ce0(0xea)][_0x195ce0(0xd1)](),
      (this[_0x195ce0(0xfc)] = _0xdc5d64[_0x195ce0(0xd3)]);
  }
  [_0x1ad689(0xf0)]() {
    const _0x507c8f = _0x1ad689,
      _0x375cd8 = this[_0x507c8f(0xff)]
        [_0x507c8f(0xe0)](0x0, 0x0, _0x507c8f(0xf7))
        ["setOrigin"](0.5, 0.5)
        ["setScale"](0x0);
    return (
      this["tweens"][_0x507c8f(0xff)]({
        targets: _0x375cd8,
        ease: "Back.out",
        duration: 0x320,
        scale: 0x1,
      }),
      _0x375cd8
    );
  }
  ["createNextButton"]() {
    const _0x33bc48 = _0x1ad689,
      _0x410a21 = new Button(
        this,
        this[_0x33bc48(0xd7)],
        gameHeight,
        _0x33bc48(0xe8)
      )
        [_0x33bc48(0xe6)](() => {
          const _0x2e2ee8 = _0x33bc48;
          this[_0x2e2ee8(0xdc)][_0x2e2ee8(0xee)][_0x2e2ee8(0xde)]["play"](),
            localStorage["setItem"](_0x2e2ee8(0xf5), this[_0x2e2ee8(0xda)]),
            this[_0x2e2ee8(0xd8)]();
        })
        ["setAngle"](0xb4);
    return (
      this[_0x33bc48(0xf9)][_0x33bc48(0xff)]({
        targets: _0x410a21,
        ease: "Back.out",
        duration: 0x320,
        y: gameHeight - 0x96,
      }),
      _0x410a21
    );
  }
  ["handleNextScene"]() {
    const _0x2320e7 = _0x1ad689;
    this[_0x2320e7(0xf9)][_0x2320e7(0xff)]({
      targets: [this[_0x2320e7(0x103)], this[_0x2320e7(0xf2)]],
      ease: _0x2320e7(0xec),
      duration: 0x258,
      x: gameWidth + 0x12c,
      onComplete: () => {
        const _0x5ca5a1 = _0x2320e7;
        this[_0x5ca5a1(0xe3)][_0x5ca5a1(0xfb)](_0x5ca5a1(0x101), {
          gameFetchData: this[_0x5ca5a1(0xe9)],
        });
        const _0x2818f8 = this[_0x5ca5a1(0xe3)][_0x5ca5a1(0xcb)](
          _0x5ca5a1(0xe4)
        );
        _0x2818f8[_0x5ca5a1(0xf4)](),
          _0x2818f8["changePlayerSkin"](this[_0x5ca5a1(0xda)]),
          _0x2818f8["playPlayerEntryAnimation"](),
          this["scene"][_0x5ca5a1(0xd5)]("SkinSelectorScene");
      },
    }),
      this[_0x2320e7(0xf9)][_0x2320e7(0xff)]({
        targets: this[_0x2320e7(0xd4)],
        ease: _0x2320e7(0xec),
        duration: 0x190,
        x: gameWidth + 0x12c,
      }),
      this[_0x2320e7(0xf9)][_0x2320e7(0xff)]({
        targets: this[_0x2320e7(0xe1)],
        ease: _0x2320e7(0xec),
        duration: 0x1f4,
        x: gameWidth + 0x12c,
      }),
      this[_0x2320e7(0xf9)][_0x2320e7(0xff)]({
        targets: this[_0x2320e7(0xdb)],
        ease: "Back.in",
        duration: 0x190,
        x: gameWidth + 0x12c,
      });
  }
}
