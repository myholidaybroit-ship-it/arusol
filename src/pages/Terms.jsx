import Legal from './Legal'

const sections = [
  {
    heading: '1. Acceptance of terms',
    body: [
      'By accessing arusol.com or engaging Arusol Technologies for any service or product, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.',
    ],
  },
  {
    heading: '2. Our services',
    body: [
      'Arusol Technologies provides digital services including marketing, web and app development, advertising, video production and product engineering, as well as our own software products (such as Wandra and FlashReply).',
      'The specific scope, deliverables, timelines and fees for any engagement will be agreed separately in a proposal, statement of work or order form.',
    ],
  },
  {
    heading: '3. Use of the website',
    body: [
      'You agree to use our website lawfully and not to:',
      { list: [
        'Attempt to gain unauthorised access to our systems or data.',
        'Disrupt or interfere with the security or availability of the site.',
        'Use the site to transmit unlawful, harmful or misleading content.',
      ] },
    ],
  },
  {
    heading: '4. Intellectual property',
    body: [
      'All content on this website — including text, graphics, logos and software — is owned by or licensed to Arusol Technologies and is protected by applicable laws. Ownership of project deliverables transfers to the client as set out in the relevant agreement, typically upon full payment.',
    ],
  },
  {
    heading: '5. Payments',
    body: [
      'Fees, payment schedules and invoicing terms are defined in your project agreement. Unless stated otherwise, invoices are due within the period specified, and late payments may pause ongoing work.',
    ],
  },
  {
    heading: '6. Products',
    body: [
      'Use of our software products is subject to any additional product-specific terms presented at sign-up. We may update, modify or discontinue features to improve the products over time.',
    ],
  },
  {
    heading: '7. Disclaimers',
    body: [
      'Our website and services are provided on an "as is" and "as available" basis. While we work to deliver high-quality results, we do not warrant that the services will be uninterrupted, error-free, or that specific business outcomes will be achieved.',
    ],
  },
  {
    heading: '8. Limitation of liability',
    body: [
      'To the maximum extent permitted by law, Arusol Technologies shall not be liable for any indirect, incidental or consequential damages. Our total liability for any claim shall not exceed the amount paid by you for the relevant service.',
    ],
  },
  {
    heading: '9. Termination',
    body: [
      'Either party may terminate an engagement as set out in the applicable agreement. We may suspend or restrict access to the website or services if these terms are breached.',
    ],
  },
  {
    heading: '10. Governing law',
    body: [
      'These terms are governed by the laws of the jurisdiction in which Arusol Technologies operates. Any disputes will be subject to the exclusive jurisdiction of its competent courts.',
    ],
  },
  {
    heading: '11. Changes to these terms',
    body: [
      'We may revise these Terms & Conditions from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
]

export default function Terms() {
  return (
    <Legal
      title="Terms & Conditions"
      updated="22 June 2026"
      intro="These Terms & Conditions govern your use of arusol.com and the services provided by Arusol Technologies. Please read them carefully."
      sections={sections}
    />
  )
}
