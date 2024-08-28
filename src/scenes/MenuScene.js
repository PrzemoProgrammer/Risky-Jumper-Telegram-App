function _0x2c01() {
  const _0x2a93bb = [
    "onStateChange",
    "Address",
    "3NWSvbf",
    "href",
    "audio",
    "Back.out",
    "informationWindow",
    "get",
    "Back.in",
    "cloudsMoveTween",
    "addPlayButton",
    "toString",
    "achievementsButton",
    "tg-wallet-icon",
    "19656cDPkVj",
    "4256036whoIok",
    "&text=",
    "Power2",
    "menuPlatform1",
    "restart",
    "Sine.easeInOut",
    "addRiskyJumperText",
    "scene",
    "addBackgroundComponents",
    "click",
    "launch",
    "setVisible",
    "stop",
    "isActive",
    "platform2",
    "play",
    "changeScene",
    "dailyReward",
    "TonConnectUI",
    "riskyJumperText",
    "swapPosition",
    "achivButton",
    "moveAnim",
    "playerMoveTween",
    "WebApp",
    "#000000",
    "getItem",
    "addAchievementsButton",
    "log",
    "remove",
    "walletAddressText",
    "connectWallet",
    "#FF0000",
    "modal",
    "heroIcon",
    "rankingButton",
    "playButtonTween",
    "game",
    "addHeroIcon",
    "3256iIKHlK",
    "SettingsScene",
    "slice",
    "json",
    "bringToTop",
    "add",
    "text",
    "7744485CGLsmX",
    "connectWalletButton",
    "onClick",
    "pixel",
    "RankingScene",
    "20px",
    "1379865ZSmNGh",
    "stopTweens",
    "Scene",
    "canClickPlay",
    "tileSprite",
    "🎁\x20Get\x201000\x20gold\x20welcome\x20gift",
    "playButton",
    "ground",
    "setState",
    "...",
    "shareButton",
    "?startapp=",
    "addConnectionProblemText",
    "2632qQyiZt",
    "#FFFFFF",
    "BackgroundScene",
    "addRankingButton",
    "image",
    "open",
    "tweens",
    "setOrigin",
    "205VOmXaE",
    "halfH",
    "pause",
    "update",
    "account",
    "location",
    "addPlatform1",
    "settingsButton",
    "MenuScene",
    "address",
    "createWalletAddressText",
    "initData",
    "platform1Tween",
    "createDailyReward",
    "createConnectWalletButton",
    "wallet-selected",
    "95680mcnQbS",
    "addPlatform2",
    "handleNextScene",
    "mainMenu",
    "referralReward",
    "removeTween",
    "50px",
    "PlayScene",
    "menuPlatform2",
    "closeReason",
    "resume",
    "checkConnectionStatus",
    "platform2Tween",
    "createInformationWindow",
    "updateAndDisplay",
    "isPaused",
    "151234ztbWbQ",
    "reward",
    "Telegram",
    "halfW",
    "setScale",
    "nickname",
    "1434HPzreN",
  ];
  _0x2c01 = function () {
    return _0x2a93bb;
  };
  return _0x2c01();
}
const _0x391dc5 = _0x5a3a;
function _0x5a3a(_0xe294a5, _0xdbbc8b) {
  const _0x2c0146 = _0x2c01();
  return (
    (_0x5a3a = function (_0x5a3a0b, _0x410e7d) {
      _0x5a3a0b = _0x5a3a0b - 0x1c6;
      let _0x254856 = _0x2c0146[_0x5a3a0b];
      return _0x254856;
    }),
    _0x5a3a(_0xe294a5, _0xdbbc8b)
  );
}
(function (_0xe52d16, _0x4a302e) {
  const _0xf559fa = _0x5a3a,
    _0xa54731 = _0xe52d16();
  while (!![]) {
    try {
      const _0x559fe2 =
        (-parseInt(_0xf559fa(0x203)) / 0x1) *
          (-parseInt(_0xf559fa(0x1fa)) / 0x2) +
        parseInt(_0xf559fa(0x244)) / 0x3 +
        -parseInt(_0xf559fa(0x210)) / 0x4 +
        (parseInt(_0xf559fa(0x1da)) / 0x5) *
          (-parseInt(_0xf559fa(0x200)) / 0x6) +
        -parseInt(_0xf559fa(0x23e)) / 0x7 +
        (parseInt(_0xf559fa(0x1d2)) / 0x8) *
          (-parseInt(_0xf559fa(0x20f)) / 0x9) +
        (-parseInt(_0xf559fa(0x1ea)) / 0xa) *
          (-parseInt(_0xf559fa(0x237)) / 0xb);
      if (_0x559fe2 === _0x4a302e) break;
      else _0xa54731["push"](_0xa54731["shift"]());
    } catch (_0x56ada3) {
      _0xa54731["push"](_0xa54731["shift"]());
    }
  }
})(_0x2c01, 0x976cb);
class MenuScene extends Phaser[_0x391dc5(0x1c7)] {
  constructor() {
    const _0x253c63 = _0x391dc5;
    super(_0x253c63(0x1e2));
  }
  ["create"]({ gameFetchData: _0x1389bf }) {
    const _0x429565 = _0x391dc5;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x429565(0x1fd)] = halfGameWidth),
      (this[_0x429565(0x1db)] = halfGameHeight),
      (this[_0x429565(0x1c8)] = ![]),
      (this[_0x429565(0x20a)] = null),
      (this[_0x429565(0x227)] = null),
      (this["playButtonTween"] = null),
      (this[_0x429565(0x1e6)] = null),
      (this[_0x429565(0x1f6)] = null),
      (this[_0x429565(0x205)] = this[_0x429565(0x235)]["audio"]),
      this[_0x429565(0x205)][_0x429565(0x1ed)][_0x429565(0x21f)](),
      (this["platform1"] = null),
      (this["platform2"] = null),
      (this[_0x429565(0x232)] = null),
      (this[_0x429565(0x1cc)] = null),
      this["addBackgroundComponents"](),
      (this[_0x429565(0x223)] = this[_0x429565(0x216)]()),
      (this[_0x429565(0x1cb)] = this["addPlayButton"]()),
      (this["settingsButton"] = this["addSettingsButton"]()),
      (this[_0x429565(0x233)] = this[_0x429565(0x1d5)]()),
      (this["achievementsButton"] = this[_0x429565(0x22b)]()),
      (this[_0x429565(0x221)] = this["createDailyReward"]()),
      (this["inviteFriendButton"] = this["createInviteFriendButton"]()),
      (this[_0x429565(0x23f)] = this["createConnectWalletButton"]()),
      (this["walletAddressText"] = this[_0x429565(0x1e4)]()),
      (this[_0x429565(0x207)] = this["createInformationWindow"]());
    if (_0x1389bf[_0x429565(0x1ee)])
      this[_0x429565(0x207)][_0x429565(0x1f8)](_0x1389bf["referralReward"]);
    this["fetchData"]();
  }
  [_0x391dc5(0x1e8)]() {
    const _0x440e6d = _0x391dc5,
      _0x4985aa = new Button(
        this,
        halfGameWidth - 0xdc,
        gameStartY + 0x1f4,
        _0x440e6d(0x20e)
      );
    return (
      _0x4985aa["onClick"](() => {
        const _0x590c0c = _0x440e6d;
        this[_0x590c0c(0x22f)]();
      }),
      _0x4985aa
    );
  }
  [_0x391dc5(0x1e4)]() {
    const _0x2ff87 = _0x391dc5,
      _0xc24f35 = "",
      _0x3e90b4 = this["add"]
        [_0x2ff87(0x23d)](halfGameWidth - 0x136, gameStartY + 0x32, _0xc24f35, {
          fontFamily: _0x2ff87(0x241),
          fontSize: _0x2ff87(0x243),
          color: _0x2ff87(0x1d3),
          stroke: _0x2ff87(0x229),
          strokeThickness: 0x5,
          shadow: { blur: 0x0, stroke: ![], fill: ![] },
        })
        [_0x2ff87(0x1d9)](0x0, 0x0)
        [_0x2ff87(0x21b)](![]);
    return _0x3e90b4;
  }
  async ["connectWallet"]() {
    const _0x2f6a07 = _0x391dc5,
      _0x561ae3 = new TonWeb(),
      _0x34edb7 = new TON_CONNECT_UI[_0x2f6a07(0x222)]({
        manifestUrl:
          window[_0x2f6a07(0x1df)]["origin"] + "/tonconnect-manifest.json",
      });
    _0x34edb7[_0x2f6a07(0x231)][_0x2f6a07(0x1d7)](),
      _0x34edb7[_0x2f6a07(0x231)][_0x2f6a07(0x201)]((_0x3ebac9) => {
        const _0x588c3e = _0x2f6a07;
        if (_0x3ebac9[_0x588c3e(0x1f3)] === _0x588c3e(0x1e9)) {
          this["connectWalletButton"][_0x588c3e(0x21b)](![]);
          const _0x68af4d = new _0x561ae3["utils"][_0x588c3e(0x202)](
              _0x34edb7[_0x588c3e(0x1de)][_0x588c3e(0x1e3)]
            )[_0x588c3e(0x20c)](!![]),
            _0x5cd7ae =
              _0x68af4d["slice"](0x0, 0x4) +
              _0x588c3e(0x1ce) +
              _0x68af4d[_0x588c3e(0x239)](-0x4);
          (this[_0x588c3e(0x22e)][_0x588c3e(0x23d)] = _0x5cd7ae),
            this[_0x588c3e(0x22e)][_0x588c3e(0x21b)](!![]),
            console["log"](_0x68af4d);
        }
      });
  }
  [_0x391dc5(0x1e7)]() {
    const _0x1d2419 = _0x391dc5,
      _0x473af8 = new DailyReward(
        this,
        halfGameWidth + 0xdc,
        gameStartY + 0x1f4
      );
    return (
      _0x473af8[_0x1d2419(0x1d6)][_0x1d2419(0x240)](async () => {
        const _0x41ddec = _0x1d2419;
        if (!this["dailyReward"][_0x41ddec(0x21d)]) return;
        this[_0x41ddec(0x221)][_0x41ddec(0x1cd)](![]);
        const _0x48877e = {
            id: localStorage[_0x41ddec(0x22a)]("id"),
            daily: !![],
          },
          _0x366318 = await (await CLAIM_REWARD(_0x48877e))[_0x41ddec(0x23a)]();
        this[_0x41ddec(0x207)]["updateAndDisplay"](_0x366318[_0x41ddec(0x1fb)]),
          this["dailyReward"]["update"](_0x366318);
      }),
      _0x473af8
    );
  }
  ["createInviteFriendButton"]() {
    const _0x30af5b = _0x391dc5,
      _0x2630ac = new Button(
        this,
        halfGameWidth + 0xdc,
        halfGameHeight + halfGameHeight / 0x2,
        _0x30af5b(0x1cf)
      );
    return (
      _0x2630ac[_0x30af5b(0x240)](async () => {
        const _0x54d1ee = _0x30af5b,
          _0x517436 = Telegram[_0x54d1ee(0x228)][_0x54d1ee(0x1e5)],
          _0x588fa9 = decodeURIComponent(_0x517436);
        console[_0x54d1ee(0x22c)](_0x588fa9);
        const _0x7eb3f1 = window[_0x54d1ee(0x1fc)][_0x54d1ee(0x228)],
          _0x40b1b2 = _0x7eb3f1["initDataUnsafe"]["user"]["id"],
          _0x161b03 = "https://t.me/RiskyJumperAppBot/RiskyJumper",
          _0x78fd7a = _0x161b03 + _0x54d1ee(0x1d0) + _0x40b1b2,
          _0xc1980c = encodeURIComponent(_0x54d1ee(0x1ca)),
          _0x921b40 =
            "https://t.me/share/url?url=" +
            _0x78fd7a +
            _0x54d1ee(0x211) +
            _0xc1980c;
        window["location"][_0x54d1ee(0x204)] = _0x921b40;
      }),
      _0x2630ac
    );
  }
  async ["fetchData"]() {
    const _0x407bff = _0x391dc5,
      _0x5c5c3d = { id: localStorage["getItem"]("id") },
      _0x3fd0b5 = await (await GAME_STATE(_0x5c5c3d))[_0x407bff(0x23a)](),
      { dailyReward: _0x19476b } = _0x3fd0b5;
    this[_0x407bff(0x221)][_0x407bff(0x1dd)](_0x19476b);
  }
  [_0x391dc5(0x1f7)]() {
    const _0x2e7c53 = _0x391dc5,
      _0x20023c = new InformationWindow(
        this,
        this[_0x2e7c53(0x1fd)],
        this[_0x2e7c53(0x1db)]
      );
    return _0x20023c;
  }
  [_0x391dc5(0x216)]() {
    const _0x11e0c8 = _0x391dc5,
      _0x396440 = this["add"]
        [_0x11e0c8(0x1d6)](this["halfW"], gameStartY + 0x64, _0x11e0c8(0x223))
        [_0x11e0c8(0x1d9)](0.5, 0x0)
        [_0x11e0c8(0x1fe)](0x0);
    return (
      this[_0x11e0c8(0x1d8)][_0x11e0c8(0x23c)]({
        targets: _0x396440,
        ease: _0x11e0c8(0x206),
        duration: 0x3e8,
        scale: 0x1,
      }),
      _0x396440
    );
  }
  ["addSettingsButton"]() {
    const _0x243685 = _0x391dc5,
      _0x14645f = new Button(
        this,
        halfGameWidth - 0xdc,
        gameHeight,
        _0x243685(0x1e1)
      )[_0x243685(0x240)](() => {
        const _0x5e26d5 = _0x243685;
        this[_0x5e26d5(0x205)][_0x5e26d5(0x219)][_0x5e26d5(0x21f)](),
          this[_0x5e26d5(0x217)][_0x5e26d5(0x23b)](_0x5e26d5(0x238)),
          this[_0x5e26d5(0x217)][_0x5e26d5(0x21b)](!![], _0x5e26d5(0x238)),
          this[_0x5e26d5(0x217)][_0x5e26d5(0x1f4)](_0x5e26d5(0x238)),
          !this[_0x5e26d5(0x217)][_0x5e26d5(0x1f9)](_0x5e26d5(0x238)) &&
            this[_0x5e26d5(0x217)][_0x5e26d5(0x21a)](_0x5e26d5(0x238));
      });
    return (
      this[_0x243685(0x1d8)]["add"]({
        targets: _0x14645f,
        ease: _0x243685(0x206),
        duration: 0x320,
        y: halfGameHeight + 0x1f4,
      }),
      _0x14645f
    );
  }
  [_0x391dc5(0x1d5)]() {
    const _0x3dbb12 = _0x391dc5,
      _0x423733 = new Button(
        this,
        this[_0x3dbb12(0x1fd)],
        gameHeight,
        _0x3dbb12(0x233)
      )["onClick"](() => {
        const _0x48a7a1 = _0x3dbb12;
        this[_0x48a7a1(0x205)][_0x48a7a1(0x219)]["play"](),
          this[_0x48a7a1(0x220)](_0x48a7a1(0x242), _0x48a7a1(0x1e2));
      });
    return (
      this[_0x3dbb12(0x1d8)]["add"]({
        targets: _0x423733,
        ease: _0x3dbb12(0x206),
        duration: 0x320,
        y: halfGameHeight + 0x1f4,
      }),
      _0x423733
    );
  }
  [_0x391dc5(0x22b)]() {
    const _0xc58a73 = _0x391dc5,
      _0x27054d = new Button(
        this,
        halfGameWidth + 0xdc,
        gameHeight,
        _0xc58a73(0x225)
      )[_0xc58a73(0x240)](() => {
        const _0x2e841f = _0xc58a73;
        this[_0x2e841f(0x205)][_0x2e841f(0x219)][_0x2e841f(0x21f)](),
          this[_0x2e841f(0x220)]("RankScene", _0x2e841f(0x1e2));
      });
    return (
      this[_0xc58a73(0x1d8)][_0xc58a73(0x23c)]({
        targets: _0x27054d,
        ease: _0xc58a73(0x206),
        duration: 0x320,
        y: halfGameHeight + 0x1f4,
      }),
      _0x27054d
    );
  }
  ["changeScene"](_0x29fbf9, _0x48a8ed) {
    const _0xa139a3 = _0x391dc5;
    if (!this[_0xa139a3(0x217)][_0xa139a3(0x1f9)](_0x29fbf9)) {
      this[_0xa139a3(0x217)][_0xa139a3(0x21a)](_0x29fbf9, {
        currentScene: _0x48a8ed,
      }),
        this["scene"][_0xa139a3(0x23b)](_0x29fbf9);
      return;
    }
    const _0x575f88 = this[_0xa139a3(0x217)][_0xa139a3(0x208)](_0x29fbf9);
    this[_0xa139a3(0x217)][_0xa139a3(0x1dc)](),
      this[_0xa139a3(0x217)][_0xa139a3(0x21b)](![], _0x48a8ed),
      this[_0xa139a3(0x217)][_0xa139a3(0x21b)](!![], _0x29fbf9),
      _0x575f88[_0xa139a3(0x217)][_0xa139a3(0x214)]({
        currentScene: _0x48a8ed,
      }),
      this["scene"][_0xa139a3(0x23b)](_0x29fbf9);
  }
  [_0x391dc5(0x218)]() {
    const _0x11440c = _0x391dc5;
    this[_0x11440c(0x1e0)](
      this[_0x11440c(0x1fd)] - 0x96,
      this["gh"] - this["gh"] / 0x3
    ),
      this[_0x11440c(0x1eb)](
        this[_0x11440c(0x1fd)] + 0xc8,
        this["gh"] - this["gh"] / 0x3 - 0xc8
      ),
      this["addHeroIcon"](this[_0x11440c(0x1fd)], this[_0x11440c(0x1db)]),
      this["addGround"](gameStartX, gameHeight);
  }
  ["addPlatform1"](_0x39ac65, _0x45981a) {
    const _0x20a727 = _0x391dc5,
      _0x5bab59 = this[_0x20a727(0x23c)]
        [_0x20a727(0x1d6)](_0x39ac65, gameHeight, _0x20a727(0x213))
        [_0x20a727(0x1d9)](0.5, 0x0);
    (this["platform1"] = _0x5bab59),
      this[_0x20a727(0x1d8)][_0x20a727(0x23c)]({
        targets: _0x5bab59,
        ease: _0x20a727(0x206),
        duration: 0x44c,
        y: _0x45981a,
        onComplete: () => {
          const _0x4a8228 = _0x20a727,
            _0x185008 = {
              target: _0x5bab59,
              x: _0x5bab59["x"] - 0x14,
              y: _0x5bab59["y"] + 0xf,
              time: 0x7d0,
            };
          this[_0x4a8228(0x1e6)] = this[_0x4a8228(0x226)](_0x185008);
        },
      });
  }
  ["addPlatform2"](_0x19092, _0x3efd50) {
    const _0x1f017b = _0x391dc5,
      _0x141a38 = this["add"]
        ["image"](_0x19092, gameHeight, _0x1f017b(0x1f2))
        [_0x1f017b(0x1d9)](0.5, 0x0);
    (this[_0x1f017b(0x21e)] = _0x141a38),
      this[_0x1f017b(0x1d8)]["add"]({
        targets: _0x141a38,
        ease: _0x1f017b(0x206),
        duration: 0x514,
        y: _0x3efd50,
        onComplete: () => {
          const _0x2b3910 = _0x1f017b,
            _0x1a7994 = {
              target: _0x141a38,
              x: _0x141a38["x"] - 0x14,
              y: _0x141a38["y"] + 0xf,
              time: 0x9c4,
            };
          this[_0x2b3910(0x1f6)] = this["moveAnim"](_0x1a7994);
        },
      });
  }
  [_0x391dc5(0x236)](_0x9acd3, _0x4bf72d) {
    const _0xf16b87 = _0x391dc5,
      _0x5df77b = this[_0xf16b87(0x23c)]
        ["image"](_0x9acd3, 0x0, "heroMenuIcon")
        ["setOrigin"](0.5, 0.5)
        [_0xf16b87(0x1fe)](0x3);
    (this[_0xf16b87(0x232)] = _0x5df77b),
      this[_0xf16b87(0x1d8)]["add"]({
        targets: _0x5df77b,
        ease: _0xf16b87(0x206),
        duration: 0x5dc,
        y: _0x4bf72d,
        scale: 0x1,
        onComplete: () => {
          const _0xaed262 = _0xf16b87;
          this[_0xaed262(0x1c8)] = !![];
          const _0x4fa700 = {
            target: _0x5df77b,
            x: _0x5df77b["x"] - 0x14,
            y: _0x5df77b["y"] + 0xf,
            time: 0x898,
          };
          this["playerMoveTween"] = this[_0xaed262(0x226)](_0x4fa700);
        },
      });
  }
  ["addGround"](_0xf4649f, _0x340aed) {
    const _0x4bf368 = _0x391dc5;
    this["ground"] = this[_0x4bf368(0x23c)]
      [_0x4bf368(0x1c9)](
        _0xf4649f,
        _0x340aed,
        gameWidth + deltaX,
        0x37,
        _0x4bf368(0x1cc)
      )
      [_0x4bf368(0x1d9)](0x0, 0x1);
  }
  [_0x391dc5(0x226)]({
    target: _0x2c857f,
    x: _0x4b19fa,
    y: _0xba477d,
    time: _0x14fd96,
    ease: ease = _0x391dc5(0x215),
  }) {
    const _0x4c0efa = _0x391dc5;
    return this[_0x4c0efa(0x1d8)]["add"]({
      targets: _0x2c857f,
      x: _0x4b19fa,
      y: _0xba477d,
      ease: ease,
      duration: _0x14fd96,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x391dc5(0x20b)]() {
    const _0x214ac6 = _0x391dc5,
      _0xe61dc3 = new Button(this, halfGameWidth, gameHeight, _0x214ac6(0x1cb))[
        _0x214ac6(0x240)
      ](() => {
        const _0x33f8c0 = _0x214ac6;
        if (this[_0x33f8c0(0x1c8)]) this["handleNextScene"]();
        this["canClickPlay"] = ![];
      });
    return (
      this["tweens"]["add"]({
        targets: _0xe61dc3,
        ease: _0x214ac6(0x206),
        duration: 0x1f4,
        y: halfGameHeight + halfGameHeight / 0x2,
        onComplete: () => {
          const _0x446ba2 = _0x214ac6;
          this[_0x446ba2(0x234)] = this["tweens"]["add"]({
            targets: _0xe61dc3,
            ease: _0x446ba2(0x212),
            scaleX: 1.1,
            scaleY: 1.1,
            duration: 0x1f4,
            yoyo: !![],
            repeat: -0x1,
          });
        },
      }),
      _0xe61dc3
    );
  }
  [_0x391dc5(0x1d1)](_0x43b294, _0x459188) {
    const _0x3bcba5 = _0x391dc5,
      _0x4ab6cd =
        "Nick\x20couldn\x27t\x20be\x20saved\x0adue\x20to\x20a\x20connection\x20problem";
    this["connectionStatus"] = this[_0x3bcba5(0x23c)]
      [_0x3bcba5(0x23d)](_0x43b294, _0x459188, _0x4ab6cd, {
        fontFamily: "Arial",
        fontSize: _0x3bcba5(0x1f0),
        color: _0x3bcba5(0x230),
        stroke: _0x3bcba5(0x230),
        strokeThickness: 0x3,
        shadow: { blur: 0x0, stroke: ![], fill: ![] },
      })
      [_0x3bcba5(0x1d9)](0.5, 0.5);
  }
  [_0x391dc5(0x1f5)]() {
    const _0x88c9a7 = _0x391dc5;
    if (localStorage[_0x88c9a7(0x22a)](_0x88c9a7(0x1ff))) return;
    this[_0x88c9a7(0x1d1)](this[_0x88c9a7(0x1fd)], this[_0x88c9a7(0x1db)]);
  }
  [_0x391dc5(0x1ec)]() {
    const _0x37ff8c = _0x391dc5;
    this[_0x37ff8c(0x205)]["click"][_0x37ff8c(0x21f)](),
      this[_0x37ff8c(0x1c6)](),
      this[_0x37ff8c(0x221)][_0x37ff8c(0x21c)]();
    const _0x33d7a9 = this[_0x37ff8c(0x217)][_0x37ff8c(0x208)](
      _0x37ff8c(0x1d4)
    );
    _0x33d7a9[_0x37ff8c(0x1ef)](),
      this[_0x37ff8c(0x1d8)][_0x37ff8c(0x23c)]({
        targets: this["riskyJumperText"],
        ease: _0x37ff8c(0x209),
        duration: 0x12c,
        scale: 0x0,
      }),
      this[_0x37ff8c(0x1d8)][_0x37ff8c(0x23c)]({
        targets: [
          this[_0x37ff8c(0x1e1)],
          this[_0x37ff8c(0x233)],
          this[_0x37ff8c(0x20d)],
        ],
        ease: "Back.in",
        duration: 0xc8,
        y: gameHeight + 0xc8,
      }),
      this["tweens"][_0x37ff8c(0x23c)]({
        targets: [this["platform1"], this["playButton"]],
        ease: _0x37ff8c(0x209),
        duration: 0x190,
        y: gameHeight + 0xc8,
      }),
      this[_0x37ff8c(0x1d8)]["add"]({
        targets: this["dailyReward"],
        ease: _0x37ff8c(0x209),
        duration: 0x1c2,
        y: gameHeight,
      }),
      this[_0x37ff8c(0x1d8)]["add"]({
        targets: this[_0x37ff8c(0x21e)],
        ease: "Back.in",
        duration: 0x12c,
        y: gameHeight,
      }),
      this[_0x37ff8c(0x1d8)][_0x37ff8c(0x23c)]({
        targets: this["heroIcon"],
        ease: "Back.in",
        duration: 0x1f4,
        y: 0x0,
        scale: 0x3,
        onComplete: () => {
          const _0x597479 = _0x37ff8c;
          this["audio"][_0x597479(0x1ed)][_0x597479(0x21c)](),
            this[_0x597479(0x217)][_0x597479(0x22d)]("BackgroundScene"),
            this[_0x597479(0x217)]
              ["sleep"](_0x597479(0x1e2))
              [_0x597479(0x1f4)]("PlayScene")
              [_0x597479(0x224)]("MenuScene", _0x597479(0x1f1)),
            this[_0x597479(0x217)][_0x597479(0x22d)](_0x597479(0x1e2));
        },
      });
  }
  [_0x391dc5(0x1c6)]() {
    const _0x37820c = _0x391dc5;
    this[_0x37820c(0x227)][_0x37820c(0x22d)](),
      this[_0x37820c(0x234)][_0x37820c(0x22d)](),
      this["platform1Tween"]["remove"](),
      this[_0x37820c(0x1f6)][_0x37820c(0x22d)](),
      (this["playerMoveTween"] = null),
      (this[_0x37820c(0x234)] = null),
      (this[_0x37820c(0x1e6)] = null),
      (this[_0x37820c(0x1f6)] = null);
  }
}
