const _0x4e1f91 = _0x2fd6;
(function (_0x5624fb, _0x393587) {
  const _0x124ab3 = _0x2fd6,
    _0x37c8ff = _0x5624fb();
  while (!![]) {
    try {
      const _0x23b5b9 =
        parseInt(_0x124ab3(0x1e8)) / 0x1 +
        (parseInt(_0x124ab3(0x1e3)) / 0x2) *
          (parseInt(_0x124ab3(0x1f0)) / 0x3) +
        (parseInt(_0x124ab3(0x1de)) / 0x4) *
          (parseInt(_0x124ab3(0x1e4)) / 0x5) +
        (parseInt(_0x124ab3(0x1eb)) / 0x6) *
          (parseInt(_0x124ab3(0x1e1)) / 0x7) +
        (parseInt(_0x124ab3(0x1e2)) / 0x8) *
          (parseInt(_0x124ab3(0x1ec)) / 0x9) +
        parseInt(_0x124ab3(0x1ea)) / 0xa +
        (parseInt(_0x124ab3(0x1f1)) / 0xb) *
          (-parseInt(_0x124ab3(0x1e5)) / 0xc);
      if (_0x23b5b9 === _0x393587) break;
      else _0x37c8ff["push"](_0x37c8ff["shift"]());
    } catch (_0x2fb95d) {
      _0x37c8ff["push"](_0x37c8ff["shift"]());
    }
  }
})(_0x52c2, 0x986dc);
function _0x2fd6(_0x5569aa, _0x4cf27f) {
  const _0x52c240 = _0x52c2();
  return (
    (_0x2fd6 = function (_0x2fd646, _0x2a0290) {
      _0x2fd646 = _0x2fd646 - 0x1dc;
      let _0xf1711b = _0x52c240[_0x2fd646];
      return _0xf1711b;
    }),
    _0x2fd6(_0x5569aa, _0x4cf27f)
  );
}
const SERVER_URL = _0x4e1f91(0x1e6),
  PREFX_WEB = _0x4e1f91(0x1ed),
  PREFX_TELEGRAM_APP = "riskyJumperTelegramApp",
  headers = { "Content-Type": _0x4e1f91(0x1dd), Accept: _0x4e1f91(0x1dd) },
  requestPost = (_0x767f18, _0x3233ae) => {
    const _0x3e595b = _0x4e1f91;
    return fetch(SERVER_URL + "/" + _0x3233ae, {
      method: _0x3e595b(0x1ef),
      headers: headers,
      body: JSON[_0x3e595b(0x1dc)](_0x767f18),
    });
  },
  requestGet = (_0x18d7d8) => {
    return fetch(SERVER_URL + "/" + _0x18d7d8, { headers: headers });
  },
  CREATE_ACCOUNT = (_0x35bfda) => {
    const _0xeb1d93 = _0x4e1f91;
    return requestPost(_0x35bfda, PREFX_WEB + _0xeb1d93(0x1df));
  },
  GET_PLAYERS = () => {
    const _0x94c469 = _0x4e1f91;
    return requestGet(PREFX_WEB + _0x94c469(0x1e9));
  },
  UPDATE_SCORE = (_0x332dbc) => {
    return requestPost(_0x332dbc, PREFX_WEB + "/updateScore");
  },
  GAME_STATE = (_0x5ba4bf) => {
    const _0x449a72 = _0x4e1f91;
    return requestPost(_0x5ba4bf, PREFX_WEB + _0x449a72(0x1e0));
  },
  CLAIM_REWARD = (_0x9de5c6) => {
    const _0x46102a = _0x4e1f91;
    return requestPost(_0x9de5c6, PREFX_WEB + _0x46102a(0x1e7));
  },
  GET_INVOICE = (_0x1ea53e) => {
    const _0x54b3f8 = _0x4e1f91;
    return requestPost(_0x1ea53e, PREFX_TELEGRAM_APP + _0x54b3f8(0x1ee));
  },
  GET_SHOP_DATA = () => {
    return requestGet(PREFX_TELEGRAM_APP + "/shopData");
  };
function _0x52c2() {
  const _0x30588a = [
    "60bVcmvB",
    "https://personalserver-c0422f9a9869.herokuapp.com",
    "/claimReward",
    "853176czeUPm",
    "/playersStatus",
    "9382810FxxlBK",
    "5846028ihPWtt",
    "26802zXshXj",
    "riskyJumperWeb",
    "/getInvoice",
    "post",
    "66PczsQI",
    "7982689IAmBJo",
    "stringify",
    "application/json",
    "737864KWhVPM",
    "/createAccount",
    "/state",
    "7nLedfH",
    "2096QcRFVC",
    "47486sDIUGS",
    "5Ljsnxo",
  ];
  _0x52c2 = function () {
    return _0x30588a;
  };
  return _0x52c2();
}
