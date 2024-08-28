function _0x4cc9() {
  const _0x27d796 = [
    "collider",
    "calculateLastPlatformPosition",
    "scene",
    "onClick",
    "PlayScene",
    "join",
    "launch",
    "updateGame",
    "stopPropagation",
    "54616xiKqRv",
    "increaseNumberOfPlatforms",
    "pointerdown",
    "body",
    "addPlatform",
    "211395qXYcVG",
    "skeleton",
    "636TpXzRH",
    "world",
    "achievementsButton",
    "updateScore",
    "RankingScene",
    "floor_",
    "setDepth",
    "playPlayerEntryAnimation",
    "Quad.out",
    "bringToTop",
    "isPlayerCollidePlatform",
    "move",
    "setVisible",
    "audio",
    "nickname",
    "numberOfPlatformsForChangeTheme",
    "layer2",
    "player_",
    "50DaaGfV",
    "gameObjectsMoveBackSpeed",
    "bgColorIndex",
    "sendRequestUpdateScore",
    "forEach",
    "changeResponseText",
    "lostScreen",
    "input",
    "updateColorIndex",
    "RankScene",
    "moveClouds",
    "getItemFromLocalStorage",
    "Math",
    "bounceTween",
    "platforms",
    "isFallingDown",
    "setText",
    "platformThemeIndex",
    "allNumberOfPlatformsInGame",
    "ground",
    "randomNumber",
    "setImmovable",
    "bestScore",
    "moveBackground",
    "playStartSceneTween",
    "length",
    "random",
    "setDisplaySize",
    "play",
    "resetPlatformPositionX",
    "setItem",
    "create",
    "layer1",
    "setTint",
    "shareButton",
    "movePlatforms",
    "Between",
    "378153EiPLqe",
    "setZoom",
    "bounce",
    "platformThemes",
    "physics",
    "fall",
    "pauseButton",
    "tileSprite",
    "isLandscape",
    "addPlatformTextures",
    "click",
    "json",
    "image",
    "addPlayer",
    "push",
    "3105726xQFJUg",
    "90px",
    "pause",
    "pixel",
    "tilePositionX",
    "updateGameTheme",
    "halfH",
    "score",
    "add",
    "updatePlatforms",
    "onFloor",
    "552932kwESZX",
    "bgElementsBackSpeed",
    "bg2",
    "displayWidth",
    "main",
    "changePlayerSkin",
    "tweens",
    "bg_color",
    "canJump",
    "addPauseButton",
    "addGround",
    "skin_ID",
    "addLostScreen",
    "floor",
    "enableBody",
    "addPlatforms",
    "isTouchingRight",
    "alpha",
    "getPosition",
    "scoreText",
    "addBackground",
    "changeSkin",
    "PauseScene",
    "jump",
    "restart",
    "movePlayer",
    "moveTween",
    "rankingButton",
    "cameras",
    "454174OHBnks",
    "#FFFFFF",
    "container",
    "setOrigin",
    "bg1",
    "setupGame",
    "shift",
    "useNextPlatformTheme",
    "text",
    "setAlpha",
    "isGameOver",
    "player",
    "isPaused",
    "initLostGame",
    "5277HRpvSl",
    "861arTOpg",
    "getItem",
    "idle",
    "pointerup",
    "get",
    "moveGround",
    "changeScene",
    "addTutorial",
    "addScore",
  ];
  _0x4cc9 = function () {
    return _0x27d796;
  };
  return _0x4cc9();
}
const _0x2f1794 = _0x16a0;
(function (_0x3e6cbb, _0x3bcb7c) {
  const _0x39b25f = _0x16a0,
    _0x188a7b = _0x3e6cbb();
  while (!![]) {
    try {
      const _0x2d07a7 =
        parseInt(_0x39b25f(0x129)) / 0x1 +
        -parseInt(_0x39b25f(0xb0)) / 0x2 +
        (-parseInt(_0x39b25f(0xbe)) / 0x3) *
          (-parseInt(_0x39b25f(0xd8)) / 0x4) +
        parseInt(_0x39b25f(0xd6)) / 0x5 +
        parseInt(_0x39b25f(0x11e)) / 0x6 +
        (parseInt(_0x39b25f(0xbf)) / 0x7) * (-parseInt(_0x39b25f(0xd1)) / 0x8) +
        (parseInt(_0x39b25f(0x10f)) / 0x9) * (parseInt(_0x39b25f(0xea)) / 0xa);
      if (_0x2d07a7 === _0x3bcb7c) break;
      else _0x188a7b["push"](_0x188a7b["shift"]());
    } catch (_0x39bc3d) {
      _0x188a7b["push"](_0x188a7b["shift"]());
    }
  }
})(_0x4cc9, 0x82cee);
function _0x16a0(_0xd58ae3, _0x4bc582) {
  const _0x4cc9eb = _0x4cc9();
  return (
    (_0x16a0 = function (_0x16a0ed, _0x217ca4) {
      _0x16a0ed = _0x16a0ed - 0x95;
      let _0x8c706a = _0x4cc9eb[_0x16a0ed];
      return _0x8c706a;
    }),
    _0x16a0(_0xd58ae3, _0x4bc582)
  );
}
class PlayScene extends Phaser["Scene"] {
  constructor() {
    const _0x5e99dc = _0x16a0;
    super(_0x5e99dc(0xcc));
  }
  [_0x2f1794(0x109)]() {
    const _0x2cae9c = _0x2f1794;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this["halfW"] = halfGameWidth),
      (this[_0x2cae9c(0x124)] = halfGameHeight),
      (this["halfHeightScreen"] = this[_0x2cae9c(0x124)]),
      (this[_0x2cae9c(0xe5)] = this["game"]["audio"]),
      (this[_0x2cae9c(0xf8)] = []),
      (this["isGameOver"] = !![]),
      (this["isLandscape"] = ![]),
      (this["platformsAreMoving"] = ![]),
      (this[_0x2cae9c(0xe2)] = ![]),
      (this["resetPlatformPositionX"] = 0x398 - deltaX),
      (this[_0x2cae9c(0x100)] = this[_0x2cae9c(0xf5)]("bestScore") || 0x0),
      (this[_0x2cae9c(0x125)] = 0x0),
      (this[_0x2cae9c(0x112)] = platformThemes),
      (this[_0x2cae9c(0xeb)] = 0x14),
      (this["bgElementsBackSpeed"] = this[_0x2cae9c(0xeb)] / 0x4),
      (this[_0x2cae9c(0xe7)] = 0xa),
      (this["allNumberOfPlatformsInGame"] = 0x0),
      (this["bgColorIndex"] = 0x0),
      (this[_0x2cae9c(0xfb)] = 0x0),
      this[_0x2cae9c(0xa7)](),
      this[_0x2cae9c(0x11c)](),
      this[_0x2cae9c(0xa2)](),
      this[_0x2cae9c(0x9d)](),
      this[_0x2cae9c(0xc7)](),
      this[_0x2cae9c(0xcb)](),
      (this[_0x2cae9c(0x115)] = this["addPauseButton"]()),
      this["addTutorial"](),
      this[_0x2cae9c(0xbb)]["startEntryGameAim"](() => {
        this["isGameOver"] = ![];
      }),
      this[_0x2cae9c(0xaf)][_0x2cae9c(0x97)][_0x2cae9c(0x110)](
        calculateVerticalScaleFactor()
      ),
      this[_0x2cae9c(0x102)]();
  }
  ["update"]() {
    const _0x10299 = _0x2f1794;
    this[_0x10299(0xf4)]();
    if (this[_0x10299(0xba)]) return;
    this[_0x10299(0xcf)]();
    if (this["player"][_0x10299(0xa3)]())
      this[_0x10299(0xbb)][_0x10299(0x111)]("right");
    if (
      this["player"][_0x10299(0xf9)]() &&
      !this[_0x10299(0xbb)][_0x10299(0x9b)]
    )
      this[_0x10299(0xbb)][_0x10299(0x114)]();
  }
  [_0x2f1794(0xa7)]() {
    const _0x5cfc76 = _0x2f1794;
    (this["bg"] = this["add"]
      [_0x5cfc76(0x11b)](gameStartX, gameStartY, "bg1")
      ["setOrigin"](0x0, 0x0)
      [_0x5cfc76(0x105)](gameWidth + deltaX, gameHeight + deltaY)
      [_0x5cfc76(0x10b)](
        this["platformThemes"][this["bgColorIndex"]][_0x5cfc76(0x9a)]
      )),
      this[_0x5cfc76(0xf2)](),
      (this[_0x5cfc76(0x95)] = this[_0x5cfc76(0x126)]
        [_0x5cfc76(0x11b)](gameStartX, gameStartY, _0x5cfc76(0xb4))
        [_0x5cfc76(0xb3)](0x0, 0x0)
        ["setDisplaySize"](gameWidth + deltaX, gameHeight + deltaY)
        ["setTint"](
          this["platformThemes"][this[_0x5cfc76(0xec)]][_0x5cfc76(0x9a)]
        )
        [_0x5cfc76(0xb9)](0x0)),
      (this["layer1"] = this["add"]
        ["tileSprite"](
          gameStartX,
          gameHeight + 0x3e8,
          gameWidth + deltaX,
          0x411,
          _0x5cfc76(0x10a)
        )
        [_0x5cfc76(0xb3)](0x0, 0x1)),
      (this[_0x5cfc76(0xe8)] = this[_0x5cfc76(0x126)]
        [_0x5cfc76(0x116)](
          gameStartX,
          gameStartY - 0x64,
          gameWidth + deltaX,
          0x15a,
          _0x5cfc76(0xe8)
        )
        [_0x5cfc76(0xb3)](0x0, 0x0));
  }
  ["getItemFromLocalStorage"](_0x32d9f3) {
    const _0x5a804b = _0x2f1794;
    return Number(localStorage[_0x5a804b(0xc0)](_0x32d9f3));
  }
  [_0x2f1794(0x118)]() {
    const _0x2861e0 = _0x2f1794;
    let _0x354cc6 = [];
    for (let _0x56fe33 = 0x1; _0x56fe33 <= 0x7; _0x56fe33++) {
      _0x354cc6[_0x2861e0(0x11d)](_0x2861e0(0xdd) + _0x56fe33);
    }
    return _0x354cc6;
  }
  [_0x2f1794(0xf4)]() {
    this["layer2"]["tilePositionX"] += 0x1;
  }
  ["updateColorIndex"]() {
    const _0x57dba4 = _0x2f1794;
    this[_0x57dba4(0xec)] += 0x1;
    if (this["bgColorIndex"] === this[_0x57dba4(0x112)][_0x57dba4(0x103)])
      this[_0x57dba4(0xec)] = 0x0;
  }
  ["useNextPlatformTheme"]() {
    const _0x2ff742 = _0x2f1794;
    this["platformThemeIndex"] += 0x1;
    if (this[_0x2ff742(0xfb)] === this["platformThemes"][_0x2ff742(0x103)])
      this[_0x2ff742(0xfb)] = 0x0;
  }
  [_0x2f1794(0x123)]() {
    const _0xe3c3c2 = _0x2f1794,
      _0x1740b5 = this["numberOfPlatformsForChangeTheme"];
    if (this[_0xe3c3c2(0xfc)] % _0x1740b5 === 0x0) this[_0xe3c3c2(0xb7)]();
    if (this[_0xe3c3c2(0x125)] % _0x1740b5 || !this[_0xe3c3c2(0x125)]) return;
    this["updateColorIndex"]();
    const _0x3a289f =
        this[_0xe3c3c2(0x95)][_0xe3c3c2(0xa4)] === 0x0
          ? this["bg"]
          : this[_0xe3c3c2(0x95)],
      _0x33da91 = _0x3a289f === this["bg"] ? 0x1 : 0x0;
    this["tweens"][_0xe3c3c2(0x126)]({
      targets: this["bg2"],
      alpha: _0x33da91,
      duration: 0x3e8,
      ease: "Linear",
      onComplete: () => {
        const _0x28268c = _0xe3c3c2;
        _0x3a289f["setTint"](
          this["platformThemes"][this[_0x28268c(0xec)]][_0x28268c(0x9a)]
        );
      },
    });
  }
  [_0x2f1794(0x11c)]() {
    const _0x279e62 = _0x2f1794,
      _0x20b008 = localStorage["getItem"](_0x279e62(0x9e));
    this[_0x279e62(0xbb)] = new Player(
      this,
      gameStartX - 0x46,
      halfGameHeight,
      _0x279e62(0xe9) + _0x20b008,
      _0x20b008
    );
  }
  ["addPlatform"](_0x3964bd) {
    const _0x2a773b = _0x2f1794,
      _0xd2751b = {
        x: 0x1c2 * _0x3964bd + 0x172 - deltaX,
        y: this["randomNumber"](halfGameHeight - 0xa0, halfGameHeight + 0xa0),
        w: 0x12c - this[_0x2a773b(0xfc)] * 0x3,
        h: gameHeight,
        theme: this["platformThemes"][this[_0x2a773b(0xfb)]],
      };
    let _0x3455b9 = new Platform(this, _0xd2751b);
    this[_0x2a773b(0xf8)][_0x2a773b(0x11d)](_0x3455b9),
      this["physics"]["add"][_0x2a773b(0xc8)](
        this[_0x2a773b(0xbb)],
        _0x3455b9[_0x2a773b(0xd7)],
        (_0x4bae84, _0x3e6569) => {
          const _0xa617d0 = _0x2a773b;
          _0x4bae84["body"][_0xa617d0(0x128)]() &&
            this[_0xa617d0(0xe2)] &&
            ((this[_0xa617d0(0xe2)] = ![]),
            _0x4bae84[_0xa617d0(0xc1)](),
            _0x3455b9[_0xa617d0(0xf7)]());
        }
      );
  }
  ["addPlatforms"]() {
    const _0x28b0a8 = _0x2f1794;
    this["addFirstPlatform"](), this[_0x28b0a8(0xd2)]();
    let _0x36f30c = 0x0;
    for (let _0x39cf24 = _0x36f30c; _0x39cf24 <= 0x1; _0x39cf24++) {
      this[_0x28b0a8(0xd5)](_0x39cf24),
        this[_0x28b0a8(0xd2)](),
        this["updateGameTheme"](),
        _0x36f30c++;
    }
    while (this[_0x28b0a8(0xc9)]() < gameWidth - 0x1f4) {
      this["addPlatform"](_0x36f30c),
        this[_0x28b0a8(0xd2)](),
        this[_0x28b0a8(0x123)](),
        _0x36f30c++;
      if (this[_0x28b0a8(0x117)]) continue;
      this[_0x28b0a8(0x117)] = !![];
    }
  }
  ["addFirstPlatform"]() {
    const _0x42000b = _0x2f1794,
      _0x57a7d6 = {
        x: gameStartX - 0x64,
        y: halfGameHeight,
        w: 0x12c,
        h: this["gh"],
        theme: this[_0x42000b(0x112)][this[_0x42000b(0xfb)]],
        firstPlatform: !![],
      },
      _0x2b3d5c = new Platform(this, _0x57a7d6);
    this[_0x42000b(0x113)]["add"]["collider"](
      this["player"],
      _0x2b3d5c["skeleton"],
      (_0x182ffb, _0x26b06d) => {
        const _0x36bf76 = _0x42000b;
        _0x182ffb[_0x36bf76(0xd4)][_0x36bf76(0x128)]() &&
          this[_0x36bf76(0xe2)] &&
          ((this[_0x36bf76(0xe2)] = ![]),
          _0x182ffb[_0x36bf76(0xc1)](),
          _0x2b3d5c[_0x36bf76(0xf7)]());
      }
    ),
      this[_0x42000b(0xf8)][_0x42000b(0x11d)](_0x2b3d5c);
  }
  [_0x2f1794(0xd2)]() {
    this["allNumberOfPlatformsInGame"] += 0x1;
  }
  [_0x2f1794(0x9d)]() {
    const _0x49dbbe = _0x2f1794;
    (this["ground"] = this[_0x49dbbe(0x126)]
      [_0x49dbbe(0x116)](
        gameStartX,
        gameHeight,
        gameWidth + deltaX + 0xc8,
        0x37,
        _0x49dbbe(0xfd)
      )
      [_0x49dbbe(0xb3)](0x0, 0x1)
      [_0x49dbbe(0xde)](0x1)),
      this["physics"][_0x49dbbe(0xd9)][_0x49dbbe(0xa1)](this[_0x49dbbe(0xfd)]),
      (this["ground"][_0x49dbbe(0xd4)]["allowGravity"] = ![]),
      this["ground"][_0x49dbbe(0xd4)][_0x49dbbe(0xff)](!![]),
      this[_0x49dbbe(0x113)][_0x49dbbe(0x126)][_0x49dbbe(0xc8)](
        this[_0x49dbbe(0xbb)],
        this["ground"],
        null,
        () => {
          const _0x5b52cb = _0x49dbbe;
          if (this[_0x5b52cb(0xba)]) return;
          this["initLostGame"]();
        }
      );
  }
  [_0x2f1794(0xc4)]() {
    const _0x56838b = _0x2f1794;
    this[_0x56838b(0xfd)][_0x56838b(0x122)] += this["gameObjectsMoveBackSpeed"];
  }
  [_0x2f1794(0xcb)]() {
    const _0x4296b9 = _0x2f1794;
    this[_0x4296b9(0xf1)]
      ["on"](
        _0x4296b9(0xd3),
        function () {
          const _0x1a528c = _0x4296b9;
          this[_0x1a528c(0xbb)]["preparing"]();
        },
        this
      )
      ["on"](
        _0x4296b9(0xc2),
        function () {
          const _0x20a72b = _0x4296b9;
          (this["isPlayerCollidePlatform"] = !![]),
            (this["platformsAreMoving"] = ![]),
            this[_0x20a72b(0xbb)][_0x20a72b(0xaa)]();
        },
        this
      );
  }
  ["generateId"]() {
    const _0x131ac8 = _0x2f1794;
    let _0x318dc5 = [];
    for (let _0x3d561e = 0x0; _0x3d561e < 0xa; _0x3d561e++) {
      _0x318dc5[_0x131ac8(0x11d)](
        Math[_0x131ac8(0xa0)](Math[_0x131ac8(0x104)]() * 0x64)
      );
    }
    const _0x30dde7 = _0x318dc5[_0x131ac8(0xcd)]("");
    return localStorage[_0x131ac8(0x108)]("id", _0x30dde7), _0x30dde7;
  }
  [_0x2f1794(0xbd)]() {
    const _0x11de69 = _0x2f1794;
    (this[_0x11de69(0xba)] = !![]),
      this[_0x11de69(0xbb)]["dead"](),
      this[_0x11de69(0x9f)]();
  }
  [_0x2f1794(0x9f)]() {
    const _0x512eda = _0x2f1794;
    (this[_0x512eda(0xf0)] = new LostScreen(
      this,
      this[_0x512eda(0x125)],
      this[_0x512eda(0x100)]
    )),
      this[_0x512eda(0xfd)]["setDepth"](0x0),
      this["scoreText"][_0x512eda(0xe4)](![]),
      this["lostScreen"]["replayButton"][_0x512eda(0xcb)](() => {
        const _0x4735ac = _0x512eda;
        this["platforms"]["forEach"]((_0x1d786d) => {
          const _0x2cbc70 = _0x16a0;
          _0x1d786d[_0x2cbc70(0xad)] = null;
        }),
          this[_0x4735ac(0xe5)][_0x4735ac(0x119)][_0x4735ac(0x106)](),
          this[_0x4735ac(0xca)][_0x4735ac(0xab)]();
      }),
      this["lostScreen"][_0x512eda(0xda)][_0x512eda(0xcb)](() => {
        const _0x246576 = _0x512eda;
        this["audio"][_0x246576(0x119)][_0x246576(0x106)](),
          this["scene"][_0x246576(0xe4)](!![], _0x246576(0xf3)),
          this[_0x246576(0xc5)](_0x246576(0xf3), _0x246576(0xcc));
      }),
      this["lostScreen"][_0x512eda(0xae)]["onClick"](() => {
        const _0x4a7753 = _0x512eda;
        this["audio"][_0x4a7753(0x119)][_0x4a7753(0x106)](),
          this[_0x4a7753(0xca)][_0x4a7753(0xe4)](!![], _0x4a7753(0xdc)),
          this[_0x4a7753(0xc5)](_0x4a7753(0xdc), "PlayScene");
      }),
      this["lostScreen"][_0x512eda(0x10c)][_0x512eda(0xcb)](() => {
        const _0x312a84 = _0x512eda;
        this[_0x312a84(0xe5)][_0x312a84(0x119)][_0x312a84(0x106)](),
          this[_0x312a84(0xed)]();
      });
  }
  async [_0x2f1794(0xed)]() {
    const _0x1cb4e3 = _0x2f1794,
      _0x2c4309 = {
        score: this[_0x1cb4e3(0xf5)](_0x1cb4e3(0x100)),
        nick: localStorage[_0x1cb4e3(0xc0)](_0x1cb4e3(0xe6)),
        id: this[_0x1cb4e3(0xf5)]("id"),
      };
    try {
      const _0x5e91d2 = await (
        await UPDATE_SCORE(_0x2c4309)
      )[_0x1cb4e3(0x11a)]();
      _0x5e91d2
        ? this[_0x1cb4e3(0xf0)][_0x1cb4e3(0xef)](!![])
        : this["lostScreen"][_0x1cb4e3(0xef)](![]);
    } catch (_0x97e5c0) {
      this["lostScreen"][_0x1cb4e3(0xef)](![]);
    }
  }
  [_0x2f1794(0xdb)]() {
    const _0x1fe9be = _0x2f1794;
    (this["score"] += 0x1),
      this[_0x1fe9be(0xa6)][_0x1fe9be(0xfa)](this["score"]);
  }
  [_0x2f1794(0x101)]() {
    const _0x4ae7c0 = _0x2f1794;
    (this["layer1"][_0x4ae7c0(0x122)] += this[_0x4ae7c0(0x12a)]),
      (this[_0x4ae7c0(0xe8)][_0x4ae7c0(0x122)] += this[_0x4ae7c0(0x12a)]);
  }
  [_0x2f1794(0x10d)]() {
    const _0x5c2cbe = _0x2f1794;
    this["platforms"][_0x5c2cbe(0xee)]((_0x54437d) => {
      _0x54437d["move"](-this["gameObjectsMoveBackSpeed"]);
    });
  }
  ["movePlayer"]() {
    const _0xa6d5c1 = _0x2f1794;
    this[_0xa6d5c1(0xbb)][_0xa6d5c1(0xe3)](-this[_0xa6d5c1(0xeb)]);
  }
  [_0x2f1794(0xb5)]() {
    const _0x5fc05c = _0x2f1794;
    this[_0x5fc05c(0x10d)](),
      this[_0x5fc05c(0xac)](),
      this[_0x5fc05c(0x101)](),
      this[_0x5fc05c(0xc4)]();
  }
  ["updateGame"]() {
    const _0x4f3b0b = _0x2f1794;
    this["player"][_0x4f3b0b(0x9b)] &&
      this["player"][_0x4f3b0b(0xa5)]() >=
        this[_0x4f3b0b(0xf8)][0x1]["container"]["x"] &&
      this[_0x4f3b0b(0xb5)](),
      this[_0x4f3b0b(0xf8)][0x1][_0x4f3b0b(0xb2)]["x"] <= gameStartX &&
        (this["updatePlatforms"](),
        this[_0x4f3b0b(0xdb)](),
        this[_0x4f3b0b(0x123)]());
  }
  [_0x2f1794(0xfe)](_0x48f574, _0x1ceb37) {
    const _0x2b27c7 = _0x2f1794;
    return Math[_0x2b27c7(0xa0)](
      Phaser[_0x2b27c7(0xf6)][_0x2b27c7(0x10e)](_0x48f574, _0x1ceb37)
    );
  }
  [_0x2f1794(0xc9)]() {
    const _0x33caee = _0x2f1794;
    return (
      this[_0x33caee(0xf8)][this[_0x33caee(0xf8)]["length"] - 0x1]["container"][
        "x"
      ] +
      this[_0x33caee(0xf8)][this["platforms"][_0x33caee(0x103)] - 0x1][
        _0x33caee(0xd7)
      ][_0x33caee(0x96)]
    );
  }
  [_0x2f1794(0x127)]() {
    const _0x5395b2 = _0x2f1794,
      _0x3ffbba = this[_0x5395b2(0x117)]
        ? this["calculateLastPlatformPosition"]() + 0xb4
        : this[_0x5395b2(0x107)],
      _0x276276 = this["randomNumber"](
        halfGameHeight - 0xa0,
        halfGameHeight + 0xa0
      ),
      _0x34070c = 0x12c - this[_0x5395b2(0xfc)] * 0x3,
      _0x2c1125 = this["gh"],
      _0x5713fe = this[_0x5395b2(0x112)][this[_0x5395b2(0xfb)]];
    let _0xa101a7 = this["platforms"][_0x5395b2(0xb6)]();
    _0xa101a7[_0x5395b2(0xe4)](![]),
      this[_0x5395b2(0xf8)][_0x5395b2(0x11d)](_0xa101a7),
      _0xa101a7["setup"](_0x3ffbba, _0x276276, _0x34070c, _0x2c1125, _0x5713fe),
      this["increaseNumberOfPlatforms"]();
  }
  ["addScore"]() {
    const _0x3bd783 = _0x2f1794;
    this[_0x3bd783(0xa6)] = this[_0x3bd783(0x126)]
      [_0x3bd783(0xb8)](this["halfW"], gameStartY, this[_0x3bd783(0x125)], {
        fontFamily: _0x3bd783(0x121),
        fontSize: _0x3bd783(0x11f),
        color: _0x3bd783(0xb1),
        stroke: "#000000",
        strokeThickness: 0xa,
        shadow: { blur: 0x0, stroke: ![], fill: ![] },
      })
      ["setOrigin"](0.5, 0.5);
  }
  [_0x2f1794(0xc5)](_0x288f91, _0xf80196) {
    const _0x5f2d2c = _0x2f1794;
    if (!this[_0x5f2d2c(0xca)][_0x5f2d2c(0xbc)](_0x288f91)) {
      this[_0x5f2d2c(0xca)][_0x5f2d2c(0xce)](_0x288f91, {
        currentScene: _0xf80196,
      }),
        this[_0x5f2d2c(0xca)][_0x5f2d2c(0xe1)](_0x288f91);
      return;
    }
    const _0x3c0b77 = this[_0x5f2d2c(0xca)][_0x5f2d2c(0xc3)](_0x288f91);
    this[_0x5f2d2c(0xca)][_0x5f2d2c(0x120)](),
      this[_0x5f2d2c(0xca)][_0x5f2d2c(0xe4)](![], _0xf80196),
      this[_0x5f2d2c(0xca)][_0x5f2d2c(0xe4)](!![], _0x288f91),
      _0x3c0b77[_0x5f2d2c(0xca)][_0x5f2d2c(0xab)]({ currentScene: _0xf80196 }),
      this[_0x5f2d2c(0xca)]["bringToTop"](_0x288f91);
  }
  [_0x2f1794(0xc6)]() {
    const _0xd1fe32 = _0x2f1794;
    if (this["bestScore"] !== 0x0) return;
    this["tutorial"] = new Tutorial(
      this,
      this["player"]["x"] + 0x104,
      this[_0xd1fe32(0xbb)]["y"] - 0x12c
    );
  }
  [_0x2f1794(0x9c)]() {
    const _0x3c05d3 = _0x2f1794;
    return new Button(this, gameWidth - 0x46, gameStartY, _0x3c05d3(0x115))[
      "on"
    ](
      _0x3c05d3(0xd3),
      function (_0x324c63) {
        const _0x4d6cb0 = _0x3c05d3;
        this[_0x4d6cb0(0xe5)][_0x4d6cb0(0x119)][_0x4d6cb0(0x106)](),
          this["scene"][_0x4d6cb0(0xe4)](![], "PlayScene"),
          this[_0x4d6cb0(0xc5)](_0x4d6cb0(0xa9), "PlayScene"),
          _0x324c63[_0x4d6cb0(0xd0)]();
      },
      this
    );
  }
  [_0x2f1794(0x98)](_0x287140) {
    const _0x30f82e = _0x2f1794;
    this["player"][_0x30f82e(0xa8)](_0x287140);
  }
  [_0x2f1794(0xdf)]() {
    const _0x399564 = _0x2f1794;
    this[_0x399564(0xbb)]["startEntryGameAim"](() => {
      this["isGameOver"] = ![];
    });
  }
  [_0x2f1794(0x102)]() {
    const _0x533266 = _0x2f1794;
    this[_0x533266(0x99)]["add"]({
      targets: this[_0x533266(0x10a)],
      ease: _0x533266(0xe0),
      duration: 0x258,
      y: gameHeight - 0x32,
    }),
      this["tweens"][_0x533266(0x126)]({
        targets: this["layer2"],
        ease: "Back.out",
        duration: 0x320,
        y: gameStartY + gameHeight / 0xa,
      }),
      this[_0x533266(0x99)][_0x533266(0x126)]({
        targets: [this["pauseButton"], this[_0x533266(0xa6)]],
        ease: "Back.out",
        duration: 0x1f4,
        y: gameStartY + 0x50,
      });
  }
}
