function _0x5a55(_0x3c49de, _0x265f86) {
  const _0x4d2169 = _0x4d21();
  return (
    (_0x5a55 = function (_0x5a55a7, _0x3f6ac3) {
      _0x5a55a7 = _0x5a55a7 - 0x1bf;
      let _0xae3ce4 = _0x4d2169[_0x5a55a7];
      return _0xae3ce4;
    }),
    _0x5a55(_0x3c49de, _0x265f86)
  );
}
const _0x3281dc = _0x5a55;
(function (_0x55b776, _0x34f58e) {
  const _0x4a0426 = _0x5a55,
    _0x360df3 = _0x55b776();
  while (!![]) {
    try {
      const _0x305f6 =
        -parseInt(_0x4a0426(0x1f5)) / 0x1 +
        -parseInt(_0x4a0426(0x1fa)) / 0x2 +
        parseInt(_0x4a0426(0x1ff)) / 0x3 +
        (parseInt(_0x4a0426(0x1cf)) / 0x4) *
          (parseInt(_0x4a0426(0x205)) / 0x5) +
        parseInt(_0x4a0426(0x1f4)) / 0x6 +
        (parseInt(_0x4a0426(0x203)) / 0x7) *
          (parseInt(_0x4a0426(0x1d5)) / 0x8) +
        parseInt(_0x4a0426(0x1c3)) / 0x9;
      if (_0x305f6 === _0x34f58e) break;
      else _0x360df3["push"](_0x360df3["shift"]());
    } catch (_0x32f660) {
      _0x360df3["push"](_0x360df3["shift"]());
    }
  }
})(_0x4d21, 0xdf0c3);
class MintNFTScene extends Phaser[_0x3281dc(0x207)] {
  constructor() {
    super("MintNFTScene");
  }
  [_0x3281dc(0x1ea)](_0x3839c2) {
    const _0xd2479a = _0x3281dc;
    (this[_0xd2479a(0x1f9)] = _0x3839c2[_0xd2479a(0x1dc)]),
      (this[_0xd2479a(0x1eb)] = _0x3839c2[_0xd2479a(0x1eb)]),
      (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0xd2479a(0x202)] = halfGameWidth),
      (this["halfH"] = halfGameHeight),
      (this[_0xd2479a(0x1da)] = []),
      (this[_0xd2479a(0x1c7)] = []),
      (this[_0xd2479a(0x1fc)] = []),
      (this["areButtonsBlocked"] = ![]),
      (this[_0xd2479a(0x1cb)] = null),
      (this[_0xd2479a(0x204)] = this[_0xd2479a(0x1e9)]()),
      (this[_0xd2479a(0x1f6)] = this[_0xd2479a(0x1e4)]()),
      this[_0xd2479a(0x1bf)](),
      (this[_0xd2479a(0x1fb)] = new LoadingAnimation(
        this,
        this[_0xd2479a(0x202)],
        this["halfH"] + 0x12c
      ));
    if (document[_0xd2479a(0x1ef)]("loadingIcon"))
      document[_0xd2479a(0x1ef)]("loadingIcon")[_0xd2479a(0x1e2)]();
  }
  [_0x3281dc(0x1bf)]() {
    const _0x522845 = _0x3281dc,
      _0x53530c = this[_0x522845(0x1eb)][_0x522845(0x1e0)];
    let _0x11e360 = 0x0;
    for (const _0x4c5988 in _0x53530c) {
      const _0x218275 = _0x53530c[_0x4c5988],
        { id: _0x26c144, name: _0x2e6e5b, price: _0x269f99 } = _0x218275,
        _0x2f386e = this["createImage"](_0x2e6e5b, _0x11e360);
      this[_0x522845(0x1da)][_0x522845(0x200)](_0x2f386e);
      if (
        this[_0x522845(0x1f9)]["skins"][_0x522845(0x1ee)](
          (_0x1974a5) => _0x1974a5["id"] === _0x26c144
        )
      ) {
        _0x11e360 += 0x1;
        continue;
      }
      const _0x138992 = this[_0x522845(0x1d4)](_0x26c144, _0x11e360),
        _0x28f7bd = this["createPriceText"](_0x269f99, _0x11e360),
        _0xf71a5 = this[_0x522845(0x1f1)](_0x11e360);
      this[_0x522845(0x1c7)][_0x522845(0x200)](_0x138992),
        this[_0x522845(0x1fc)][_0x522845(0x200)](_0x28f7bd, _0xf71a5),
        (_0x11e360 += 0x1);
    }
  }
  [_0x3281dc(0x1c9)](_0x39e4bb, _0x215264) {
    const _0x13e62f = _0x3281dc,
      _0x47305b = this["add"]
        [_0x13e62f(0x1ce)](
          0xe6 * _0x215264 + this[_0x13e62f(0x202)] - 0x104,
          this[_0x13e62f(0x1fd)] + 0xbe,
          _0x39e4bb,
          {
            fontFamily: _0x13e62f(0x1e7),
            fontSize: _0x13e62f(0x1e6),
            color: _0x13e62f(0x1e8),
            stroke: "#000000",
            strokeThickness: 0xa,
            shadow: { blur: 0x0, stroke: ![], fill: ![] },
          }
        )
        [_0x13e62f(0x1d9)](0.5, 0.5)
        [_0x13e62f(0x1f8)](0x0);
    return (
      this[_0x13e62f(0x1d1)]["add"]({
        targets: _0x47305b,
        ease: _0x13e62f(0x1c8),
        duration: 0x258,
        scale: 0x1,
      }),
      _0x47305b
    );
  }
  [_0x3281dc(0x1f1)](_0x2115d6) {
    const _0x31e9ee = _0x3281dc,
      _0x375314 = this["add"]
        [_0x31e9ee(0x1c6)](
          0xe6 * _0x2115d6 + this["halfW"] - 0xb4,
          this["halfH"] + 0xbe,
          "telegramStar"
        )
        [_0x31e9ee(0x1d9)](0.5, 0.5)
        ["setScale"](0x0);
    return (
      this["tweens"][_0x31e9ee(0x1c2)]({
        targets: _0x375314,
        ease: _0x31e9ee(0x1c8),
        duration: 0x258,
        scale: 0.8,
      }),
      _0x375314
    );
  }
  [_0x3281dc(0x1e9)]() {
    const _0x3c75c9 = _0x3281dc,
      _0x578bf9 = this[_0x3c75c9(0x1c2)]
        [_0x3c75c9(0x1c6)](this["halfW"], -0x64, _0x3c75c9(0x1cc))
        ["setOrigin"](0.5, 0x0);
    return (
      (this[_0x3c75c9(0x1cb)] = this[_0x3c75c9(0x1d1)]["add"]({
        targets: _0x578bf9,
        ease: _0x3c75c9(0x1c8),
        duration: 0x3e8,
        y: this[_0x3c75c9(0x1fd)] - 0x15e,
      })),
      _0x578bf9
    );
  }
  ["createBuyButton"](_0x422522, _0x32a5c2) {
    const _0x5bb6b9 = _0x3281dc,
      _0x5db25e = new Button(
        this,
        0xe6 * _0x32a5c2 + this[_0x5bb6b9(0x202)] - 0xe6,
        this[_0x5bb6b9(0x1fd)] + 0x50,
        _0x5bb6b9(0x1d6)
      )[_0x5bb6b9(0x1f8)](0x0);
    return (
      this[_0x5bb6b9(0x1d1)][_0x5bb6b9(0x1c2)]({
        targets: _0x5db25e,
        ease: _0x5bb6b9(0x1c8),
        duration: 0x384,
        scale: 0x1,
        onComplete: () => {
          const _0x39fdac = _0x5bb6b9;
          _0x5db25e[_0x39fdac(0x1d3)](async () => {
            const _0x5d77a4 = _0x39fdac;
            if (
              this["loadingAnimation"][_0x5d77a4(0x1d0)] &&
              this["loadingAnimation"][_0x5d77a4(0x1d0)][_0x5d77a4(0x1e5)]()
            )
              return;
            (this[_0x5d77a4(0x1ec)] = !![]),
              this["loadingAnimation"][_0x5d77a4(0x1f0)](),
              _0x5db25e[_0x5d77a4(0x1d7)](![]),
              this[_0x5d77a4(0x206)]["audio"]["click"][_0x5d77a4(0x1c0)](),
              this[_0x5d77a4(0x1fb)][_0x5d77a4(0x1c5)](
                _0x5db25e["x"],
                _0x5db25e["y"] + 0xa
              ),
              this[_0x5d77a4(0x1db)](_0x422522);
          });
        },
      }),
      _0x5db25e
    );
  }
  async [_0x3281dc(0x1db)](_0x335b07) {
    const _0x553d5b = _0x3281dc,
      { paymentLink: _0x44f7a1 } = await (
        await GET_INVOICE({
          playerID: localStorage["getItem"]("id"),
          skinID: _0x335b07,
        })
      )[_0x553d5b(0x1cd)]();
    Telegram[_0x553d5b(0x1c1)][_0x553d5b(0x1df)](_0x44f7a1, (_0x3e5436) => {
      const _0x2b7f4d = _0x553d5b;
      console[_0x2b7f4d(0x1ca)](_0x2b7f4d(0x1d2)),
        console[_0x2b7f4d(0x1ca)](_0x3e5436),
        _0x3e5436 === _0x2b7f4d(0x1dd)
          ? (console[_0x2b7f4d(0x1ca)]("Payment\x20success"),
            (this["areButtonsBlocked"] = ![]),
            this[_0x2b7f4d(0x1fb)]["stop"](),
            new RequestStateInformation(
              this,
              this[_0x2b7f4d(0x1fb)]["x"],
              this[_0x2b7f4d(0x1fb)]["y"],
              _0x2b7f4d(0x1f7)
            ))
          : (console[_0x2b7f4d(0x1ca)]("Payment\x20fail"),
            (this["areButtonsBlocked"] = ![]),
            this["loadingAnimation"]["stop"](),
            new RequestStateInformation(
              this,
              this[_0x2b7f4d(0x1fb)]["x"],
              this[_0x2b7f4d(0x1fb)]["y"],
              "false_icon"
            ));
    });
  }
  [_0x3281dc(0x1f3)](_0x38fbc5, _0x8e55f1) {
    const _0x43298e = _0x3281dc,
      _0x5cecac = _0x43298e(0x1d8) + _0x38fbc5,
      _0x2857fc = this["add"]
        [_0x43298e(0x1c6)](
          0xe6 * _0x8e55f1 + this[_0x43298e(0x202)] - 0xe6,
          this["halfH"] - 0xc8,
          _0x5cecac
        )
        [_0x43298e(0x1d9)](0.5, 0x0)
        ["setScale"](0x0);
    return (
      this[_0x43298e(0x1d1)][_0x43298e(0x1c2)]({
        targets: _0x2857fc,
        ease: "Back.out",
        duration: 0x258,
        scale: 0x1,
      }),
      _0x2857fc
    );
  }
  [_0x3281dc(0x1e4)]() {
    const _0x5ce6c4 = _0x3281dc,
      _0x1bbe3c = new Button(
        this,
        this[_0x5ce6c4(0x202)],
        gameHeight,
        _0x5ce6c4(0x1ed)
      )
        ["onClick"](() => {
          const _0xa4ec01 = _0x5ce6c4;
          if (
            this[_0xa4ec01(0x1fb)]["loadingTween"] &&
            this[_0xa4ec01(0x1fb)][_0xa4ec01(0x1d0)][_0xa4ec01(0x1e5)]()
          )
            return;
          this[_0xa4ec01(0x206)]["audio"][_0xa4ec01(0x1c4)][_0xa4ec01(0x1c0)](),
            this["handleNextScene"]();
        })
        ["setAngle"](0xb4);
    return (
      this[_0x5ce6c4(0x1d1)][_0x5ce6c4(0x1c2)]({
        targets: _0x1bbe3c,
        ease: "Back.out",
        duration: 0x320,
        y: gameHeight - 0x96,
      }),
      _0x1bbe3c
    );
  }
  [_0x3281dc(0x1f2)]() {
    const _0x8cce25 = _0x3281dc;
    this[_0x8cce25(0x1d1)][_0x8cce25(0x1c2)]({
      targets: [this["mintNFTTextImage"], this[_0x8cce25(0x1f6)]],
      ease: _0x8cce25(0x201),
      duration: 0x258,
      x: gameWidth + 0x12c,
      onComplete: () => {
        const _0x5fe744 = _0x8cce25;
        this[_0x5fe744(0x1e3)][_0x5fe744(0x1c5)](
          _0x5fe744(0x1fe),
          this[_0x5fe744(0x1f9)]
        ),
          this[_0x5fe744(0x1e1)](),
          this[_0x5fe744(0x1e3)][_0x5fe744(0x1e2)](_0x5fe744(0x1de));
      },
    }),
      this[_0x8cce25(0x1d1)]["add"]({
        targets: this["skinsImages"],
        ease: "Back.in",
        duration: 0x190,
        x: gameWidth + 0x12c,
      }),
      this[_0x8cce25(0x1d1)]["add"]({
        targets: this["buyButtons"],
        ease: _0x8cce25(0x201),
        duration: 0x1f4,
        x: gameWidth + 0x12c,
      }),
      this["tweens"][_0x8cce25(0x1c2)]({
        targets: this[_0x8cce25(0x1fc)],
        ease: "Back.in",
        duration: 0x1c2,
        x: gameWidth + 0x12c,
      });
  }
  ["clearTweens"]() {}
}
function _0x4d21() {
  const _0x3a91f8 = [
    "getElementById",
    "stop",
    "createPriceIcon",
    "handleNextScene",
    "createImage",
    "1141032slEVbK",
    "990248QOAhUI",
    "nextStepButton",
    "correct_icon",
    "setScale",
    "gameStateFetchData",
    "1947840tPwTDH",
    "loadingAnimation",
    "restElements",
    "halfH",
    "SkinSelectorScene",
    "3751737mhDsWx",
    "push",
    "Back.in",
    "halfW",
    "21TRkuGQ",
    "mintNFTTextImage",
    "1813745YOgEug",
    "game",
    "Scene",
    "createSkins",
    "play",
    "WebApp",
    "add",
    "6808356avSUmN",
    "click",
    "start",
    "image",
    "buyButtons",
    "Back.out",
    "createPriceText",
    "log",
    "mintNFTTextCreateTween",
    "mint_nft_text",
    "json",
    "text",
    "4OuOXLP",
    "loadingTween",
    "tweens",
    "INVOICE\x20STATUS:",
    "onClick",
    "createBuyButton",
    "847432sUsZaD",
    "mint_button",
    "setVisible",
    "NFT_",
    "setOrigin",
    "skinsImages",
    "fetchBuySkin",
    "gameState",
    "paid",
    "MintNFTScene",
    "openInvoice",
    "skins",
    "clearTweens",
    "remove",
    "scene",
    "createNextButton",
    "isPlaying",
    "70px",
    "pixel",
    "#FFFFFF",
    "createMintNFTTextImage",
    "create",
    "shopData",
    "areButtonsBlocked",
    "backButton",
    "some",
  ];
  _0x4d21 = function () {
    return _0x3a91f8;
  };
  return _0x4d21();
}
