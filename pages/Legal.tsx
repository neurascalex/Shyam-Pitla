
import React from 'react';

// Fixed TypeScript error: property 'children' missing in type '{ title: string; }' by making it optional
const LegalLayout = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="pt-32 pb-40 geometric-lines min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-5xl font-serif mb-12 text-[#f8fafc] border-b border-[#a3d9cf]/10 pb-8">{title}</h1>
      <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 font-light leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy">
    <p className="italic text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
    
    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">1. Introduction</h2>
      <p>This privacy policy explains how Shyam Pitla ("we", "us", or "our") collects, uses, and protects any personal information you provide through shyampitla.com. We are committed to ensuring that your privacy is protected in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">2. Data We Collect</h2>
      <p>We may collect the following information through our contact forms or direct inquiries:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Name and professional title.</li>
        <li>Contact information including email address and phone number.</li>
        <li>Professional details such as clinical specialty and website URL.</li>
        <li>Usage data and cookie information (see our Cookie Policy).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">3. Legal Basis for Processing</h2>
      <p>Under the UK GDPR, we rely on the following legal bases to process your personal data:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Consent:</strong> Where you have given clear consent for us to process your data for a specific purpose (e.g., filling out a contact form).</li>
        <li><strong>Contract:</strong> Where processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.</li>
        <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests (e.g., business development and responding to inquiries).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">4. Your Rights</h2>
      <p>Under UK data protection law, you have rights including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Right of access:</strong> You have the right to ask us for copies of your personal information.</li>
        <li><strong>Right to rectification:</strong> You have the right to ask us to rectify personal information you think is inaccurate.</li>
        <li><strong>Right to erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.</li>
        <li><strong>Right to restriction of processing:</strong> You have the right to ask us to restrict the processing of your personal information.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">5. Contact Us</h2>
      <p>If you have any questions about this policy or our data practices, please contact us at <a href="mailto:shyam@neurascalex.com" className="text-[#a3d9cf] underline">shyam@neurascalex.com</a>. You also have the right to complain to the Information Commissioner's Office (ICO) if you are unhappy with how we have used your data.</p>
    </section>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Terms of Service">
    <p className="italic text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">1. Agreement to Terms</h2>
      <p>By accessing shyampitla.com, you agree to be bound by these Terms of Service and all applicable laws and regulations in the United Kingdom. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">2. Non-Clinical Disclaimer</h2>
      <p><strong>Crucial:</strong> All services provided by Shyam Pitla and NeuraScaleX are intended for educational, architectural, and operational efficiency purposes only. We do not provide medical advice, clinical diagnosis, or treatment recommendations. Clinician Digital Twins are designed as non-clinical extensions of verified expertise and must not be used as a substitute for professional clinical judgment.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">3. Intellectual Property</h2>
      <p>The content, organization, graphics, design, and other matters related to the site are protected under applicable copyrights and trademarks. The copying, redistribution, or publication by you of any such matters or any part of the site is strictly prohibited without express written permission.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">4. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Shyam Pitla shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your access to or use of (or inability to access or use) the services.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">5. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
    </section>
  </LegalLayout>
);

export const Cookies = () => (
  <LegalLayout title="Cookie Policy">
    <p className="italic text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString('en-GB')}</p>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">1. What Are Cookies</h2>
      <p>As is common practice with almost all professional websites, this site uses cookies—tiny files that are downloaded to your computer—to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">2. How We Use Cookies</h2>
      <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Form related cookies:</strong> When you submit data to through a form such as those found on contact pages, cookies may be set to remember your user details for future correspondence.</li>
        <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">3. Disabling Cookies</h2>
      <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
    </section>

    <section>
      <h2 className="text-2xl font-serif text-[#c5a059] mb-4">4. More Information</h2>
      <p>Hopefully that has clarified things for you. If there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
      <p>Email: <a href="mailto:shyam@neurascalex.com" className="text-[#a3d9cf] underline">shyam@neurascalex.com</a></p>
    </section>
  </LegalLayout>
);
