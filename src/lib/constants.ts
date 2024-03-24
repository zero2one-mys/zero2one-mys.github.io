export const SITE_TITLE = "zero2onemys Official Website";
export const SITE_DESCRIPTION = "zero2onemysの公式サイトです";
export const SITE_URL = "https://zero2one-mys.github.io";
export const APPS = [
  { app: "english-news-typing", name: "English News Typing" },
  { app: "find-the-wrong-kanji", name: "Find the wrong kanji" },
  { app: "escape-game", name: "Escape Game" },
  { app: "news-typing", name: "News Typing" },
  { app: "microwave-heating-time", name: "Microwave Heating Time" },
  { app: "tiles-all-black", name: "Tiles all black" },
  { app: "sudoku", name: "Sudoku" },
  { app: "ehomaki", name: "Ehomaki" },
  { app: "tap-number", name: "Tap Number" },
  { app: "qr-code-wifi-share", name: "QR Code Wi-Fi Share" },
  { app: "qr-code-share", name: "QR Code Share" },
  { app: "poke", name: "Pokedle" },
  { app: "merge-planet", name: "Merge Planet" },
  { app: "ai-typing", name: "AI typing" },
  { app: "escape-notify", name: "脱出ゲーム新作通知" },
  { app: "holo-connect", name: "V-Seek for hololive (Unofficial)" },
  { app: "niji-connect", name: "V-Seek for NIJISANJI (Unofficial)" },
  { app: "v-seek-n", name: "V-Seek for NIJISANJI (Unofficial)" },
  { app: "v-seek-h", name: "V-Seek for hololive (Unofficial)" },
];
export const APP_IDS = APPS.map((app) => app.app);
export const ANDROID_LINK =
  "https://play.google.com/store/apps/dev?id=4806408871432527945";
export const IOS_LINK =
  "https://apps.apple.com/jp/developer/ryo-fujise/id1580661605?see-all=i-phonei-pad-apps";
export const DEVELOPMENT = "development";
export const IS_DEV = process.env.NODE_ENV === DEVELOPMENT;
