/* eslint-disable @next/next/no-img-element */
import PokemonComponent from "@/components/PokemonComponent";
import { SITE_TITLE } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokedle収録モンスター一覧",
  description:
    "Pokedleに収録されているポケモンのリストです。世代別に一覧表示し、カタカナでのフィルタリング検索が可能です。",
  openGraph: {
    title: "Pokedle収録モンスター一覧",
    description:
      "Pokedleに収録されているポケモンのリストです。世代別に一覧表示し、カタカナでのフィルタリング検索が可能です。",
    url: "https://zero2one-mys.github.io/poke/list/",
    siteName: SITE_TITLE,
    locale: "ja_JP",
    type: "website",
  },
};

// アプリリンクコンポーネント
const AppLinks = () => {
  return (
    <div className="mt-4 mb-4">
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://apps.apple.com/us/app/%E3%83%9D%E3%82%B1%E3%83%89%E3%83%AB-pokedle-for-%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3/id6451337364?itscg=30200&itsct=apps_box_badge&mttnsubad=6451337364"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/ja-jp?releaseDate=1689724800"
            alt="Download on the App Store"
            className="h-12"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=jp.xdomain.php.zero2onemys.pokemonnamequiz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Google Play で手に入れよう"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png"
            className="h-15"
          />
        </a>
      </div>
    </div>
  );
};

// メインコンポーネント
export default function PokeList() {
  return (
    <main className="py-6 space-y-12 bg-gray-100 min-h-screen relative -mt-7">
      <div className="container mx-auto px-6 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Pokedleに収録されているモンスター一覧
        </h1>
        <AppLinks />
        <PokemonComponent />
      </div>
    </main>
  );
}
