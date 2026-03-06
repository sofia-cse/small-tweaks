import React from "react";
import styles from './Privacy.module.css';

function PrivacyPolicy() {
  return (
    
    <section id="privacypolicy">
        <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p class={styles.date}><strong>Last updated: March 6, 2026</strong></p>

        <p>Small Tweaks ("we," "us," or "our") operates the website <strong>smalltweaks.co</strong> (the "Site"). We are a research and development firm specializing in UX auditing, high-impact optimization identification, prototyping, and implementation to enhance digital products and services.</p>

        <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site, submit inquiries, or interact with our advertising.</p>

        <p>By using the Site, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Site.</p>

        <h2>1. Information We Collect</h2>

        <p><strong>Personal Information</strong><br />
        We collect information you voluntarily provide, such as:</p>
        <ul>
            <li>Name, email address, phone number, company name, or project details when you contact us via forms, email, or consultation requests.</li>
        </ul>

        <p><strong>Automatically Collected Information</strong></p>
        <ul>
            <li>Device and usage data: IP address, browser type, operating system, device identifiers, pages visited, visit times, referring/exit pages, and interaction patterns.</li>
            <li>Cookies and tracking technologies: We and third parties use cookies, pixels, web beacons, and similar tools for analytics, functionality, and advertising (see Section 4).</li>
        </ul>

        <p>We aim to collect only the minimal information needed to respond to inquiries and improve our Site and services.</p>

        <h2>2. How We Collect Information</h2>
        <ul>
            <li>Directly from you (e.g., contact forms or emails).</li>
            <li>Automatically via cookies, server logs, pixels, and analytics tools.</li>
            <li>From third-party partners (e.g., advertising and analytics providers).</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
            <li>Respond to your inquiries and deliver consultations or services.</li>
            <li>Improve the Site, our services, and user experience.</li>
            <li>Analyze Site usage and trends.</li>
            <li>Deliver personalized advertisements (including retargeting/remarketing) about our UX and product improvement services.</li>
            <li>Comply with legal obligations, prevent fraud, and enforce our terms.</li>
        </ul>

        <h2>4. Advertising and Tracking Technologies</h2>
        <p>We partner with third-party platforms to promote our services through online advertising.</p>

        <p><strong>Google Ads</strong> (including remarketing and similar audiences/your data segments): <br />
        Third-party vendors, including Google, use cookies and similar technologies to serve ads based on your prior visits to our Site. Google's advertising cookies enable it and partners to display ads based on your visits to our Site and other sites across the Internet.</p>
        <p>You can opt out of personalized advertising by Google at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google's Ad Settings</a>. Additional opt-out options are available via the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a> or the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance's WebChoices tool</a>.</p>

        <p><strong>Meta Ads</strong> (Meta Pixel, custom audiences, lookalike audiences):<br />
        We use the Meta Pixel and related tools to track interactions (e.g., page views, form submissions) for ad performance measurement, retargeting, and audience building. This involves sharing data about your Site activity with Meta Platforms, Inc. and its affiliates. Meta may combine this with data from other sources.</p>
        <p>To learn more about Meta's data use for advertising and to manage your ad preferences, visit <a href="https://www.facebook.com/ads/preferences/" target="_blank" rel="noopener noreferrer">Meta's Ad Preferences</a> or the <a href="https://www.facebook.com/business/help" target="_blank" rel="noopener noreferrer">Meta Business Help Center</a>.</p>

        <p>These tools help us show relevant ads to people interested in UX optimization and digital product enhancements.</p>

        <h2>5. Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share it with:</p>
        <ul>
            <li>Service providers (e.g., hosting, analytics, email) under strict confidentiality agreements.</li>
            <li>Advertising partners (Google, Meta, etc.) as described above.</li>
            <li>Authorities if required by law, to protect rights/safety, or during a business transfer (e.g., merger).</li>
        </ul>

        <h2>6. Cookies and Similar Technologies</h2>
        <p>We use essential, functional, analytics, and advertising cookies/pixels. Manage preferences via any cookie consent banner on our Site or contact us directly.</p>

        <h2>7. Your Privacy Rights</h2>
        <p>Depending on your location (e.g., CCPA/CPRA in California or other U.S. state laws), you may have rights to access, correct, delete, restrict, or port your data, or opt out of certain processing (including targeted advertising).</p>
        <ul>
            <li>Opt out of targeted ads using the links in Section 4.</li>
            <li>For other requests or questions, email us at <a href="mailto:hello@smalltweaks.co">hello@smalltweaks.co</a>. We respond in accordance with applicable laws.</li>
        </ul>

        <h2>8. Data Security</h2>
        <p>We use reasonable technical and organizational measures to protect your information, though no system is 100% secure.</p>

        <h2>9. International Transfers</h2>
        <p>Your data may be processed in the United States or other countries. We apply appropriate safeguards as required by law.</p>

        <h2>10. Children's Privacy</h2>
        <p>Our Site is not directed to children under 13. We do not knowingly collect data from children.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this policy. Changes will be posted here with a new "Last updated" date. Continued Site use after changes means you accept the updated policy.</p>

        <div class="contact-info">
            <h2>12. Contact Us</h2>
            <p>For questions, rights requests, or concerns:</p>
            <p><strong>Small Tweaks</strong><br />
            Email: <a href="mailto:hello@smalltweaks.co">hello@smalltweaks.co</a><br/>
            Website: <a href="https://smalltweaks.co">smalltweaks.co</a></p>
        </div>
        </div>
    </section>
  );
}

export default PrivacyPolicy;