function _0x1781(_0x2c42d2, _0x43340f) {
  const _0x3a27f5 = _0x3a27();
  return (
    (_0x1781 = function (_0x17813e, _0x29e07c) {
      _0x17813e = _0x17813e - 0x11a;
      let _0x12d310 = _0x3a27f5[_0x17813e];
      return _0x12d310;
    }),
    _0x1781(_0x2c42d2, _0x43340f)
  );
}
const _0x590584 = _0x1781;
(function (_0x122b63, _0x8b04de) {
  const _0x16eba0 = _0x1781,
    _0x25059e = _0x122b63();
  while (!![]) {
    try {
      const _0x4acfa0 =
        parseInt(_0x16eba0(0x124)) / 0x1 +
        -parseInt(_0x16eba0(0x120)) / 0x2 +
        (parseInt(_0x16eba0(0x11b)) / 0x3) *
          (-parseInt(_0x16eba0(0x12e)) / 0x4) +
        (-parseInt(_0x16eba0(0x137)) / 0x5) *
          (parseInt(_0x16eba0(0x11d)) / 0x6) +
        (parseInt(_0x16eba0(0x13b)) / 0x7) *
          (-parseInt(_0x16eba0(0x133)) / 0x8) +
        (-parseInt(_0x16eba0(0x130)) / 0x9) *
          (-parseInt(_0x16eba0(0x13d)) / 0xa) +
        (-parseInt(_0x16eba0(0x138)) / 0xb) *
          (-parseInt(_0x16eba0(0x139)) / 0xc);
      if (_0x4acfa0 === _0x8b04de) break;
      else _0x25059e["push"](_0x25059e["shift"]());
    } catch (_0x265dd9) {
      _0x25059e["push"](_0x25059e["shift"]());
    }
  }
})(_0x3a27, 0x728ed);
class LoginScene extends Phaser[_0x590584(0x121)] {
  constructor() {
    super("LoginScene");
  }
  [_0x590584(0x12a)]() {
    const _0x17ab93 = _0x590584;
    (this[_0x17ab93(0x122)] = ""),
      (this["id"] = this[_0x17ab93(0x11f)]()),
      (this["referralReward"] = null),
      this[_0x17ab93(0x127)]();
  }
  ["generateId"]() {
    const _0x1cb452 = _0x590584;
    let _0x38098c = [];
    for (let _0x3b0548 = 0x0; _0x3b0548 < 0xa; _0x3b0548++) {
      _0x38098c["push"](Math[_0x1cb452(0x13a)](Math["random"]() * 0x64));
    }
    const _0x1e5420 = _0x38098c["join"]("");
    return _0x1e5420;
  }
  async [_0x590584(0x127)]() {
    const _0x5546f6 = _0x590584;
    Telegram["WebApp"][_0x5546f6(0x129)]();
    const _0x5ab78a =
      Telegram[_0x5546f6(0x11e)]["initDataUnsafe"][_0x5546f6(0x12f)];
    if (!_0x5ab78a) return;
    const { id: _0x402920, first_name: _0x35045b } = _0x5ab78a,
      _0x3ea673 = window[_0x5546f6(0x13f)]["href"],
      _0x477c60 = new URL(_0x3ea673),
      _0x1a76ec = new URLSearchParams(_0x477c60["search"]),
      _0x49347e = _0x1a76ec[_0x5546f6(0x12c)]("tgWebAppStartParam");
    console[_0x5546f6(0x132)]("tgWebAppStartParam"),
      console[_0x5546f6(0x132)](_0x49347e);
    const _0x1bbdbd = {
      nick: _0x35045b || _0x5546f6(0x135),
      id: _0x402920,
      referralUserID: _0x49347e,
      telegram: !![],
    };
    try {
      const _0x5244d2 = await (await CREATE_ACCOUNT(_0x1bbdbd))["json"]();
      console[_0x5546f6(0x132)](_0x5244d2);
      const {
        newNick: _0x576c2f,
        success: _0x1a5292,
        referralReward: _0x5c2a8,
      } = _0x5244d2;
      (this[_0x5546f6(0x123)] = _0x5c2a8),
        _0x1a5292
          ? (localStorage["setItem"]("id", _0x402920),
            localStorage[_0x5546f6(0x131)](_0x5546f6(0x134), _0x576c2f),
            this[_0x5546f6(0x11c)]())
          : this[_0x5546f6(0x11c)]();
    } catch (_0x387040) {
      this[_0x5546f6(0x11c)]();
    }
  }
  async ["changeScene"]() {
    const _0x4b8459 = _0x590584,
      _0x54b0e0 = { id: localStorage[_0x4b8459(0x136)]("id") },
      _0x336503 = await (await GET_SHOP_DATA())[_0x4b8459(0x13e)](),
      _0x3c47f6 = await (await GAME_STATE(_0x54b0e0))[_0x4b8459(0x13e)]();
    (_0x3c47f6[_0x4b8459(0x123)] = this[_0x4b8459(0x123)]),
      this[_0x4b8459(0x12b)]
        [_0x4b8459(0x126)](_0x4b8459(0x12d))
        [_0x4b8459(0x11a)](_0x4b8459(0x12d))
        ["start"](_0x4b8459(0x13c))
        ["start"](_0x4b8459(0x125), {
          shopData: _0x336503,
          gameState: _0x3c47f6,
        })
        [_0x4b8459(0x128)](_0x4b8459(0x12d), "BackgroundScene")
        [_0x4b8459(0x128)]("BackgroundScene", "MintNFTScene");
  }
}
function _0x3a27() {
  const _0x560c3a = [
    "getItem",
    "15vMUWrX",
    "55WyKLrZ",
    "5286900IuszBz",
    "floor",
    "7iZatrW",
    "BackgroundScene",
    "220BwkDBI",
    "json",
    "location",
    "pause",
    "1342029TkFhjR",
    "changeScene",
    "1822950mFvWUI",
    "WebApp",
    "generateId",
    "435214uzidhN",
    "Scene",
    "nickText",
    "referralReward",
    "202026RtEoAC",
    "MintNFTScene",
    "start",
    "fetchData",
    "swapPosition",
    "ready",
    "create",
    "scene",
    "get",
    "PlayScene",
    "4TRfjFE",
    "user",
    "16047KaUKVp",
    "setItem",
    "log",
    "3187784lMPzAC",
    "nickname",
    "Guest",
  ];
  _0x3a27 = function () {
    return _0x560c3a;
  };
  return _0x3a27();
}
