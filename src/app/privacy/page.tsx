import { BusinessInfoPage } from '@/components/shared/business-info-page'

export default function PrivacyPage() {
  return (
    <BusinessInfoPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we collect, process, and protect personal information across accounts, listings, and support workflows."
      metrics={[
        { value: 'April 18, 2026', label: 'Last updated' },
        { value: 'GDPR-ready', label: 'Privacy framework' },
        { value: 'SOC controls', label: 'Security alignment' },
        { value: 'DPO contact', label: 'Support available' },
      ]}
      cards={[
        {
          title: 'Information we collect',
          description: 'Account profile details, listing content, usage telemetry, and support communication metadata.',
        },
        {
          title: 'How we use information',
          description: 'To deliver core platform features, improve relevance, prevent abuse, and communicate important account or policy updates.',
        },
        {
          title: 'Data sharing boundaries',
          description: 'We share data only with vetted processors and infrastructure providers needed to operate and secure the service.',
        },
        {
          title: 'Your controls',
          description: 'You can update account details, manage communication preferences, and request data export or deletion through support.',
        },
      ]}
      lists={[
        {
          title: 'Privacy commitments',
          items: [
            'Clear purpose limitation for each data category',
            'Access controls and audit-ready operational practices',
            'Retention windows aligned to legal and business necessity',
            'Prompt response process for privacy requests',
          ],
        },
      ]}
      cta={{
        title: 'Questions about your data?',
        description: 'Our team can explain what is stored and how request handling works in plain language.',
        actionLabel: 'Contact privacy team',
        actionHref: '/contact',
      }}
    />
  )
}
