import React, { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LegalPrivacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#E4E4E4]">
      <Header />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
          Privacy and Policy
        </h1>

        <div className="text-gray-800 leading-relaxed">
          <div className="space-y-6">
            <p>
              This Data Privacy Policy applies to KS-TF AG (hereinafter collectively referred to as
              the “KS-TF”, “we” or “us”). The following details provide information about how we
              collect, use, process, disclose, and protect your personal information.
            </p>

            <p>
              The protection of your personal data is important to us. In this Data Privacy Policy,
              we explain how we process your personal data online and offline, in your capacity as
              a business customer, business partner, supplier, job applicant, (website) visitor or
              other person with a business relationship with us.
            </p>

            <h3 className="text-xl font-bold text-primary">Data Controller information</h3>
            <p>
              The details of the companies to which this Data Privacy Policy refers to are as follows:
            </p>
            <p>
              <span className="font-semibold">KS-TF:</span> <br />
              Registered Office: Hinterbergstrasse 18, 6312 Steinhausen, Switzerland <br />
              Swiss Commercial Register ID (IDE/UID): CHE-356.547.648
            </p>

            <p>
              As the custodian of your personal information, in accordance with the Swiss Federal
              Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR), to
              the extent applicable, KS-TF is firmly committed to upholding the highest standards
              for safeguarding the personal data we gather and handle.
            </p>

            <p>
              Within this notification, you will find details regarding the data that KS-TF collects
              and processes, along with the purposes for which we collect or process this data. The
              specific data collected and processed may vary depending on the type of website you
              are visiting.
            </p>

            <p>
              Please be aware that KS-TF retains the discretion to modify, amend, or remove sections
              of this Data Privacy Policy as necessary. In the event of significant alterations to
              this policy, we will provide notification through the website or other appropriate means.
            </p>

            <h3 className="text-xl font-bold text-primary">Data we may collect</h3>
            <p>We may collect the following data from you, depending on the reason for you to enter in contact with us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information of individuals, such as home or business address, email address and telephone number.</li>
              <li>Employment Information: Employment history, job title, and employer details.</li>
              <li>Communication Information: Records of your correspondence with us.</li>
              <li>Biographical information relating to identified and identifiable individuals (e.g., date of birth, tax identification number, passport number or national identity card details, country of domicile and/or nationality, work experience).</li>
              <li>Information relating to individuals’ source of wealth and source of funds, and to assess whether individuals are a politically exposed person or may represent money laundering risk.</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">Purpose of the processing of the data</h3>
            <p>We may use your data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance, processing and/or enforcement of an agreement.</li>
              <li>Provision of information and support.</li>
              <li>Compliance with a legal or regulatory duty to disclose personal data (for example if required to do so by a court or a government authority, or to prevent a fraud or another crime).</li>
              <li>Marketing and providing services: to offer and deliver our services, including processing transactions, managing accounts, and responding to inquiries.</li>
              <li>Legal obligations: to comply with legal and regulatory obligations, such as anti-money laundering (AML) and know-your-customer (KYC) requirements.</li>
              <li>Communication: to communicate with you, provide updates, respond to requests, and deliver important information.</li>
              <li>Improving services: to analyze and improve our services, website, and customer experience.</li>
              <li>Security: To protect our systems and detect and prevent fraud and other illegal activities.</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">Collection of the data</h3>
            <p>We collect your data in different ways, such us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use or view our website via your browser’s cookies (please see our Cookies Notice).</li>
              <li>From the information you provide to us.</li>
              <li>From information about you provided to us by your company or an intermediary.</li>
              <li>When you communicate with us by telephone, email, or other forms of electronic communication. In this respect, we may monitor, record and store any such communication.</li>
              <li>From the information provided by your company in order to enter into a commercial agreement or relationship with us.</li>
              <li>From affiliates.</li>
              <li>From your agents, advisors, intermediaries, and representatives.</li>
              <li>From publicly available sources or from third parties, most commonly derived from background checks.</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">Sharing of the personal data</h3>
            <p>We may share your personal information with third parties, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service Providers: Trusted third-party service providers who assist us in delivering our services, such as IT support, marketing agencies, and payment processors.</li>
              <li>Regulatory Authorities: To fulfill legal and regulatory obligations, we may disclose information to government authorities or law enforcement agencies.</li>
              <li>Business Transfers: In the event of a merger, acquisition, or sale of all or part of our company, your personal information may be transferred as part of the transaction.</li>
              <li>Other Disclosures: To protect our rights, privacy, safety, or property, or that of others, we may share information as required or permitted by law.</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">Storage of the data</h3>
            <p>
              KS-TF securely stores your data in a cloud server Hostpoint, which is one of the largest
              hosting providers in Switzerland and guarantees the highest security.
            </p>

            <h3 className="text-xl font-bold text-primary">Retaining of the data</h3>
            <p>
              The duration for which we store your personal data is determined by applicable legal requirements for data retention.
              Once the specified retention period has elapsed, the corresponding data is regularly removed.
              If your data is essential for fulfilling a contract, initiating a contract, or if we have a legitimate interest in continued storage,
              we will delete the data when it is no longer necessary for these purposes or when you exercise your right to revoke or object.
            </p>

            <p>We will only keep your personal data for as long as we have a lawful basis to do so, mainly:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>for as long as it is required for the purpose of processing and compatible purposes, in the case of contracts normally for at least the duration of the contractual relationship;</li>
              <li>for as long as it is subject to a statutory retention requirement. For example, a ten-year retention period applies to certain data;</li>
              <li>for as long as we have a legitimate interest in storing it. This may be the case, in particular, if we need personal data to enforce or defend claims, for archiving purposes, and to ensure IT security.</li>
            </ul>

            <p>
              Kindly note that when we gather your personal data in compliance with anti-money laundering regulations, which include identification,
              screening, and reporting, we will retain this data for ten years following the termination of our relationship.
              This retention period may be extended if mandated by other laws or for potential legal proceedings.
            </p>

            <p>
              In other cases, we will typically retain your personal data for a period of ten years after concluding our contractual or other
              association with you, especially if there is a possibility of any claims arising from the services we provided to you.
            </p>

            <h3 className="text-xl font-bold text-primary">
              Transferring and processing of the personal data outside Switzerland and the European Union
            </h3>
            <p>
              When we share your personal data with third parties, it may be transferred to countries outside of Switzerland and the European Union
              that offer a sufficient level of data protection. However, if there are no laws in place ensuring this level of protection, we will only
              disclose personal data abroad if one of the following conditions is met:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Adequate Safeguards: We have implemented sufficient safeguards, such as contractual clauses, to ensure a suitable level of protection for the data overseas.</li>
              <li>Consent: You, as the data subject, have given specific consent for the transfer in the particular case.</li>
              <li>Contractual Performance: The data transfer is directly related to the conclusion or execution of a contract.</li>
              <li>Public Interest or Legal Claims: The disclosure is necessary in the specific case to protect an overriding public interest or for establishing, exercising, or enforcing legal claims in court.</li>
              <li>Life or Physical Integrity: The disclosure is essential to protect the life or physical integrity of the data subject.</li>
              <li>Public Accessibility: The data subject has made the data publicly accessible and has not expressly prohibited its processing.</li>
              <li>Same Legal Entity or Company: The disclosure occurs within the same legal entity or company or between legal entities or companies under the same management, provided that all parties involved adhere to data protection regulations ensuring an adequate level of protection.</li>
            </ul>

            <h3 className="text-xl font-bold text-primary">Data Protection Rights</h3>
            <p>Under FADP and GDPR, your data protection rights include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the right to request information about your personal data stored by us;</li>
              <li>the right to have inaccurate or incomplete personal data corrected;</li>
              <li>the right to request the deletion or anonymization of your personal data;</li>
              <li>the right to request that the processing of your personal data be restricted;</li>
              <li>the right to receive certain personal data in a structured, commonly used and machine-readable format;</li>
              <li>the right to revoke consent with effect for the future, insofar as processing is based on consent.</li>
            </ul>

            <p>
              These rights are subject to specific conditions and may vary depending on your jurisdiction and circumstances.
            </p>

            <h3 className="text-xl font-bold text-primary">Data Security</h3>
            <p>
              We take appropriate technical and organizational security measures in order to safeguard your personal data, protect you against unauthorized
              or unlawful processing activities, and to address the risk of loss, unintentional changes, inadvertent disclosure, or unauthorized access.
              However, like all companies, we cannot completely rule out data security infringements; certain residual risks are unavoidable.
            </p>

            <p>
              Security measures of a technical nature include encryption, access controls, and regular security assessments. Our data is secured by an SSL
              (Secure Sockets Layer). SSL is a protocol for web browsers and servers that enables authentication and encryption and decryption of data when
              sent over the Internet. Security measures of an organizational nature include training of our employees, confidentiality agreements, and audits.
            </p>

            <p>
              We also perform regular security analysis and malware scans, as well as regular maintenance to close any security gaps.
            </p>

            <h3 className="text-xl font-bold text-primary">Contact us</h3>
            <p>If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please contact us at:</p>
            <p className="mt-2">
              <span className="font-semibold">KS-TF Legal</span> <br />
              Email: <a className="text-primary font-semibold hover:underline" href="mailto:legal@kstf.ch">legal@kstf.ch</a> <br />
              Address: Hinterbergstrasse 18, 6312 Steinhausen, Switzerland <br />
              Phone: +41 41 766 48 28
            </p>

            <h3 className="text-xl font-bold text-primary">Contact the appropriate authorities</h3>
            <p>
              If you are not satisfied with how we are processing your personal data, you can submit a complaint by contacting the Federal Data Protection and
              Information Commissioner (“Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten [EDÖB]”), with the contacts below, or any other public
              authority responsible for data protection in Switzerland:
            </p>

            <p className="mt-2">
              <span className="font-semibold">Office of the Federal Data Protection and Information Commissioner (FDPIC)</span> <br />
              Feldeggweg 1 <br />
              CH – 3003 Berne
            </p>

            <h3 className="text-xl font-bold text-primary">Changes to this Privacy Policy</h3>
            <p>
              We may update this Data Privacy Policy from time to time to reflect changes in our practices or for legal or regulatory reasons. Any updates will be
              posted on our website, and the “Last Updated” date at the beginning of this policy will be revised accordingly.
            </p>

            <p>
              By continuing to use our services after any changes to this Data Privacy Policy, you agree to the revised terms.
            </p>

            <p className="pt-4 text-sm text-gray-600">© 2026 – All rights reserved by KS-TF AG</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LegalPrivacy
