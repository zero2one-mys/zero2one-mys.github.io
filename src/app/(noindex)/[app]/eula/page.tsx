import { APP_IDS, APPS, SITE_URL } from "@/lib/constants";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageParams = {
  app: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return APP_IDS.map((app) => ({
    app,
  }));
}

export default async function Eula({ params }: PageProps) {
  const { app } = await params;
  const found = APPS.find((v) => v.app === app);
  if (!found) return notFound();
  const appName = found.name;
  const appPath = found.app;
  return (
    <main className="px-6 space-y-4">
      <h1 className="text-2xl font-bold">
        End-User License Agreement (EULA) of {appName}
      </h1>
      <p>
        This End-User License Agreement (&quot;EULA&quot;) is a legal agreement
        between you and zero2onemys. Our EULA was created by{" "}
        <Link
          href="https://www.eulatemplate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-primary"
        >
          EULA Template
        </Link>{" "}
        for {appName}.
      </p>
      <p>
        This EULA agreement governs your acquisition and use of our {appName}{" "}
        software (&quot;Software&quot;) directly from zero2onemys or indirectly
        through a zero2onemys authorized reseller or distributor (a
        &quot;Reseller&quot;).
      </p>
      <p>
        Please read this EULA agreement carefully before completing the
        installation process and using the {appName} software. It provides a
        license to use the {appName} software and contains warranty information
        and liability disclaimers.
      </p>
      <p>
        If you register for a free trial of the {appName} software, this EULA
        agreement will also govern that trial. By clicking &quot;accept&quot; or
        installing and/or using the {appName} software, you are confirming your
        acceptance of the Software and agreeing to become bound by the terms of
        this EULA agreement.
      </p>
      <p>
        If you are entering into this EULA agreement on behalf of a company or
        other legal entity, you represent that you have the authority to bind
        such entity and its affiliates to these terms and conditions. If you do
        not have such authority or if you do not agree with the terms and
        conditions of this EULA agreement, do not install or use the Software,
        and you must not accept this EULA agreement.
      </p>
      <p>
        This EULA agreement shall apply only to the Software supplied by
        zero2onemys herewith regardless of whether other software is referred to
        or described herein. The terms also apply to any zero2onemys updates,
        supplements, Internet-based services, and support services for the
        Software, unless other terms accompany those items on delivery. If so,
        those terms apply.
      </p>

      <h2 className="text-lg font-bold">License Grant</h2>
      <p>
        zero2onemys hereby grants you a personal, non-transferable,
        non-exclusive licence to use the {appName} software on your devices in
        accordance with the terms of this EULA agreement.
      </p>
      <p>
        You are permitted to load the {appName} software (for example a PC,
        laptop, mobile or tablet) under your control. You are responsible for
        ensuring your device meets the minimum requirements of the {appName}{" "}
        software.
      </p>
      <p>You are not permitted to:</p>
      <ul className="list-disc">
        <li>
          Edit, alter, modify, adapt, translate or otherwise change the whole or
          any part of the Software nor permit the whole or any part of the
          Software to be combined with or become incorporated in any other
          software, nor decompile, disassemble or reverse engineer the Software
          or attempt to do any such things
        </li>
        <li>
          Reproduce, copy, distribute, resell or otherwise use the Software for
          any commercial purpose
        </li>
        <li>
          Allow any third party to use the Software on behalf of or for the
          benefit of any third party
        </li>
        <li>
          Use the Software in any way which breaches any applicable local,
          national or international law
        </li>
        <li>
          use the Software for any purpose that zero2onemys considers is a
          breach of this EULA agreement
        </li>
      </ul>

      <h2 className="text-lg font-bold">Intellectual Property and Ownership</h2>
      <p>
        zero2onemys shall at all times retain ownership of the Software as
        originally downloaded by you and all subsequent downloads of the
        Software by you. The Software (and the copyright, and other intellectual
        property rights of whatever nature in the Software, including any
        modifications made thereto) are and shall remain the property of
        zero2onemys.
      </p>
      <p>
        zero2onemys reserves the right to grant licences to use the Software to
        third parties.
      </p>

      <h2 className="text-lg font-bold">Termination</h2>
      <p>
        This EULA agreement is effective from the date you first use the
        Software and shall continue until terminated. You may terminate it at
        any time upon written notice to zero2onemys.
      </p>
      <p>
        It will also terminate immediately if you fail to comply with any term
        of this EULA agreement. Upon such termination, the licenses granted by
        this EULA agreement will immediately terminate and you agree to stop all
        access and use of the Software. The provisions that by their nature
        continue and survive will survive any termination of this EULA
        agreement.
      </p>

      <h2 className="text-lg font-bold">Governing Law</h2>
      <p>
        This EULA agreement, and any dispute arising out of or in connection
        with this EULA agreement, shall be governed by and construed in
        accordance with the laws of jp.
      </p>

      <h2 className="text-lg font-bold">Links</h2>
      <p>
        privacy policy:{" "}
        <Link
          href={`${SITE_URL}/${appPath}/privacy-policy/`}
          className="link link-primary"
        >
          {SITE_URL}/{appPath}/privacy-policy/
        </Link>
        <br />
        terms & conditions:{" "}
        <Link
          href={`${SITE_URL}/${appPath}/terms-and-conditions/`}
          className="link link-primary"
        >
          {SITE_URL}/{appPath}/terms-and-conditions/
        </Link>
      </p>
    </main>
  );
}
