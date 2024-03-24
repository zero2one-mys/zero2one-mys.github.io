"use client";

import { ANDROID_LINK, IOS_LINK, IS_DEV } from "@/lib/constants";
import Link from "next/link";

type Props = {
  isAndroid?: boolean;
};

export default function StoreLink({ isAndroid }: Props) {
  // const [isDeviceAndroid, setIsDeviceAndroid] = useState(false);
  // const [isDeviceIos, setIsDeviceIos] = useState(false);
  // const [isDisplay, setIsDisplay] = useState(false);

  // useEffect(() => {
  //   const userAgent = window.navigator.userAgent;
  //   setIsDeviceIos(/iPad|iPhone|iPod/.test(userAgent));
  //   setIsDeviceAndroid(/Android/.test(userAgent));
  // }, []);
  // useEffect(() => {
  //   setIsDisplay(
  //     (!isDeviceAndroid && !isDeviceIos) ||
  //       (isAndroid && isDeviceAndroid) ||
  //       (!isAndroid && isDeviceIos)
  //   );
  // }, [isAndroid, isDeviceAndroid, isDeviceIos]);

  const href = isAndroid ? ANDROID_LINK : IOS_LINK;
  const category = isAndroid ? "google_play" : "app_store";
  const os = isAndroid ? "Android" : "iPhone/iPad";

  return (
    <Link
      href={href}
      className={"btn btn-primary rounded-lg"}
      target="_blank"
      onClick={() => {
        (window as any).gtag("event", "store_action", {
          category: category,
          ...(IS_DEV ? { debug_mode: true } : {}),
        });
      }}
    >
      {os}アプリを見る
    </Link>
  );
}
