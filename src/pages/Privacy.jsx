import Legal from './Legal'

const sections = [
  {
    heading: '1. Information we collect',
    body: [
      'We collect information you provide directly to us and information gathered automatically when you use our website and services.',
      { list: [
        'Contact details you submit through our forms — such as your name, email address and phone number.',
        'Project information you share with us when enquiring about our services.',
        'Usage data such as pages visited, device and browser type, and approximate location, collected via cookies and analytics.',
      ] },
    ],
  },
  {
    heading: '2. How we use your information',
    body: [
      'We use the information we collect to:',
      { list: [
        'Respond to your enquiries and provide the services you request.',
        'Operate, maintain and improve our website, products and services.',
        'Send you relevant updates about your project or our offerings, where permitted.',
        'Comply with legal obligations and protect against misuse.',
      ] },
    ],
  },
  {
    heading: '3. Cookies & analytics',
    body: [
      'We use cookies and similar technologies to remember your preferences and understand how our site is used. You can control cookies through your browser settings; disabling them may affect some functionality.',
    ],
  },
  {
    heading: '4. Sharing your information',
    body: [
      'We do not sell your personal information. We may share it only with trusted service providers who help us operate our business (such as hosting, analytics and communication tools), and only to the extent necessary, or where required by law.',
    ],
  },
  {
    heading: '5. Data security',
    body: [
      'We apply reasonable technical and organisational measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: '6. Your rights',
    body: [
      'Depending on your location, you may have the right to access, correct, or delete your personal data, or to object to or restrict certain processing. To exercise these rights, contact us at hello@arusol.com.',
    ],
  },
  {
    heading: '7. Data retention',
    body: [
      'We keep your information only for as long as necessary to fulfil the purposes described in this policy, or as required to meet legal, accounting or reporting obligations.',
    ],
  },
  {
    heading: '8. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
    ],
  },
]

export default function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      updated="22 June 2026"
      intro="At Arusol Technologies, we respect your privacy. This policy explains what information we collect, how we use it, and the choices you have. It applies to arusol.com and the services we provide."
      sections={sections}
    />
  )
}
