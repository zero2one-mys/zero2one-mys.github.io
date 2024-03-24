import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <Link className="btn btn-ghost text-xl" href="/">
        zero2onemys
      </Link>
    </div>
  );
}
