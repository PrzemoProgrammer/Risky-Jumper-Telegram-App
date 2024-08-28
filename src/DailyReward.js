const _0x1f323b = _0x2e1d;
function _0x2872() {
  const _0x2d6d0f = [
    "20px",
    "342888nuToZl",
    "startPulseTweenAnimation",
    "1517787HaepoT",
    "115rhUxZy",
    "floor",
    "...",
    "existing",
    "You\x20can\x20claim\x20your\x20reward\x20now!",
    "setState",
    "2079366falgSo",
    "setAlpha",
    "700441UGdZJY",
    "countDownInterval",
    "update",
    "createCountdownText",
    "timeToRenew",
    "remove",
    "GameObjects",
    "693182eFnbqZ",
    "scaleY",
    "#FFFFFF",
    "text",
    "log",
    "5956PZXitN",
    "scaleX",
    "dailyReward",
    "Get\x20reward!",
    "pulseTween",
    "stop",
    "00:00:00",
    "createImage",
    "add",
    "4OlhSOX",
    "scene",
    "4601439LuAoDu",
    "countdownText",
    "isActive",
    "image",
    "tweens",
    "setOrigin",
  ];
  _0x2872 = function () {
    return _0x2d6d0f;
  };
  return _0x2872();
}
(function (_0x4626b4, _0x3cd8ff) {
  const _0x5522f9 = _0x2e1d,
    _0x4514c3 = _0x4626b4();
  while (!![]) {
    try {
      const _0x444131 =
        parseInt(_0x5522f9(0x147)) / 0x1 +
        (parseInt(_0x5522f9(0x133)) / 0x2) *
          (parseInt(_0x5522f9(0x13e)) / 0x3) +
        (-parseInt(_0x5522f9(0x12a)) / 0x4) *
          (parseInt(_0x5522f9(0x13f)) / 0x5) +
        -parseInt(_0x5522f9(0x145)) / 0x6 +
        -parseInt(_0x5522f9(0x125)) / 0x7 +
        -parseInt(_0x5522f9(0x13c)) / 0x8 +
        -parseInt(_0x5522f9(0x135)) / 0x9;
      if (_0x444131 === _0x3cd8ff) break;
      else _0x4514c3["push"](_0x4514c3["shift"]());
    } catch (_0x4f2f54) {
      _0x4514c3["push"](_0x4514c3["shift"]());
    }
  }
})(_0x2872, 0xa59bd);
function _0x2e1d(_0x2086c1, _0x4fca82) {
  const _0x2872cd = _0x2872();
  return (
    (_0x2e1d = function (_0x2e1d8a, _0x2ebda4) {
      _0x2e1d8a = _0x2e1d8a - 0x11f;
      let _0x47ae78 = _0x2872cd[_0x2e1d8a];
      return _0x47ae78;
    }),
    _0x2e1d(_0x2086c1, _0x4fca82)
  );
}
class DailyReward extends Phaser[_0x1f323b(0x124)]["Container"] {
  constructor(_0x3aabd3, _0x2dc6c2, _0x14bed9) {
    const _0x454f12 = _0x1f323b;
    super(_0x3aabd3, _0x2dc6c2, _0x14bed9),
      _0x3aabd3[_0x454f12(0x132)][_0x454f12(0x142)](this),
      (this[_0x454f12(0x134)] = _0x3aabd3),
      (this[_0x454f12(0x12e)] = null),
      (this[_0x454f12(0x122)] = 0x17 * 0x3b * 0x3b * 0x3e8),
      (this["isActive"] = ![]),
      (this[_0x454f12(0x11f)] = null),
      (this["image"] = this[_0x454f12(0x131)]()),
      (this["countdownText"] = this[_0x454f12(0x121)]());
  }
  ["createImage"]() {
    const _0xdaa794 = _0x1f323b,
      _0x3b11d5 = new Button(this["scene"], 0x0, 0x0, _0xdaa794(0x12c))[
        _0xdaa794(0x146)
      ](0.5);
    return this[_0xdaa794(0x132)](_0x3b11d5), _0x3b11d5;
  }
  [_0x1f323b(0x121)]() {
    const _0xebc6dd = _0x1f323b,
      _0xd634e2 = this[_0xebc6dd(0x134)][_0xebc6dd(0x132)]
        [_0xebc6dd(0x128)](0x0, 0x43, _0xebc6dd(0x141), {
          fontFamily: "pixel",
          fontSize: _0xebc6dd(0x13b),
          color: _0xebc6dd(0x127),
          stroke: "#000000",
          strokeThickness: 0x5,
          shadow: { blur: 0x0, stroke: ![], fill: ![] },
        })
        [_0xebc6dd(0x13a)](0.5, 0.5);
    return this["add"](_0xd634e2), _0xd634e2;
  }
  [_0x1f323b(0x144)](_0x16ab2c) {
    const _0x574287 = _0x1f323b;
    if (_0x16ab2c) {
      this[_0x574287(0x138)][_0x574287(0x146)](0x1);
      if (!this[_0x574287(0x137)]) this["startPulseTweenAnimation"]();
      this["isActive"] = !![];
    } else {
      this[_0x574287(0x138)]["setAlpha"](0.5), (this["isActive"] = ![]);
      if (this[_0x574287(0x12e)])
        this["pulseTween"][_0x574287(0x12f)]()[_0x574287(0x123)]();
      (this[_0x574287(0x12e)] = null),
        (this[_0x574287(0x138)][_0x574287(0x12b)] = 0x1),
        (this[_0x574287(0x138)][_0x574287(0x126)] = 0x1);
      if (this[_0x574287(0x137)])
        this[_0x574287(0x120)]({
          dailyClaimTIme: this["timeToRenew"],
          success: ![],
          canClaim: ![],
        });
    }
  }
  [_0x1f323b(0x120)](_0x45311c) {
    const _0x44945a = _0x1f323b,
      {
        dailyClaimTIme: _0x150c28,
        success: _0x1de22b,
        canClaim: _0x5e8f41,
      } = _0x45311c;
    console[_0x44945a(0x129)](_0x45311c);
    let _0x8b46b3 = _0x150c28;
    const _0x3a6908 = () => {
      const _0x35614a = _0x44945a;
      if (
        !_0x8b46b3 ||
        _0x5e8f41 ||
        this[_0x35614a(0x136)][_0x35614a(0x128)] == _0x35614a(0x130)
      )
        this["setState"](!![]),
          (this[_0x35614a(0x136)][_0x35614a(0x128)] = _0x35614a(0x12d)),
          console[_0x35614a(0x129)](_0x35614a(0x143)),
          clearInterval(this[_0x35614a(0x11f)]);
      else {
        this[_0x35614a(0x144)](![]);
        const _0x50443a = Math["floor"](_0x8b46b3 / 0x3e8),
          _0x3e093f = String(Math[_0x35614a(0x140)](_0x50443a / 0xe10))[
            "padStart"
          ](0x2, "0"),
          _0x6ecb62 = String(
            Math[_0x35614a(0x140)]((_0x50443a % 0xe10) / 0x3c)
          )["padStart"](0x2, "0"),
          _0x3cfcc7 = String(_0x50443a % 0x3c)["padStart"](0x2, "0");
        (this[_0x35614a(0x136)][_0x35614a(0x128)] =
          _0x3e093f + ":" + _0x6ecb62 + ":" + _0x3cfcc7),
          (_0x8b46b3 -= 0x3e8);
      }
    };
    (this[_0x44945a(0x11f)] = setInterval(() => {
      _0x3a6908();
    }, 0x3e8)),
      _0x3a6908();
  }
  [_0x1f323b(0x13d)]() {
    const _0xdcac8b = _0x1f323b;
    this[_0xdcac8b(0x12e)] = this["scene"][_0xdcac8b(0x139)][_0xdcac8b(0x132)]({
      targets: this,
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 0x1f4,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x1f323b(0x12f)]() {
    const _0x18b500 = _0x1f323b;
    this["setState"](![]), clearInterval(this[_0x18b500(0x11f)]);
  }
}
