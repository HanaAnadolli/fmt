import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LegalCookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#E4E4E4]">
      <Header />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
          Cookies Notice
        </h1>

        <div className="text-gray-800 leading-relaxed">
          <div className="space-y-6">
            <p>
              This Cookies Notice is an integral part of the Data Privacy Policy for KS-TF AG
              (hereinafter referred to as the “KS-TF” or “we“). In this notice, we provide you with
              information about how we use cookies and similar tracking technologies on our website
              and how you can manage your preferences.
            </p>

            <h3 className="text-xl font-bold text-primary">What are cookies?</h3>
            <p>
              Cookies are small text files that are placed on your device (computer, tablet,
              smartphone) when you visit a website. They are widely used to make websites function
              more efficiently and to provide information to website owners. Cookies can be
              temporary (session cookies) or permanent (persistent cookies).
            </p>

            <h3 className="text-xl font-bold text-primary">How do we use cookies?</h3>
            <p>
              We use cookies for various purposes, including but not limited to: website
              functionality (some cookies are essential for the proper functioning of our website.
              They enable you to navigate the site and use its features); Analytics (we use cookies
              to collect information about how visitors interact with our website. This helps us
              improve the site’s performance and user experience).
            </p>

            <h3 className="text-xl font-bold text-primary">What are your cookie preferences?</h3>
            <p>You have the option to manage your cookie preferences. Most web browsers allow you to control cookies through their settings. You can typically:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accept all cookies.</li>
              <li>Reject all cookies.</li>
              <li>Choose to be notified when a cookie is set.</li>
              <li>Delete cookies stored on your device.</li>
            </ul>
            <p>
              Please note that if you choose to disable cookies, some parts of our website may not
              function properly, and certain features may be limited.
            </p>

            <h3 className="text-xl font-bold text-primary">What are third-party cookies?</h3>
            <p>
              We may also allow third-party service providers (such as analytics and advertising
              partners) to place cookies on our website to help us analyze site performance and
              deliver targeted content. These third parties may have their own cookie policies and
              privacy practices. We encourage you to review their policies.
            </p>

            <h3 className="text-xl font-bold text-primary">What type of cookies do we use?</h3>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Cookie</th>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Expiry</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                      Cookieyes-consent
                    </td>
                    <td className="px-4 py-3">
                      CookieYes set the cookie to remember users’ consent preferences so that their
                      preferences are respected and subsequent visits to the site. It does not
                      collect or store any personal information about the visitors.
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">1 year.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-primary">How to manage your cookies?</h3>
            <p>
              Most browsers allow you to manage if and/or how cookies are set and used, and to
              clear cookies and browser data. Your browser may have settings that let you manage
              cookies on a site-by-site basis. Please refer to your browser instructions to learn
              more about your options for managing cookies.
            </p>

            <h3 className="text-xl font-bold text-primary">Cookie policy update</h3>
            <p>
              We reserve the right to apply any amendments or rectifications to this notice. Please
              visit this page from time to time to check any new or additional information. We will
              publish any updates on the website and, otherwise, we will inform about any changes by
              email.
            </p>

            <h3 className="text-xl font-bold text-primary">Data Privacy Policy</h3>
            <p>
              For more information on how we use your personal data, please{" "}
              <Link to="/privacy-policy" className="text-primary font-semibold hover:underline">
                click here
              </Link>
              .
            </p>

            <h3 className="text-xl font-bold text-primary">Contact us</h3>
            <p>
              If you have any questions or concerns about our use of cookies or our privacy
              practices, please contact us using the information provided in our Data Privacy
              Policy.
            </p>

            <p>
              By continuing to use our website, you consent to the use of cookies as described in
              this notice.
            </p>

            <p className="pt-4 text-sm text-gray-600">© 2026 – All rights reserved by KS-TF AG</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LegalCookies
