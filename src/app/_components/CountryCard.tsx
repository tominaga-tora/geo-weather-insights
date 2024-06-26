"use client";

import React from "react";

type Country = {
  code: string;
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: { name: string }[];
  continent: { name: string };
};

const countryNames: { [key: string]: string } = {
  Andorra: "アンドラ",
  "United Arab Emirates": "アラブ首長国連邦",
  Afghanistan: "アフガニスタン",
  "Antigua and Barbuda": "アンティグア・バーブーダ",
  Anguilla: "アンギラ",
  Albania: "アルバニア",
  Armenia: "アルメニア",
  Angola: "アンゴラ",
  Antarctica: "南極",
  Argentina: "アルゼンチン",
  "American Samoa": "アメリカ領サモア",
  Austria: "オーストリア",
  Australia: "オーストラリア",
  Aruba: "アルバ",
  Åland: "オーランド諸島",
  Azerbaijan: "アゼルバイジャン",
  "Bosnia and Herzegovina": "ボスニア・ヘルツェゴビナ",
  Barbados: "バルバドス",
  Bangladesh: "バングラデシュ",
  Belgium: "ベルギー",
  "Burkina Faso": "ブルキナファソ",
  Bulgaria: "ブルガリア",
  Bahrain: "バーレーン",
  Burundi: "ブルンジ",
  Benin: "ベナン",
  "Saint Barthélemy": "サン・バルテルミー",
  Bermuda: "バミューダ",
  Brunei: "ブルネイ",
  Bolivia: "ボリビア",
  Bonaire: "ボネール",
  Brazil: "ブラジル",
  Bahamas: "バハマ",
  Bhutan: "ブータン",
  "Bouvet Island": "ブーベ島",
  Botswana: "ボツワナ",
  Belarus: "ベラルーシ",
  Belize: "ベリーズ",
  Canada: "カナダ",
  "Cocos [Keeling] Islands": "ココス（キーリング）諸島",
  "Democratic Republic of the Congo": "コンゴ民主共和国",
  "Central African Republic": "中央アフリカ共和国",
  "Republic of the Congo": "コンゴ共和国",
  Switzerland: "スイス",
  "Ivory Coast": "コートジボワール",
  "Cook Islands": "クック諸島",
  Chile: "チリ",
  Cameroon: "カメルーン",
  China: "中国",
  Colombia: "コロンビア",
  "Costa Rica": "コスタリカ",
  Cuba: "キューバ",
  "Cape Verde": "カーボベルデ",
  Curacao: "キュラソー",
  "Christmas Island": "クリスマス島",
  Cyprus: "キプロス",
  "Czech Republic": "チェコ共和国",
  Germany: "ドイツ",
  Djibouti: "ジブチ",
  Denmark: "デンマーク",
  Dominica: "ドミニカ",
  "Dominican Republic": "ドミニカ共和国",
  Algeria: "アルジェリア",
  Ecuador: "エクアドル",
  Estonia: "エストニア",
  Egypt: "エジプト",
  "Western Sahara": "西サハラ",
  Eritrea: "エリトリア",
  Spain: "スペイン",
  Ethiopia: "エチオピア",
  Finland: "フィンランド",
  Fiji: "フィジー",
  "Falkland Islands": "フォークランド諸島",
  Micronesia: "ミクロネシア",
  "Faroe Islands": "フェロー諸島",
  France: "フランス",
  Gabon: "ガボン",
  "United Kingdom": "イギリス",
  Grenada: "グレナダ",
  Georgia: "ジョージア",
  "French Guiana": "フランス領ギアナ",
  Guernsey: "ガーンジー",
  Ghana: "ガーナ",
  Gibraltar: "ジブラルタル",
  Greenland: "グリーンランド",
  Gambia: "ガンビア",
  Guinea: "ギニア",
  Guadeloupe: "グアドループ",
  "Equatorial Guinea": "赤道ギニア",
  Greece: "ギリシャ",
  "South Georgia and the South Sandwich Islands":
    "サウスジョージア・サウスサンドウィッチ諸島",
  Guatemala: "グアテマラ",
  Guam: "グアム",
  "Guinea-Bissau": "ギニアビサウ",
  Guyana: "ガイアナ",
  "Hong Kong": "香港",
  "Heard Island and McDonald Islands": "ハード島・マクドナルド諸島",
  Honduras: "ホンジュラス",
  Croatia: "クロアチア",
  Haiti: "ハイチ",
  Hungary: "ハンガリー",
  Indonesia: "インドネシア",
  Ireland: "アイルランド",
  Israel: "イスラエル",
  "Isle of Man": "マン島",
  India: "インド",
  "British Indian Ocean Territory": "英領インド洋地域",
  Iraq: "イラク",
  Iran: "イラン",
  Iceland: "アイスランド",
  Italy: "イタリア",
  Jersey: "ジャージー",
  Jamaica: "ジャマイカ",
  Jordan: "ヨルダン",
  Japan: "日本",
  Kenya: "ケニア",
  Kyrgyzstan: "キルギス",
  Cambodia: "カンボジア",
  Kiribati: "キリバス",
  Comoros: "コモロ",
  "Saint Kitts and Nevis": "セントクリストファー・ネイビス",
  "North Korea": "北朝鮮",
  "South Korea": "韓国",
  Kuwait: "クウェート",
  "Cayman Islands": "ケイマン諸島",
  Kazakhstan: "カザフスタン",
  Laos: "ラオス",
  Lebanon: "レバノン",
  "Saint Lucia": "セントルシア",
  Liechtenstein: "リヒテンシュタイン",
  "Sri Lanka": "スリランカ",
  Liberia: "リベリア",
  Lesotho: "レソト",
  Lithuania: "リトアニア",
  Luxembourg: "ルクセンブルク",
  Latvia: "ラトビア",
  Libya: "リビア",
  Morocco: "モロッコ",
  Monaco: "モナコ",
  Moldova: "モルドバ",
  Montenegro: "モンテネグロ",
  "Saint Martin": "サン・マルタン",
  Madagascar: "マダガスカル",
  "Marshall Islands": "マーシャル諸島",
  "North Macedonia": "北マケドニア",
  Mali: "マリ",
  "Myanmar [Burma]": "ミャンマー",
  Mongolia: "モンゴル",
  Macao: "マカオ",
  "Northern Mariana Islands": "北マリアナ諸島",
  Martinique: "マルティニーク",
  Mauritania: "モーリタニア",
  Montserrat: "モントセラト",
  Malta: "マルタ",
  Mauritius: "モーリシャス",
  Maldives: "モルディブ",
  Malawi: "マラウイ",
  Mexico: "メキシコ",
  Malaysia: "マレーシア",
  Mozambique: "モザンビーク",
  Namibia: "ナミビア",
  "New Caledonia": "ニューカレドニア",
  Niger: "ニジェール",
  "Norfolk Island": "ノーフォーク島",
  Nigeria: "ナイジェリア",
  Nicaragua: "ニカラグア",
  Netherlands: "オランダ",
  Norway: "ノルウェー",
  Nepal: "ネパール",
  Nauru: "ナウル",
  Niue: "ニウエ",
  "New Zealand": "ニュージーランド",
  Oman: "オマーン",
  Panama: "パナマ",
  Peru: "ペルー",
  "French Polynesia": "フランス領ポリネシア",
  "Papua New Guinea": "パプアニューギニア",
  Philippines: "フィリピン",
  Pakistan: "パキスタン",
  Poland: "ポーランド",
  "Saint Pierre and Miquelon": "サンピエール島・ミクロン島",
  "Pitcairn Islands": "ピトケアン諸島",
  "Puerto Rico": "プエルトリコ",
  Palestine: "パレスチナ",
  Portugal: "ポルトガル",
  Palau: "パラオ",
  Paraguay: "パラグアイ",
  Qatar: "カタール",
  Réunion: "レユニオン",
  Romania: "ルーマニア",
  Serbia: "セルビア",
  Russia: "ロシア",
  Rwanda: "ルワンダ",
  "Saudi Arabia": "サウジアラビア",
  "Solomon Islands": "ソロモン諸島",
  Seychelles: "セーシェル",
  Sudan: "スーダン",
  Sweden: "スウェーデン",
  Singapore: "シンガポール",
  "Saint Helena": "セントヘレナ",
  Slovenia: "スロベニア",
  "Svalbard and Jan Mayen": "スバールバル諸島およびヤンマイエン島",
  Slovakia: "スロバキア",
  "Sierra Leone": "シエラレオネ",
  "San Marino": "サンマリノ",
  Senegal: "セネガル",
  Somalia: "ソマリア",
  Suriname: "スリナム",
  "South Sudan": "南スーダン",
  "São Tomé and Príncipe": "サントメ・プリンシペ",
  "El Salvador": "エルサルバドル",
  "Sint Maarten": "シント・マールテン",
  Syria: "シリア",
  Swaziland: "スワジランド",
  "Turks and Caicos Islands": "タークス・カイコス諸島",
  Chad: "チャド",
  "French Southern Territories": "フランス領南方・南極地域",
  Togo: "トーゴ",
  Thailand: "タイ",
  Tajikistan: "タジキスタン",
  Tokelau: "トケラウ",
  "East Timor": "東ティモール",
  Turkmenistan: "トルクメニスタン",
  Tunisia: "チュニジア",
  Tonga: "トンガ",
  Turkey: "トルコ",
  "Trinidad and Tobago": "トリニダード・トバゴ",
  Tuvalu: "ツバル",
  Taiwan: "台湾",
  Tanzania: "タンザニア",
  Ukraine: "ウクライナ",
  Uganda: "ウガンダ",
  "U.S. Minor Outlying Islands": "米領小離島",
  "United States": "アメリカ合衆国",
  Uruguay: "ウルグアイ",
  Uzbekistan: "ウズベキスタン",
  "Vatican City": "バチカン市国",
  "Saint Vincent and the Grenadines": "セントビンセント・グレナディーン",
  Venezuela: "ベネズエラ",
  "British Virgin Islands": "英領ヴァージン諸島",
  "U.S. Virgin Islands": "米領ヴァージン諸島",
  Vietnam: "ベトナム",
  Vanuatu: "バヌアツ",
  "Wallis and Futuna": "ウォリス・フツナ",
  Samoa: "サモア",
  Kosovo: "コソボ",
  Yemen: "イエメン",
  Mayotte: "マヨット",
  "South Africa": "南アフリカ",
  Zambia: "ザンビア",
  Zimbabwe: "ジンバブエ",
  // 他の国名も追加できます
};

const currencyNames: { [key: string]: string } = {
  JPY: "円",
  USD: "ドル",
  // 他の通貨も追加できます
};

const languageNames: { [key: string]: string } = {
  Japanese: "日本語",
  English: "英語",
  // 他の言語も追加できます
};

const CountryCard = ({ country }: { country: Country }) => {
  const translatedCountryName = countryNames[country.name];
  const translatedCurrency =
    currencyNames[country.currency] || country.currency;
  const translatedLanguages = country.languages.map(
    (lang) => languageNames[lang.name] || lang.name
  );

  return (
    <div className="country-card">
      <h2>
        {translatedCountryName || country.name} {country.emoji}
      </h2>
      <p>首都: {country.capital}</p>
      <p>通貨: {translatedCurrency}</p>
      <p>言語: {translatedLanguages.join(", ")}</p>
      <p>大陸: {country.continent.name}</p>
      {translatedCountryName && <small>({country.name})</small>}
    </div>
  );
};

export default CountryCard;
