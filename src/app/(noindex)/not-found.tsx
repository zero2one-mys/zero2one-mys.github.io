import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 space-y-6">
      <h1 className="text-2xl font-bold">
        お探しのページは見つかりませんでした。
      </h1>
      <p>
        ページがすでに存在しないか、入力したURLが誤っている可能性があります。
      </p>
      <Link className="btn btn-primary" href="/">
        トップへ戻る
      </Link>
    </main>
  );
}
