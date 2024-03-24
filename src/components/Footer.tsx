/* eslint-disable @next/next/no-img-element */
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
          iOSアプリ (iOS App)
        </Link>
        <Link href={ANDROID_LINK} target="_blank" className="link link-hover">
          Androidアプリ (Android App)
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfziPrhzgUhXVNAsoqm6F5HkrAH7-CT-5CsBS7tPOK-XaKqEw/viewform?usp=sf_link"
          className="link link-hover"
        >
          お問い合わせフォーム (Contact Form)
        </Link>
        <img src="/69a49.png" className="h-4" alt="email" />
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/privacy-policy" className="link link-hover">
          プライバシーポリシー (Privacy Policy)
        </Link>
        <aside>
          <p>©zero2onemys</p>
        </aside>
      </nav>
    </footer>
  );
}
