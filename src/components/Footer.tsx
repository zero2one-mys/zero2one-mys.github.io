import { ANDROID_LINK, IOS_LINK } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/" className="link link-hover">
          TOP
        </Link>
        <Link href={IOS_LINK} target="_blank" className="link link-hover">
          iOSアプリ
        </Link>
        <Link href={ANDROID_LINK} target="_blank" className="link link-hover">
          Androidアプリ
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/privacy-policy" className="link link-hover">
          プライバシーポリシー
        </Link>
        <aside>
          <p>© zero2onemys</p>
        </aside>
      </nav>
    </footer>
  );
}
