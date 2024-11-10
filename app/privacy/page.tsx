export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-black">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg mb-4">
          Welcome to our Chrome extension &quot;LinkedIn Profile Scraper &
          Copier&quot;. We are committed to protecting your privacy. This policy
          explains what information we collect, how we use it, and how we keep
          it safe.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">
          Information We Collect
        </h2>
        <p className="mb-4">
          Our extension collects the following information:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Your email and password for logging into your personal dashboard.
          </li>
          <li>
            Profile data scraped from public LinkedIn profiles, including names,
            job titles, companies, and contact details.
          </li>
        </ul>
        <p className="mb-4">
          This information is securely stored in your personal dashboard and is
          accessible only by you.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          The data you collect using this extension is stored in your personal
          dashboard for your own use. You may view, manage, and export this data
          at any time. We do not sell or share your data with third parties.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">
          Security
        </h2>
        <p className="mb-4">
          We take the security of your information seriously. Your login
          credentials are encrypted, and your data is securely stored on our
          servers. Access to your data is restricted and protected by
          authentication methods.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">
          Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. If we make
          changes, we will post the new policy on this page and update the date
          of the last modification.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this privacy policy, please contact us
          at: rbatoulime@gmail.com.
        </p>

        <p className="text-center text-sm mt-6 text-gray-500">
          © 2024 LinkedIn Profile Scraper & Copier. All rights reserved.
        </p>
      </div>
    </div>
  );
}
