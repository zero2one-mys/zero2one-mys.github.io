import Link from "next/link";

export default function AccountDeleteEnglish() {
  return (
    <main className="px-6 space-y-4">
      <div className="text-right">
        <Link
          href="/account-delete/ja"
          className="text-sm inline-block px-3 py-1 rounded-sm bg-gray-200 hover:bg-gray-300 text-gray-800"
        >
          日本語
        </Link>
      </div>
      <h1 className="text-2xl font-bold">Account Deletion Request</h1>
      <p>Thank you for using the apps provided by zero2omemys.</p>
      <p>
        This page explains how to delete your account for apps provided by
        zero2omemys.
      </p>
      <p>
        If you wish to delete your account, please follow the steps below to
        submit your request through the Account Deletion Form.
      </p>

      <h2 className="text-lg font-bold">
        Important Notes Regarding Account Deletion
      </h2>
      <ul className="list-disc list-inside">
        <li>
          All data associated with your account in the target app (play history,
          registration information, etc.) will be deleted.
        </li>
        <li>Deleted accounts cannot be recovered.</li>
        <li>
          Even after account deletion, we may retain certain information to
          comply with legal obligations or to resolve disputes. For details,
          please refer to the privacy policy of each app.
        </li>
      </ul>

      <h2 className="text-lg font-bold">Account Deletion Procedure</h2>
      <ol className="list-decimal list-inside">
        <li>
          Access the form below:
          <br />
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeCnoWd45vSRLKflTQDDO-bklRUWKENgDDhqN6aW_bLmhr_eg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            Account Deletion Form
          </Link>
        </li>
        <li>Fill in the required fields and submit the form.</li>
      </ol>

      <h2 className="text-lg font-bold">Account Deletion Form Fields</h2>
      <ul className="list-disc list-inside">
        <li>
          <span className="font-bold">Email Address</span>: Please provide a
          valid email address where we can reach you for confirmation.
        </li>
        <li>
          <span className="font-bold">App name</span>: Please enter the name of
          the app for which you wish to delete your account.
        </li>
        <li>
          <span className="font-bold">User name</span>: Please enter the user
          name registered in the target app.
        </li>
      </ul>

      <h2 className="text-lg font-bold">Contact Us</h2>
      <p>
        If you have any questions regarding account deletion, please contact us
        using the inquiry form below.
      </p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfziPrhzgUhXVNAsoqm6F5HkrAH7-CT-5CsBS7tPOK-XaKqEw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="link link-primary"
      >
        Inquiry Form
      </Link>
    </main>
  );
}
