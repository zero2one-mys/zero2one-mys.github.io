import Link from "next/link";

export default function AccountDelete() {
  return (
    <main className="px-6 space-y-4">
      <div className="text-right">
        <Link
          href="/account-delete"
          className="text-sm inline-block px-3 py-1 rounded-sm bg-gray-200 hover:bg-gray-300 text-gray-800"
        >
          English
        </Link>
      </div>
      <h1 className="text-2xl font-bold">アカウント削除のご案内</h1>
      <p>
        この度は、zero2omemysが提供するアプリをご利用いただき、誠にありがとうございます。
      </p>
      <p>
        このページでは、zero2omemysが提供するアプリのアカウント削除方法についてご案内いたします。
      </p>
      <p>
        アカウント削除をご希望される場合は、お手数ですが以下の手順に従って、アカウント削除フォームより申請を行っていただきますようお願い申し上げます。
      </p>

      <h2 className="text-lg font-bold">アカウント削除に関する注意事項</h2>
      <ul className="list-disc list-inside">
        <li>
          対象アプリのアカウントに関連付けられたすべてのデータ（プレイ履歴、登録情報など）が削除されます。
        </li>
        <li>一度削除したアカウントは復元できません。</li>
        <li>
          アカウント削除後も、法令に基づく義務の履行や紛争解決等のために、特定の情報を保持する場合があります。詳細については、各アプリのプライバシーポリシーをご確認ください。
        </li>
      </ul>

      <h2 className="text-lg font-bold">アカウント削除の手順</h2>
      <ol className="list-decimal list-inside">
        <li>
          以下のフォームにアクセスしてください。
          <br />
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCnoWd45vSRLKflTQDDO-bklRUWKENgDDhqN6aW_bLmhr_eg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            アカウント削除フォーム
          </Link>
        </li>
        <li>必要事項をご記入の上、送信してください。</li>
      </ol>

      <h2 className="text-lg font-bold">アカウント削除フォーム入力項目</h2>
      <ul className="list-disc list-inside">
        <li>
          <span className="font-bold">メールアドレス</span>:
          確認のためご連絡する場合があります。連絡が取れるメールアドレスをご記入ください。
        </li>
        <li>
          <span className="font-bold">App name</span>:
          アカウント削除を希望するアプリ名をご記入ください。
        </li>
        <li>
          <span className="font-bold">User name</span>:
          対象アプリに登録されているユーザー名をご記入ください。
        </li>
      </ul>

      <h2 className="text-lg font-bold">お問い合わせ</h2>
      <p>
        アカウント削除についてご不明な点がございましたら、以下のお問い合わせフォームよりお問い合わせください。
      </p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfziPrhzgUhXVNAsoqm6F5HkrAH7-CT-5CsBS7tPOK-XaKqEw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="link link-primary"
      >
        お問い合わせフォーム
      </Link>
    </main>
  );
}
