import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="px-6 space-y-4">
      <h1 className="text-2xl font-bold">プライバシーポリシー</h1>
      <p>
        zero2onemysは広告サポート付きアプリとしてこのアプリを構築しました。このサービスはzero2onemysによって無償で提供され、そのまま使用することを意図しています。
      </p>
      <p>
        このページは、サービスを利用することを決定した場合に、個人情報の収集、使用、および開示に関するポリシーについて訪問者に通知するために使用されます。
      </p>
      <p>
        私のサービスを利用することを選択した場合、このポリシーに関連する情報の収集および使用に同意したことになります。収集された個人情報は、サービスの提供および改善に使用されます。私は、このプライバシーポリシーに記載されている場合を除き、あなたの情報を他者と共有しません。
      </p>
      <p>
        このプライバシーポリシーで使用される用語は、特に定義されていない限り、当社の利用規約と同じ意味を持ちます。
      </p>
      <h2 className="text-lg font-bold">情報の収集および使用</h2>
      <p>
        より良い体験のために、サービスを使用している間、特定の個人を識別できる情報を提供するようお願いする場合があります。リクエストされた情報はデバイスに保持され、私が収集することはありません。
      </p>
      <div>
        <p>
          アプリは、あなたを識別するために情報を収集する可能性があるサードパーティサービスを使用しています。
        </p>
        <p>
          アプリで使用されているサードパーティのサービスプロバイダのプライバシーポリシーへのリンク
        </p>
        <ul className="list-disc">
          <li>
            <Link
              href="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Google Playサービス
            </Link>
          </li>
          <li>
            <Link
              href="https://support.google.com/admob/answer/6128543?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              AdMob
            </Link>
          </li>
          <li>
            <Link
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Google Analytics for Firebase
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/about/privacy/update/printable"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              href="https://www.applovin.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              AppLovin
            </Link>
          </li>
          <li>
            <Link
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              RevenueCat
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="text-lg font-bold">ログデータ</h2>
      <p>
        サービスを使用するたびに、アプリのエラーが発生した場合、あなたの電話でログデータと呼ばれるデータと情報（サードパーティ製品を通じて）を収集することがあります。このログデータには、あなたのデバイスのインターネットプロトコル（「IP」）アドレス、デバイス名、オペレーティングシステムのバージョン、サービスを利用する際のアプリの構成、サービスの使用日時などの情報が含まれる場合があります。
      </p>
      <h2 className="text-lg font-bold">クッキー</h2>
      <p>
        クッキーは、匿名の一意の識別子として一般的に使用される少量のデータを含むファイルです。これらは訪問したウェブサイトからブラウザに送信され、デバイスの内部メモリに保存されます。
      </p>
      <p>
        このサービスは、これらの「クッキー」を明示的には使用しません。しかし、アプリは「クッキー」を使用して情報を収集し、サービスを向上させるためのサードパーティのコードおよびライブラリを使用することがあります。これらのクッキーを受け入れるか拒否するか、およびクッキーがデバイスに送信される時期を知るオプションがあります。クッキーを拒否することを選択した場合、このサービスの一部を使用できない場合があります。
      </p>
      <h2 className="text-lg font-bold">サービスプロバイダー</h2>
      <p>
        以下の理由から、サードパーティ企業および個人を雇用することがあります。
      </p>
      <ul className="list-disc">
        <li>サービスを促進するため；</li>
        <li>サービスを当社に代わって提供するため；</li>
        <li>サービス関連のサービスを実行するため；または</li>
        <li>サービスの使用方法を分析するのを支援するため。</li>
      </ul>
      <p>
        このサービスのユーザーに通知したいのは、これらのサードパーティが個人情報にアクセスできることです。その理由は、当社に代わって割り当てられたタスクを実行するためです。しかし、彼らは情報を他の目的で開示または使用しない義務があります。
      </p>
      <h2 className="text-lg font-bold">セキュリティ</h2>
      <p>
        あなたの個人情報の提供を信頼していただけることを重視しているため、商業的に受け入れられる手段を使用して保護するよう努めています。ただし、インターネットを介した送信方法や電子的な保管方法は100%安全で信頼できるものではなく、その絶対的な安全性を保証することはできません。
      </p>
      <h2 className="text-lg font-bold">他のサイトへのリンク</h2>
      <p>
        このサービスには他のサイトへのリンクが含まれている場合があります。サードパーティのリンクをクリックすると、そのサイトに移動します。これらの外部サイトは私が運営していないことに注意してください。したがって、これらのウェブサイトのプライバシーポリシーを確認することを強くお勧めします。私は、これらのサードパーティサイトまたはサービスの内容、プライバシーポリシー、または実践について一切の責任を負いません。
      </p>
      <h2 className="text-lg font-bold">子供のプライバシー</h2>
      <div>
        <p>
          これらのサービスは13歳未満の方を対象としていません。13歳未満の子供から個人を特定できる情報を意図的に収集することはありません。13歳未満の子供が私に個人情報を提供したことが判明した場合、直ちにサーバーから削除します。あなたが保護者または監督者であり、お子様が個人情報を提供したことに気付いた場合は、私に連絡してください。必要な措置を講じます。
        </p>
      </div>
      <h2 className="text-lg font-bold">このプライバシーポリシーの変更</h2>
      <p>
        プライバシーポリシーを随時更新することがあります。したがって、このページを定期的に確認することをお勧めします。変更があった場合は、新しいプライバシーポリシーをこのページに掲載することにより通知します。
      </p>
      <p>このポリシーは2021-07-01より有効です。</p>
      <h2 className="text-lg font-bold">お問い合わせ</h2>
      <p>
        プライバシーポリシーに関する質問や提案がある場合は、zero2onemys@gmail.comまでお気軽にお問い合わせください。
      </p>
      <p>
        このプライバシーポリシーページは{" "}
        <Link
          href="https://privacypolicytemplate.net"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary"
        >
          privacypolicytemplate.net
        </Link>{" "}
        で作成され、{" "}
        <Link
          href="https://app-privacy-policy-generator.nisrulz.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary"
        >
          App Privacy Policy Generator
        </Link>{" "}
        で修正/生成されました。
      </p>
    </main>
  );
}
